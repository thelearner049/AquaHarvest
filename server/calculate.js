const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Load datasets
const rainfallData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'rainfallData.json')));
const groundwaterData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'groundwaterData.json')));
const districtCosts = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'districtCosts.json')));

app.post('/estimate', (req, res) => {
  const {
    location,
    rooftopArea,
    openSpace,
    dwellers,
    roofType,
    hasBorewell,
    soilType
  } = req.body;

  const normalizedLocation = normalizeLocation(location);
  const rainfall = getRainfall(normalizedLocation);
  const runoffCoefficient = getRunoffCoefficient(roofType);
  const harvestingPotential = rooftopArea * rainfall * runoffCoefficient;

  const feasibility = getFeasibility({
    soilType,
    openArea: openSpace,
    rainfall,
    hasBorewell,
    roofArea: rooftopArea
  });

  const structure = getStructure(openSpace, hasBorewell);
  const runoffVolume = harvestingPotential * 0.9;
  const rechargeVolume = runoffVolume;
  const groundwaterInfo = getGroundwaterInfo(normalizedLocation);
  const costEstimate = getStructureCost(location, structure.type);
  const costBenefit = getCostBenefit(harvestingPotential);

  res.json({
    harvestingPotential: Math.round(harvestingPotential),
    feasibility,
    recommendedStructure: structure.type,
    structureSize: structure.size,
    runoffVolume: Math.round(runoffVolume),
    rechargeVolume: Math.round(rechargeVolume),
    groundwaterInfo,
    estimatedCost: costEstimate,
    costBenefit,
    downloadableReport: null
  });
});

// 🔍 Normalize location input
function normalizeLocation(input) {
  return (input || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, ''); // removes digits, commas, symbols, spaces
}
// 🔍 Rainfall lookup
function getRainfall(location) {
  for (const state in rainfallData) {
    for (const district in rainfallData[state]) {
      if (normalizeLocation(district) === location) {
        return rainfallData[state][district];
      }
    }
  }
  return 1000; // fallback
}

// 🔍 Groundwater lookup
function getGroundwaterInfo(location) {
  for (const state in groundwaterData) {
    for (const district in groundwaterData[state]) {
      if (normalizeLocation(district) === location) {
        return groundwaterData[state][district];
      }
    }
  }
  return {
    aquifer: "Unknown",
    rechargeRate: "Unknown",
    depth: "Unknown",
    status: "Unknown"
  };
}

function getRunoffCoefficient(roofType) {
  const map = {
    "Flat Concrete": 0.85,
    "Sloped Concrete": 0.8,
    "Flat Tin": 0.75,
    "Sloped Tin": 0.7
  };
  return map[roofType] || 0.8;
}

// ✅ Feasibility logic
function getFeasibility({ soilType, openArea, rainfall, hasBorewell, roofArea }) {
  const normalizedSoil = normalizeLocation(soilType);
  const safeRainfall = Number(rainfall) || 600;
  const safeOpenArea = Number(openArea) || 0;
  const safeRoofArea = Number(roofArea) || 0;
  const borewellPresent = hasBorewell === "Yes";

  if (safeRoofArea < 10 && safeOpenArea < 10) return "Not feasible";
  if (safeRainfall < 400) return "Not feasible";

  if (normalizedSoil === "clayey") {
    if (safeOpenArea >= 30 && safeRainfall >= 800) {
      return borewellPresent ? "Feasible with recharge pit near borewell" : "Feasible with trench";
    }
    if (safeOpenArea >= 15 && safeRainfall >= 600) {
      return borewellPresent ? "Feasible with recharge shaft" : "Feasible with conditions";
    }
    return "Not feasible";
  }

  if (normalizedSoil === "loamy") {
    if (safeOpenArea >= 50 && safeRainfall >= 1000) return "Highly feasible";
    if (safeOpenArea >= 20 && safeRainfall >= 700) return "Feasible";
    return borewellPresent ? "Feasible with recharge shaft" : "Feasible with conditions";
  }

  if (normalizedSoil === "sandy") {
    if (safeOpenArea >= 40 && safeRainfall >= 900) return "Highly feasible";
    if (safeOpenArea >= 20 && safeRainfall >= 700) return "Feasible";
    return borewellPresent ? "Feasible with recharge shaft" : "Feasible with conditions";
  }

  if (normalizedSoil === "mixed") {
    if (safeOpenArea >= 30 && safeRainfall >= 900) return "Feasible";
    if (safeOpenArea >= 15 && safeRainfall >= 700) {
      return borewellPresent ? "Feasible with recharge pit" : "Feasible with conditions";
    }
    return "Feasible with conditions";
  }

  return "Feasible with conditions";
}

function getStructure(openSpace, hasBorewell) {
  const area = Number(openSpace) || 0;
  let type = "Recharge Shaft";
  let size = "1m × 1m × 3m";

  if (area >= 50) {
    type = "Recharge Pit";
    size = "2m × 2m × 2m";
  } else if (area >= 20) {
    type = "Recharge Trench";
    size = "5m × 1m × 1.5m";
  } else if (area >= 5) {
    type = "Recharge Shaft";
    size = "1m × 1m × 3m";
  } else {
    type = "Not enough space";
    size = "N/A";
  }

  if (hasBorewell === "Yes" && type !== "Not enough space") {
    type += " (near borewell)";
  }

  return { type, size };
}

// ✅ New cost logic using districtCosts.json
function getStructureCost(location, structureType) {
  const cleanType = structureType.replace(" (near borewell)", "").trim();
  const normalizedInput = normalizeLocation(location);

  // Try district-level match
  for (const state in districtCosts) {
    for (const district in districtCosts[state]) {
      const normalizedDistrict = normalizeLocation(district);
      if (
        normalizedInput === normalizedDistrict ||
        normalizedInput.includes(normalizedDistrict) ||
        normalizedDistrict.includes(normalizedInput)
      ) {
        const cost = districtCosts[state][district][cleanType];
        console.log(`✅ District match: ${district}, ${cleanType} → ₹${cost}`);
        return cost || 0;
      }
    }
  }

  // Fallback: match state name
  for (const state in costModifiers) {
    const normalizedState = normalizeLocation(state);
    if (
      normalizedInput === normalizedState ||
      normalizedInput.includes(normalizedState) ||
      normalizedState.includes(normalizedInput)
    ) {
      const modifier = costModifiers[state] || 1.0;
      const baseCosts = {
        "Recharge Pit": 15000,
        "Recharge Trench": 20000,
        "Recharge Shaft": 18000
      };
      const fallbackCost = Math.round((baseCosts[cleanType] || 16000) * modifier);
      console.log(`⚠️ Fallback to state: ${state}, ${cleanType} → ₹${fallbackCost}`);
      return fallbackCost;
    }
  }

  console.warn(`❌ No match for: ${location}, structure: ${cleanType}`);
  return 0;
}

function getCostBenefit(potential) {
  const waterSaved = potential * 0.75;
  const moneySaved = Math.round(waterSaved / 1000 * 25);
  const subsidy = Math.round(moneySaved * 0.2);
  return {
    waterSaved: Math.round(waterSaved),
    moneySaved: `₹${moneySaved} per year`,
    subsidyUsed: `₹${subsidy} approx`
  };
}

app.listen(3000, () => console.log('Server running on port 3000'));
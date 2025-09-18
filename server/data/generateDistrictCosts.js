const fs = require('fs');
const path = require('path');

// Load rainfall and cost modifier data
const rainfallData = JSON.parse(fs.readFileSync(path.join(__dirname, 'rainfallData.json')));
const costModifiers = JSON.parse(fs.readFileSync(path.join(__dirname, 'costModifiers.json')));

// Base structure costs
const baseCosts = {
  "Recharge Pit": 15000,
  "Recharge Trench": 20000,
  "Recharge Shaft": 18000
};

// Generate district-wise cost data
const districtCosts = {};

for (const state in rainfallData) {
  const modifier = costModifiers[state] || 1.0;
  districtCosts[state] = {};

  for (const district in rainfallData[state]) {
    districtCosts[state][district] = {
      "Recharge Pit": Math.round(baseCosts["Recharge Pit"] * modifier),
      "Recharge Trench": Math.round(baseCosts["Recharge Trench"] * modifier),
      "Recharge Shaft": Math.round(baseCosts["Recharge Shaft"] * modifier)
    };
  }
}

// Save to file
fs.writeFileSync(
  path.join(__dirname, 'districtCosts.json'),
  JSON.stringify(districtCosts, null, 2)
);

console.log("✅ districtCosts.json generated successfully.");
import { useForm } from "react-hook-form";
import { AiOutlineHome } from "react-icons/ai";
import { RiGolfBallLine } from "react-icons/ri";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiSolarRoofDuotone } from "react-icons/pi";
import { FaBoreHole } from "react-icons/fa6";
import { GiCoalPile } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaHandHoldingDroplet } from "react-icons/fa6";
import { useState } from "react";

const Estimation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [results, setResults] = useState(null);

  async function onSubmit(data) {
    console.log(data);
    try {
      const response = await fetch("http://localhost:3000/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setResults(result);
    } catch (error) {
      console.error("Error fetching estimation:", error);
    }
  }

  return (
    <div className="mx-auto max-w-320">
      {/* Title Section */}
      <div className="flex flex-col gap-5 items-center pt-15">
        <h1 className="text-4xl font-bold ">Estimate Your Rooftop Potential</h1>
        <p className="text-lg  text-gray-500 max-w-185 text-center">
          Calculate your rainwater harvesting potential and get personalized{" "}
          <br /> recommendations for your property.
        </p>
      </div>
      <div className="flex flex-row mt-10 gap-20 justify-center">
        {/* Input Section */}
        <div className=" max-w-120 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col  py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10 flex-1 mb-20">
          <h4 className="font-bold mb-4 text-center">Property Details</h4>
          <form
            className="flex flex-col gap-4 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="flex items-center gap-2 font-semibold mb-1">
                <AiOutlineHome className="text-[#003366]" />
                Rooftop Area
              </label>
              <input
                className="border bg-white border-gray-300 rounded-lg w-full px-4 py-2 "
                type="number"
                {...register("rooftopArea")}
              />
            </div>

            <div>
              <label className="flex gap-2 items-center font-semibold mb-1">
                <RiGolfBallLine className="text-[#003366]" />
                Open Space Available
              </label>
              <input
                className="border bg-white border-gray-300 rounded-lg w-full px-4 py-2"
                type="number"
                {...register("openSpace")}
              />
            </div>

            <div>
              <label className="flex gap-2 items-center font-semibold mb-1">
                <MdOutlinePeopleAlt className="text-[#003366]" />
                Number of Dwellers
              </label>
              <input
                className="border bg-white border-gray-300 rounded-lg w-full px-4 py-2"
                type="number"
                {...register("dwellers")}
              />
            </div>

            <div className="flex flex-row gap-5">
              <div className="flex-1">
                <label className="flex gap-2 items-center font-semibold mb-1">
                  <PiSolarRoofDuotone className="text-[#003366]" />
                  Roof Type
                </label>
                <select
                  className="border bg-white border-gray-300 rounded-lg w-full px-4 py-2"
                  {...register("roofType")}
                >
                  <option value="Flat Concrete">Flat Concrete</option>
                  <option value="Sloped Concrete">Sloped Concrete</option>
                  <option value="Flat Tin">Flat Tin</option>
                  <option value="Sloped Tin">Sloped Tin</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="flex gap-2 items-center font-semibold mb-1">
                  <GiCoalPile className="text-[#003366]" />
                  Soil Type
                </label>
                <select
                  className="border bg-white border-gray-300 rounded-lg w-full px-4 py-2"
                  {...register("soilType")}
                >
                  <option value="Loamy">Loamy</option>
                  <option value="Sandy">Sandy</option>
                  <option value="Clayey">Clayey</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>
            </div>

            <div>
              <label className="flex gap-2 items-center font-semibold mb-1">
                <FaBoreHole className="text-[#003366]" />
                Exsisting Borewell/Tube Well
              </label>
              <select
                className="border bg-white border-gray-300 rounded-lg w-2/3 px-4 py-2"
                {...register("well")}
              >
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>

            <div>
              <label className="flex gap-2 items-center font-semibold mb-1">
                <MdOutlineLocationOn className="text-[#003366]" />
                Location
              </label>
              <input
                className="border bg-white border-gray-300 rounded-lg w-full px-4 py-2"
                type="text"
                {...register("location")}
              />
            </div>
            <button
              type="submit"
              className="font-semibold text-xl text-white bg-[#003366] hover:bg-[#054687] px-6 py-1.5 rounded-md cursor-pointer self-start"
            >
              Calculate Potential
            </button>
          </form>
        </div>
        {/* Output Section */}
        <div className="max-w-120 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col  py-10 px-10 gap-10 transition-shadow duration-300 hover:shadow-lg hover:z-10 flex-1 mb-20">
          <h4 className="flex items-center font-bold gap-2 justify-center">
            <FaHandHoldingDroplet />
            Estimation Results
          </h4>
          {results ? (
            <div className="space-y-5 text-gray-800">
              <p>
                <strong>Rainwater Potential:</strong>{" "}
                {results.harvestingPotential} L/year
              </p>
              <p>
                <strong>Feasibility:</strong> {results.feasibility}
              </p>
              <p>
                <strong>Recommended Structure:</strong>{" "}
                {results.recommendedStructure}
              </p>
              <p>
                <strong>Structure Size:</strong> {results.structureSize}
              </p>
              <p>
                <strong>Runoff Volume:</strong> {results.runoffVolume} L/year
              </p>
              <p>
                <strong>Groundwater Info:</strong>{" "}
                {results.groundwaterInfo.aquifer} aquifer
              </p>
              <p>
                <strong>Recharge Rate:</strong>{" "}
                {results.groundwaterInfo.rechargeRate}
              </p>
              <p>
                <strong>Estimated Cost:</strong> ₹{results.estimatedCost}
              </p>
              <p>
                <strong>Cost-Benefit:</strong> Saves{" "}
                {results.costBenefit.waterSaved} L/year,{" "}
                {results.costBenefit.moneySaved}
              </p>
            </div>
          ) : (
            <p className="text-gray-500">
              Fill in your property details and click "Calculate Potential" to
              see your rainwater harvesting estimation.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Estimation;

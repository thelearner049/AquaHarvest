import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { LuCloudRain } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoCalculatorOutline } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";

const Features = () => {
  return (
    <div className="mx-auto max-w-320 pt-5 flex gap-20 flex-col mb-20">
      {/* Title Section */}
      <div className="flex flex-col gap-5 items-center pt-15">
        <h1 className="text-5xl font-bold ">Comprehensive Feature Set</h1>
        <p className="text-xl  text-gray-600 max-w-185 text-center">
          Everything you need to plan, implement, and optimize your rainwater
          harvesting system with confidence and precision.
        </p>
      </div>
      {/* Cards Section */}
      <div className="flex flex-row gap-10 flex-wrap justify-center">
        <div className="max-w-90 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col  py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10">
          <IoMdCheckmarkCircleOutline className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Feasibility Assessment</h2>
          <p className="text-gray-700 ">
            Comprehensive analysis of your rooftop's suitability for rainwater
            harvesting based on structural and environmental factors.
          </p>
        </div>
        <div className="max-w-90 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10 ">
          <LuSettings className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">
            Recharge Structure Recommendations
          </h2>
          <p className="text-gray-700">
            Customized suggestions for optimal recharge structures, filtration
            systems, and storage solutions for your specific needs.
          </p>
        </div>
        <div className="max-w-90 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10">
          <LuCloudRain className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Real-time Rainfall Data</h2>
          <p className="text-gray-700 ">
            Access to historical and current rainfall patterns, seasonal
            variations, and climate projections for accurate planning.
          </p>
        </div>
        <div className="max-w-90 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10">
          <FaArrowTrendUp className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Runoff Generation Analysis</h2>
          <p className="text-gray-700 ">
            Precise calculations of water runoff potential based on rooftop
            area, material, slope, and local precipitation data.
          </p>
        </div>
        <div className="max-w-90 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10">
          <IoCalculatorOutline className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Cost-Benefit Analysis</h2>
          <p className="text-gray-700 ">
            Detailed financial projections including installation costs,
            maintenance expenses, and long-term water savings.
          </p>
        </div>
        <div className="max-w-90 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10">
          <LuUpload className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Blueprint Upload</h2>
          <p className="text-gray-700">
            Upload rooftop images or architectural blueprints for enhanced
            accuracy in area calculations and system design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

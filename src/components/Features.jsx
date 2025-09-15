import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { LuCloudRain } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoCalculatorOutline } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";


const Features = () => {
  return (
    <div className="mx-auto max-w-320 pt-20 flex gap-20 flex-col mb-20">
      {/* Title Section */}
      <div className="flex flex-col gap-5 items-center pt-15">
        <h1 className="text-5xl font-bold ">Comprehensive Feature Set</h1>
        <p className="text-xl  text-gray-600 max-w-185 text-center">
          Everything you need to plan, implement, and optimize your rainwater harvesting system with confidence and precision.
        </p>
      </div>
      {/* Cards Section */}
      <div className="flex flex-row gap-10 flex-wrap justify-center">
        <div className="max-w-90 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col  py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10">
          <IoMdCheckmarkCircleOutline className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Water Scarcity Crisis</h2>
          <p className="text-gray-700 ">
            Over 2 billion people lack access to safely managed drinking water.
            Groundwater depletion threatens global water security.
          </p>
        </div>
        <div className="max-w-90 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10 ">
          <LuSettings className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Groundwater Depletion</h2>
          <p className="text-gray-700">
            Aquifers are being depleted faster than they can naturally recharge,
            creating an urgent need for sustainable replenishment solutions.
          </p>
        </div>
        <div className="max-w-90 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10">
          <LuCloudRain className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Climate Impact</h2>
          <p className="text-gray-700 ">
            Irregular rainfall patterns and extreme weather events make
            efficient water harvesting more critical than ever.
          </p>
        </div>
        <div className="max-w-90 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10">
          <FaArrowTrendUp className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Water Scarcity Crisis</h2>
          <p className="text-gray-700 ">
            Over 2 billion people lack access to safely managed drinking water.
            Groundwater depletion threatens global water security.
          </p>
        </div>
        <div className="max-w-90 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10">
          <IoCalculatorOutline className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Water Scarcity Crisis</h2>
          <p className="text-gray-700 ">
            Over 2 billion people lack access to safely managed drinking water.
            Groundwater depletion threatens global water security.
          </p>
        </div>
        <div className="max-w-90 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10">
          <LuUpload className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Water Scarcity Crisis</h2>
          <p className="text-gray-700">
            Over 2 billion people lack access to safely managed drinking water.
            Groundwater depletion threatens global water security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

import { LuDroplets } from "react-icons/lu";
import { BiLeaf } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import {Link} from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-320 gap-10 flex flex-col mb-30">
      {/* Title Section */}
      <div className="flex flex-col gap-5 items-center mt-10">
        <h1 className="text-6xl font-bold ">
          Harness Every Drop of <span className="text-blue-900">Rainwater</span>
        </h1>
        <p className="text-xl  text-gray-600 max-w-185 text-center">
          Estimate your rooftop rainwater harvesting potential with precision.
          Our GIS-powered platform helps communities build sustainable water
          solutions for a water-secure future.
        </p>
      </div>

      {/* Buttons section */}
      <div className="flex flex-row gap-5 justify-center">
        <Link to="/estimation" className="font-semibold text-xl text-white bg-[#003366] hover:bg-[#054687] px-6 py-1.5 rounded-md cursor-pointer">
          Estimate Your Rooftop Potential
        </Link>
        <Link to="/gis" className="font-semibold text-xl px-6 py-1.5 rounded-md cursor-pointer border hover:bg-[#003366] hover:text-white duration-300">
          Analyze via GIS
        </Link>
      </div>
      {/* Cards Section */}
      <div className="flex flex-row gap-15 m-10 ">
        <div className="max-w-100 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col items-center py-10 px-10 justify-between">
          <LuDroplets className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Water Scarcity Crisis</h2>
          <p className="text-gray-700 text-center">
            Over 2 billion people lack access to safely managed drinking water.
            Groundwater depletion threatens global water security.
          </p>
        </div>
        <div className="max-w-100 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col items-center py-10 px-10 justify-between ">
          <BiLeaf className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900" />
          <h2 className="text-xl font-semibold">Groundwater Depletion</h2>
          <p className="text-gray-700 text-center">
            Aquifers are being depleted faster than they can naturally recharge,
            creating an urgent need for sustainable replenishment solutions.
          </p>
        </div>
        <div className="max-w-100 h-75 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col items-center py-10 px-10 justify-between">
          <BsGlobe className="size-15 p-3 bg-blue-100 rounded-lg text-blue-900"/>
          <h2 className="text-xl font-semibold">Climate Impact</h2>
          <p className="text-gray-700 text-center">
            Irregular rainfall patterns and extreme weather events make
            efficient water harvesting more critical than ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

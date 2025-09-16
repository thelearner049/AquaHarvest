import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";

const Gis = () => {
  return (
    <div className="flex flex-col gap-5 items-center pt-15">
      {/* Title Section */}
      <h1 className="text-5xl font-bold ">GIS-Based Rooftop Analysis</h1>
      <p className="text-lg  text-gray-500 max-w-185 text-center">
        Use satellite imagery and geolocation to analyse your rooftop's
        rainwater
        <br /> harvesting potential.
      </p>
      {/* Location Card */}
      <div className="w-200 bg-blue-50 border border-gray-300 shadow-sm flex flex-col gap-10 items-center justify-center p-8 rounded-lg mb-20">
        <p className="text-[#003366] font-bold flex gap-2  self-start">
          <MdOutlineLocationOn className="size-6 text-[#003366]" />
          Your Location
        </p>

        <p className="text-gray-600 text-center text-md max-w-200">
          We need your location to analyze your rooftop using satellite imagery.
        </p>
        {/* Buttons section */}
        <div className="flex flex-row gap-5 justify-center">
          <Link
            to="/satellite"
            className="font-semibold text-xl text-white bg-[#003366] hover:bg-[#054687] px-6 py-1.5 rounded-md cursor-pointer"
          >
            Get My Location
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gis;

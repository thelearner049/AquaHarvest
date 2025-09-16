import { SlLocationPin } from "react-icons/sl";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 mx-auto max-w-360 pb-20">
      <h2 className="font-bold text-4xl mt-10">Welcome back, Random!</h2>
      <p className="text-gray-600 text-lg">
        Track and manage your rainwater harvesting estimates
      </p>
      <Link
        to="/estimation"
        className="font-semibold text-lg text-white bg-[#003366] hover:bg-[#054687] px-3 py-1.5 rounded-md cursor-pointer self-start"
      >
        + New Estimate
      </Link>
      <h3 className="text-2xl font-semibold mt-5">Your Rooftop Estimates</h3>
      {/* cards container */}
      <div className="">
        {/* card */}
        <div className="bg-blue-50 max-w-170 border border-blue-100 shadow-md rounded-md p-8 ">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-xl">Main Rooftop</h4>
              <p className="flex items-center gap-2 text-gray-600 text-sm">
                <span>
                  <SlLocationPin />
                </span>
                User Location
              </p>
            </div>
            <div className="px-3 py-0.75 bg-[#003366] text-white self-start rounded-md">
              Progress
            </div>
          </div>
          <div className="flex flex-row gap-70 mt-8">
            <div>
              <p className="text-gray-600">Rooftop Area</p>
              <p className="text-blue-900 font-bold">1200 sq ft</p>
            </div>
            <div>
              <p className="text-gray-600">Annual Rainfall</p>
              <p className="text-blue-900 font-bold">924mm</p>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <p className="text-gray-600">Harvest Potential</p>
          </div>
          <div className="flex flex-row mt-8 justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-gray-600">Potential Savings</p>
              <p className="text-blue-900 font-bold">₹12,480/year</p>
            </div>
            <div className="flex gap-3">
              <button className="font-semibold  p-1  rounded-md cursor-pointer bg-white border border-gray-400 flex items-center gap-1">
                <span>
                  <MdOutlineRemoveRedEye />
                </span>
                View
              </button>
              <button className="font-semibold  p-1  rounded-md cursor-pointer bg-white border border-gray-400 flex items-center gap-1">
                <span>
                  <FiEdit3 />
                </span>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

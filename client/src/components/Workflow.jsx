import { SlLocationPin } from "react-icons/sl";
import { RxMobile } from "react-icons/rx";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

const Workflow = () => {
  return (
    <div className="bg-gray-50">
      <div className=" mx-auto max-w-320 flex flex-col gap-15 pb-15 ">
        {/* Title Section */}
        <div className="flex flex-col gap-5 items-center pt-15">
          <h1 className="text-5xl font-bold ">
            Smart Water Harvesting Solution
          </h1>
          <p className="text-xl  text-gray-600 max-w-185 text-center">
            Our innovative web and mobile application combines GIS technology
            with user inputs to provide accurate rainwater harvesting estimates
            and actionable insights.
          </p>
        </div>
        <div className="flex flex-row">
          {/* Text Section */}
          <div className="flex-1 gap-8 flex flex-col justify-start mt-8">
            <h2 className="text-2xl font-bold">How It Works</h2>
            <div className="flex gap-4">
              <div className="bg-[#003366] rounded-full p-3 text-white inline-flex items-center justify-center">
                <SlLocationPin className="size-7 m-3" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">GIS Integration</h3>
                <p className="text-gray-600">
                  Advanced Geographic Information System technology analyzes
                  your location's rainfall patterns, topography, and
                  environmental factors.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#003366] rounded-full p-3 text-white inline-flex items-center justify-center">
                <RxMobile className="size-7 m-3" />
              </div>
              <div>
                <h3 className="font-semibold text-lg ">User Input Collection</h3>
                <p className="text-gray-600">
                  Simple interface for entering rooftop dimensions, material
                  types, and local conditions to personalize your harvesting
                  potential.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#003366] rounded-full p-3 text-white inline-flex items-center justify-center">
                <TbBrandGoogleAnalytics className="size-7 m-3" />
              </div>
              <div>
                <h3 className="font-semibold text-lg ">Intelligent Analysis</h3>
                <p className="text-gray-600">
                  AI-powered calculations provide precise estimates,
                  cost-benefit analysis, and customized recommendations for your
                  specific situation.
                </p>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center ml-10 ">
            <img
              className="max-w-140 rounded-md "
              src="./smart-harvesting.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;

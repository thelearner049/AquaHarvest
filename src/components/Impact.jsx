import { MdOutlinePeopleAlt } from "react-icons/md";
import { BiLeaf } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";

const Impact = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-320 flex flex-col gap-20 pb-15">
        {/* Title Section */}
        <div className="flex flex-col gap-5 items-center pt-15">
          <h1 className="text-5xl font-bold ">Creating Lasting Impact</h1>
          <p className="text-xl  text-gray-600 max-w-185 text-center">
            Our platform doesn't just estimate potential—it transforms
            communities and contributes to global water sustainability goals.
          </p>
        </div>
        {/* Cards Section */}
        <div className="flex flex-row gap-10 flex-wrap justify-center">
          <div className="max-w-150 h-45 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col  py-10 px-10 justify-between gap-4">
            <div className="flex items-center gap-4">
              <MdOutlinePeopleAlt className="size-12 p-3 bg-blue-100 rounded-lg text-blue-900" />
              <h2 className="text-xl font-semibold">Community Empowerment</h2>
            </div>
            <p className="text-gray-700 ">
              Enable communities to take control of their water security through
              accessible technology and education.
            </p>
          </div>
          <div className="max-w-150 h-45 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between gap-4">
            <div className="flex items-center gap-4">
              <BiLeaf className="size-12 p-3 bg-blue-100 rounded-lg text-blue-900" />
              <h2 className="text-xl font-semibold">
                Environmental Sustainability
              </h2>
            </div>
            <p className="text-gray-700">
              Reduce groundwater depletion and promote sustainable water
              management practices at scale.
            </p>
          </div>
          <div className="max-w-150 h-45 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between gap-4">
            <div className="flex items-center gap-4">
              <BsGlobe className="size-12 p-3 bg-blue-100 rounded-lg text-blue-900" />
              <h2 className="text-xl font-semibold">Global Water Security</h2>
            </div>
            <p className="text-gray-700 ">
              Contribute to UN Sustainable Development Goals by improving water
              access and conservation worldwide.
            </p>
          </div>
          <div className="max-w-150 h-45 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col py-10 px-10 justify-between gap-4">
            <div className="flex items-center gap-4">
              <IoLanguage className="size-12 p-3 bg-blue-100 rounded-lg text-blue-900" />
              <h2 className="text-xl font-semibold">
                Regional Language Support
              </h2>
            </div>
            <p className="text-gray-700 ">
              Break down language barriers with multi-language support for truly
              inclusive water solutions.
            </p>
          </div>
        </div>
        {/* Join Section */}
        <div className=" bg-gray-100 border border-gray-300 shadow-sm flex flex-col gap-10 items-center justify-center p-10 rounded-lg mb-20">
          <h3 className="text-4xl font-bold">Ready to Make a Difference?</h3>
          <p className="text-gray-600 text-center text-md max-w-200">
            Join thousands of communities already using our platform to build
            sustainable water solutions. Start your rainwater harvesting journey
            today.
          </p>
          {/* Buttons section */}
          <div className="flex flex-row gap-5 justify-center">
            <button className="font-semibold text-xl text-white bg-[#003366] hover:bg-[#054687] px-6 py-1.5 rounded-md cursor-pointer">
              Estimate Your Rooftop Potential
            </button>
            <button className="font-semibold text-xl px-6 py-1.5 rounded-md cursor-pointer border hover:bg-[#003366] hover:text-white duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;

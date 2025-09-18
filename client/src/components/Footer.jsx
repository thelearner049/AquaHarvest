import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { LuDroplets } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-[#003366]  ">
      <div className="py-20 mx-auto max-w-250 flex flex-row gap-20">
        <div className="flex flex-col text-gray-300 gap-4">
          <div className="text-blue-800 flex items-center gap-3">
            <LuDroplets className="size-11 p-3 font-bold bg-white rounded-lg text-blue-900" />
            <h3 className="font-bold text-2xl text-white ">AquaHarvest</h3>
          </div>

          <p className="">
            Empowering communities worldwide with intelligent rainwater
            harvesting solutions for a sustainable water future.
          </p>
          <p className="flex items-center gap-3">
            <span>
              <GoMail />
            </span>
            contact@aquaharvest.com
          </p>
          <p className="flex items-center gap-3">
            <span>
              <IoCallOutline />
            </span>
            +1 (555) 123-4567
          </p>
          <p className="flex items-center gap-3">
            <span>
              <SlLocationPin />
            </span>
            123 Water Street, Sustainability City, SC 12345
          </p>
        </div>
        <div className="flex flex-col text-gray-300 gap-4">
          <h4 className="font-bold text-xl text-white">Quick Links</h4>
          <p className="cursor-pointer hover:text-white duration-300">Home</p>
          <p className="cursor-pointer hover:text-white duration-300">Solutions</p>
          <p className="cursor-pointer hover:text-white duration-300">Features</p>
          <p className="cursor-pointer hover:text-white duration-300">Impact</p>
          <p className="cursor-pointer hover:text-white duration-300">Documentation</p>
        </div>
        <div className="flex flex-col text-gray-300 gap-4">
          <h4 className="font-bold text-xl text-white">Quick Links</h4>
          <p className="cursor-pointer hover:text-white duration-300">Getting Started</p>
          <p className="cursor-pointer hover:text-white duration-300">Best Practices</p>
          <p className="cursor-pointer hover:text-white duration-300">Case Studies</p>
          <p className="whitespace-nowrap cursor-pointer hover:text-white duration-300 ">API Documentation</p>
          <p className="cursor-pointer hover:text-white duration-300">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

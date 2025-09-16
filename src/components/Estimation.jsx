import { useForm } from "react-hook-form";
import { AiOutlineHome } from "react-icons/ai";
import { RiGolfBallLine } from "react-icons/ri";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiSolarRoofDuotone } from "react-icons/pi";
import { FaBoreHole } from "react-icons/fa6";
import { GiCoalPile } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaHandHoldingDroplet } from "react-icons/fa6";

const Estimation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
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
                  <option value="tin">Tin</option>
                  <option value="concrete">Concrete</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="flex gap-2 items-center font-semibold mb-1">
                  <GiCoalPile className="text-[#003366]" />
                  Soil Type
                </label>
                <select
                  className="border bg-white border-gray-300 rounded-lg w-full px-4 py-2"
                  {...register("gender")}
                >
                  <option value="aluvial">aluvial</option>
                  <option value="sandy">sandy</option>
                  <option value="clayey">clayey</option>
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
        <div className="max-w-120 border border-blue-100 shadow-md rounded-md bg-blue-50 flex flex-col  py-10 px-10 justify-between transition-shadow duration-300 hover:shadow-lg hover:z-10 flex-1 mb-20">
          <h4 className="flex items-center font-bold mb-4 gap-2 justify-center">
            <FaHandHoldingDroplet />
            Estimation Results
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Estimation;

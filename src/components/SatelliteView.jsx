import { LuSatellite } from "react-icons/lu";

const SatelliteView = () => {
  return (
    <div className="flex mx-auto max-w-320 flex-col gap-8 items-center pt-15">
      {/* Title Section */}
      <h1 className="text-5xl font-bold ">GIS-Based Rooftop Analysis</h1>
      {/* cards container */}
      <div className="bg-blue-50 w-200 border border-blue-100 shadow-md rounded-md flex flex-col gap-5 p-8">
        <h4 className="font-semibold text-xl">Delhi</h4>
        <div className="flex flex-row gap-70">
          <div>
            <p className="text-gray-600">Latitude</p>
            <p className="text-blue-900 font-bold">28.7041° N</p>
          </div>
          <div>
            <p className="text-gray-600">Longitude</p>
            <p className="text-blue-900 font-bold">77.1025° E</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-gray-600">Accuracy</p>
          <p className="text-blue-900 font-bold">3591 meters</p>
        </div>
        <button className="font-semibold text-xl text-white bg-[#003366] hover:bg-[#054687] px-4 py-1 rounded-md cursor-pointer self-start">
          Get Analysis
        </button>
      </div>
      <div className="bg-blue-50 w-200 border border-blue-100 shadow-md rounded-md flex flex-col gap-5 p-8">
        <h4 className="flex gap-2 items-center font-semibold text-xl">
          <LuSatellite />
          Satellite View
        </h4>
        <div className="bg-white w-184 h-80 border border-blue-100 rounded-md"></div>
      </div>
      <div className="w-200 bg-blue-50 border border-gray-300 shadow-sm flex flex-col gap-5 items-center justify-center p-8 rounded-lg mb-20">
        <p className="text-[#003366] text-xl font-bold flex gap-2  self-start">
          Analysis Result
        </p>
        <div className="bg-blue-100 rounded-full p-3 text-[#003366] inline-flex items-center justify-center">
          <LuSatellite className="size-8 m-3" />
        </div>
        <h3 className="text-2xl font-bold">
          GIS-Based Rooftop Analysis Coming Soon..
        </h3>
        <p className="text-gray-600 text-center text-md max-w-200">
          We need your location to analyze your rooftop using satellite imagery.
        </p>
      </div>
    </div>
  );
};

export default SatelliteView;

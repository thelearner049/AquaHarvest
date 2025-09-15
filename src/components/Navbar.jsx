const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-7 py-3 mx-auto sticky top-0 bg-white shadow z-50">
      <div className="flex flex-row h-12 gap-2 items-center">
        <img className="rounded-md h-12 w-13" src="./logo.png" alt="logo" />
        <h2 className="text-2xl font-bold cursor-pointer">AquaHarvest</h2>
      </div>
      <div className="flex gap-10 items-center">
        <ul className="flex gap-10">
          <li className="font-semibold text-l cursor-pointer">Home</li>
          <li className="font-semibold text-l cursor-pointer">Solution</li>
          <li className="font-semibold text-l cursor-pointer">Features</li>
          <li className="font-semibold text-l cursor-pointer">Impact</li>
          <li className="font-semibold text-l cursor-pointer">Sign In</li>
        </ul>
        <button className="font-semibold text-l text-white bg-[#003366] hover:bg-[#054687] px-3 py-1.5 rounded-md cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;

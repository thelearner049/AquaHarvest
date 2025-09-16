import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-7 py-3 mx-auto sticky top-0 bg-white shadow z-50">
      <div className="flex flex-row h-12 gap-2 items-center">
        <img className="rounded-md h-12 w-13" src="./logo.png" alt="logo" />
        <NavLink to="/" className="text-2xl font-bold cursor-pointer">
          AquaHarvest
        </NavLink>
      </div>
      <div className="flex gap-10 items-center">
        <ul className="flex gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-400" : "text-black"
                }font-semibold text-l cursor-pointer`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-400" : "text-black"
                }font-semibold text-l cursor-pointer`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/impact"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-400" : "text-black"
                }font-semibold text-l cursor-pointer`
              }
            >
              Impact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-400" : "text-black"
                }font-semibold text-l cursor-pointer`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
        <Link to="#" className="font-semibold text-l cursor-pointer">
          Sign In
        </Link>
        <Link
          to="#"
          className="font-semibold text-l text-white bg-[#003366] hover:bg-[#054687] px-3 py-1.5 rounded-md cursor-pointer"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

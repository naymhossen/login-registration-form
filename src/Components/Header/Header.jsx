import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-end gap-4 shadow-md shadow-red-500 py-8 mb-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-500 font-bold animate-pulse" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-500 font-bold animate-pulse" : ""
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/registration"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-500 font-bold animate-pulse" : ""
              }
            >
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

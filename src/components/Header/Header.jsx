import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  const navStyle = ({ isActive }) =>
    ` ${
      isActive ? "text-blue-600 underline font-bold" : " hover:text-blue-400"
    }`;
  return (
    <div>
      <h3>This is Header</h3>
      <nav className="flex gap-4">
        <NavLink to="/" className={navStyle}>
          Home
        </NavLink>
        <NavLink className={navStyle} to="/mobiles">
          Mobiles
        </NavLink>
        <NavLink className={navStyle} to="/laptops">
          Laptops
        </NavLink>
        <NavLink className={navStyle} to="/users">
          Users
        </NavLink>
        <NavLink className={navStyle} to="/users2">
          Users2
        </NavLink>
        <NavLink className={navStyle} to="/posts">
          Posts
        </NavLink>
      </nav>
      {/* navlink dile extra ekta class dynamically add kore dey */}
    </div>
  );
};

export default Header;

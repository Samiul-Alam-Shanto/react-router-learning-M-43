import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h3>This is Header</h3>
      <nav className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users2</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
      {/* navlink dile extra ekta class dynamically add kore dey */}
    </div>
  );
};

export default Header;

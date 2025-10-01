import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h3>This is Header</h3>
      <nav className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        {/* navlink dile extra ekta class dynamically add kore dey */}
      </nav>
    </div>
  );
};

export default Header;

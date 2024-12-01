import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex bg-red-300 p-6">
        <ul className="flex gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

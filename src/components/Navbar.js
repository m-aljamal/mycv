import React from "react";
import { links } from "../utils/links";
const Navbar = ({ setSelectLink }) => {
  const linksToArray = Object.keys(links).map((key) => links[key]);
  return (
    <nav className="bg-white  ">
      {linksToArray.map(({ label, icon, link }) => (
        <div
          key={link}
          className="border p-2 cursor-pointer"
          onClick={() => setSelectLink(link)}
        >
          <p>{label}</p>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;

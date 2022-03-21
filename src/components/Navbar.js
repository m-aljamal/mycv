import React from "react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { links } from "../utils/links";
const Navbar = () => {
  return (
    <nav className="bg-third-color sticky top-10 rounded-md divide-y divide-gray-100  divide-opacity-10">
      {links.map(({ label, icon, link }) => (
        <Link
          to={link}
          smooth
          activeClass="active"
          spy
          key={link}
          className="block   cursor-pointer text-lightWhite hover:text-secondary-color"
        >
          <div className="flex flex-col justify-center items-center gap-1 px-2 py-3     ">
            <span className="text-xl">{icon}</span>
            <span className="text-sm">{label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

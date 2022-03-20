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
    <nav className="bg-white   h-[fit-content]  ">
      <div>
        {links.map(({ label, icon, link }) => (
          <Link
            to={link}
            smooth
            activeClass="text-green-500"
            spy
            key={link}
            className="block px-4 py-2  hover:bg-gray-200"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

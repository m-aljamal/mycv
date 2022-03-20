import Navbar from "../src/components/Navbar";
import { useState } from "react";
import { links } from "../src/utils/links";
import About from "../src/components/About";
import CV from "../src/components/CV";
import Projects from "../src/components/Projects";
export default function Home() {
   return (
    // <div className="bg-gray-600 h-screen flex justify-center items-center ">
    //   <div className="flex  justify-center gap-5  ">
    //     <Navbar setSelectLink={setSelectLink} />
    //     <div>
    //       <p>My image</p>
    //     </div>
    //     {links[selectLink].componet}
    //   </div>
    // </div>
    <div className="bg-gray-600   flex   items-center relative  w-full  justify-around ">
      <div className="flex gap-4 mt-8 relative     justify-center w-full">
        <div className="       ">
          <Navbar />
        </div>
        <div className="   w-1/2  ">
          <About />
          <CV />
          <Projects />
        </div>
      </div>
    </div>
  );
}

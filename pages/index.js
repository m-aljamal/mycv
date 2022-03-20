import Navbar from "../src/components/Navbar";
import { useState } from "react";
import { links } from "../src/utils/links";
export default function Home() {
  const [selectLink, setSelectLink] = useState("about");
  return (
    <div className="bg-gray-600 h-screen flex justify-center items-center ">
      <div className="flex  justify-center gap-5  ">
        <Navbar setSelectLink={setSelectLink} />
        <div>
          <p>My image</p>
        </div>
        {links[selectLink].componet}
      </div>
    </div>
  );
}

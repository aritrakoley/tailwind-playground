import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, Bars3Icon } from "../_common/Icons";

const InverseBorder = () => {
  const [sidePaneIsOpen, setSidePaneIsOpen] = useState(false);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      setSidePaneIsOpen(true);
    }
  }, []);

  return (
    <article id="container" className="flex w-full h-screen bg-gray-100">
      <section
        id="sidebar"
        className={
          "bg-gray-900 flex flex-col transition-all ease-in-out duration-500 max-w-[25%] min-w-[20rem] z-20 relative group" +
          `${sidePaneIsOpen ? " translate-x-0" : " -translate-x-full"}`
        }
      >
       {sidePaneIsOpen ?<button
          className={
            "w-10 h-10 p-2 mx-1 bg-gray-900 -translate-x-[2rem] rounded-full text-gray-100 transition-all ease-in-out duration-500 absolute top-[50%] right-[-2.2rem] inverse-border group-hover:translate-x-0" +
            `${sidePaneIsOpen ? "" : " before:hidden after:hidden"}`
          }
          onClick={() => setSidePaneIsOpen(!sidePaneIsOpen)}
        >
          {ArrowLeftIcon}
        </button> : null } 
      </section>
      <section id="content">
        <button
          className={
            "absolute top-0 left-0 w-10 h-10 p-2 mx-1 text-gray-900 transition-all ease-in-out duration-500 z-10"
          }
          onClick={() => setSidePaneIsOpen(!sidePaneIsOpen)}
        >
          {Bars3Icon}
        </button>
      </section>
    </article>
  );
};

export default InverseBorder;

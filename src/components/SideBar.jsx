import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, Bars3Icon } from "../_common/Icons";

const SideBar = () => {
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
          "bg-gray-900 flex flex-col md:bg-sky-900  transition-all ease-in-out duration-500 max-w-[25%] min-w-[20rem] z-20" +
          `${sidePaneIsOpen ? " translate-x-0" : " -translate-x-full"}`
        }
      >
        <div className=" flex justify-end w-full">
          <button
            className={
              "w-10 h-10 p-2 mx-1 text-gray-100 transition-all ease-in-out duration-500" +
              `${sidePaneIsOpen ? " rotate-180" : ""}`
            }
            onClick={() => setSidePaneIsOpen(!sidePaneIsOpen)}
          >
            {ArrowLeftIcon}
          </button>
        </div>
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

export default SideBar;

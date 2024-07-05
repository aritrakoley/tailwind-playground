import React, { useState } from "react";
import { ArrowLeftIcon } from "../_common/Icons";

const SideBar = () => {
  const [sidePaneIsOpen, setSidePaneIsOpen] = useState(true);
  return (
    <article id="container" className="flex w-full h-screen bg-gray-100">
      <section
        id="sidebar"
        className={
          "bg-gray-900 flex flex-col transition-all ease-in-out duration-500" 
          + `${sidePaneIsOpen ? " w-[20rem]" : " w-[3rem]"}`
        }
      >
        <div className="flex justify-end w-full">
          <button
            className={
              "w-10 h-10 p-2 mx-1 text-gray-100 transition-all ease-in-out duration-500" +
              `${sidePaneIsOpen ? "" : " rotate-180"}`
            }
            onClick={() => setSidePaneIsOpen(!sidePaneIsOpen)}
          >
            {ArrowLeftIcon}
          </button>
        </div>
      </section>
      <section id="content"></section>
    </article>
  );
};

export default SideBar;

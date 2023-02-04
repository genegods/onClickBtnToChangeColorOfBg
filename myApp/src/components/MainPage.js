import React, { useState, useEffect } from "react";

import { BtnData } from "../data/BtnData";
const MainPage = () => {
  const [bgColor, setBgColor] = useState("bg-white");
  

  return (
    <React.Fragment>
      <section>
        <div className="centered flex-col h-screen bg-white md:w-2/3 md:mx-auto ">
        
            {/* header section */}
          <div className={`w-auto h-96 px-10 rounded-2xl shadow-lg centered md:w-2/3 ${bgColor}`}>
            <p className="text-3xl capitalize text-center font-bold text-white md:text-5xl">
              click buttons to change color
            </p>
          </div>

          <div className=" grid grid-cols-3 pt-5">
            {BtnData.map((item, index) => {
              return (
                <div key={index}>
                  <div className="">
                    <button
                      type="button"
                      className={`px-8 py-3.5 text-white font-bold shadow-lg rounded-lg md:text-3xl ${item.btnColor}`}
                      onClick={() =>setBgColor(item.btnColor)}
                    >
                      {item.title}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;

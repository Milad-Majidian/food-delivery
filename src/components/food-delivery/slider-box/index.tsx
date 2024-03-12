import React from "react";
import Slider from "./slider";

export default function SliderBox() {
  return (
    <>
      <div className="slider-bg-shape absolute top-0 right-0 z-[99]"></div>
      <div className="absolute bottom-10 right-0 z-[99]">
        <Slider />
      </div>
      <div className="absolute bottom-[95px] right-[100px] z-[99]">
        <ul className="flex flex-wrap justify-end gap-8">
          <li>
            <a href="#"> Application</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
        </ul>
      </div>
    </>
  );
}

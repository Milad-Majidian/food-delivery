import React from "react";

export default function Location() {
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="flex justify-start items-center gap-[6px]">
        <img src="/images/location.svg" alt="location" />
        <span className="">My Location</span>
      </div>
      <div className="border-l border-solid border-secondary-secondary-one h-[20px]"></div>
      <div>
        <p className="flex justify-start items-center">
          <span className="">New York</span>
          <span>,</span>
          <span className="text-accent-secondaryOne pl-[2px]">
            Lift Side Blue Door
          </span>
        </p>
      </div>
    </div>
  );
}

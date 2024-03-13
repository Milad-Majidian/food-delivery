import React from "react";

export default function Search() {
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="relative w-[540px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-[510px] h-[70px] border border-solid border-secondary-secondaryOne input-radius pl-12"
        />
        <div className="absolute right-0 top-0">
          <button className="bg-primary-primaryOne text-white w-[171px] h-[70px] rounded-xl buttom-radius">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

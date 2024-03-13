import React from "react";
import "./App.css";
import FoodCategories from "./components/food-delivery/popular-categories";
import Header from "./components/food-delivery/header";
import Location from "./components/food-delivery/loaction";
import Search from "./components/food-delivery/search";
import SliderBox from "./components/food-delivery/static-page";
import RecentlyPreOrders from "./components/food-delivery/recently-preOrder";

function Page() {
  return (
    <div className="relative">
      <div className="container-base">
        <div className="bg-[#FFFFFF] w-full rounded-[30px] px-[60px] py-[40px] food-delivery food-delivery-two">
          <Header />
          <div className="flex flex-col gap-3 mt-[70px]">
            <Location />
            <Search />
          </div>
          <FoodCategories />
          <RecentlyPreOrders />
        </div>
        <SliderBox />
      </div>
    </div>
  );
}

export default Page;

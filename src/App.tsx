import React from "react";
import "./App.css";
import FoodCategories from "./components/food-delivery/popular-categories";
import Header from "./components/food-delivery/header";
import Location from "./components/food-delivery/loaction";
import Search from "./components/food-delivery/search";
import RecentlyPreOrders from "./components/food-delivery/recently-preOrder";
import Slider from "./components/food-delivery/slider";
import StaticPage from "./components/food-delivery/static-page";

function App() {
  return (
    <div className="box relative my-8">
      <div className="box--shape__top absolute w-[300px] h-[300px] -z-20 -mt-8 -ml-8"></div>
      <div className="overflow-hidden relative">
        <div className="container-base bg-white rounded-3xl">
          <div className="bg-[#FFFFFF] w-full rounded-[30px] px-[60px] py-[40px] food-delivery food-delivery-two">
            <Header />
            <div className="grid grid-cols-12">
              <div className="flex flex-col gap-3 mt-[70px] col-span-7">
                <Location />
                <Search />
                <FoodCategories />
                <RecentlyPreOrders />
              </div>
              <div className="col-span-5 shape flex justify-end">
                {/* <img src="/images/slider/slider.svg" alt="" className="w-full h-full z-10 burger" /> */}
                <Slider />
                {/* <ul className="flex flex-wrap justify-end gap-8 mt-auto pb-8 z-10 mr-8">
                  <li>
                    <a href="#"> Application</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                </ul> */}
                <StaticPage />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box--shape__bottom absolute w-[300px] h-[300px] -z-20 -mt-8 -ml-8 bottom-0 right-0"></div>
    </div>
  );
}

export default App;

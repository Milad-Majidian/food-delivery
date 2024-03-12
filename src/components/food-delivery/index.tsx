import FoodCategories from "./popular-categories";
import Header from "./header";
import Location from "./loaction";
import Search from "./search";
import SliderBox from "./slider-box";
import RecentlyPreOrders from "./recently-preOrder";

export default function FoodDelivery() {
  return (
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
  );
}

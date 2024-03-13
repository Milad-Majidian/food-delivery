import React from "react";

const popularCategories = [
  {
    id: 1,
    name: "Pizza",
    img: "/images/notSelectedCategory/pizza.svg",
  },
  {
    id: 2,
    name: "Burger",
    img: "/images/selectedCategory/burger.svg",
  },
  {
    id: 3,
    name: "Sandwich",
    img: "/images/notSelectedCategory/sandwich.svg",
  },
  {
    id: 4,
    name: "Chicken",
    img: "/images/notSelectedCategory/chicken.svg",
  },
  {
    id: 5,
    name: "Pasta",
    img: "/images/notSelectedCategory/pasta.svg",
  },
  {
    id: 6,
    name: "Desert",
    img: "/images/notSelectedCategory/desert.svg",
  },
];

export default function PopularCategories() {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 mt-[30px]">
      <h3 className="text-[14px] font-bold text-secondary-secondaryTwo">
        Popular Categories
      </h3>
      <div className="flex justify-center items-center gap-3">
        {popularCategories.map((category, index) => (
          <div
            key={index}
            className="bg-secondary-secondaryOne w-[100px] h-[150px] flex flex-col justify-center 
            items-center gap-3 rounded-full py-6 px-5"
          >
            <img src={category.img} alt={category.name} />
            <span className="font-bold">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

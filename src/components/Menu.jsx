import { useState } from "react";
import Food1 from "../assets/food1.jpeg"
import Food2 from "../assets/food2.jpeg"
import Food3 from "../assets/food3.jpeg"
import Food4 from "../assets/food4.jpeg"
import Food5 from "../assets/food5.jpeg"
import Food6 from "../assets/food6.jpeg"
import FoodCard from "./FoodCard";

const Menu = () => {
    const [currentTab, setCurrentTab] = useState(Tabs.all);

    return (
        <div className="w-full rounded-lg shadow-lg shadow-[#8F95B226] bg-[#FFFFFF]">
            <div className="p-4 pb-0 font-inter font-[700] text-[18px] leading-[24px] text-[#081735]">
                Menu
            </div>
            <div className=" flex justify-end gap-4 *:py-4 px-4 font-inter font-[500] text-[10px] sm:text-[15px] leading-[22px] text-[#5F6D7E] tracking-[-0.1px]">
                {
                    Object.entries(Tabs).map(([key, value], index) => (
                        <div key={index} onClick={() => setCurrentTab(value)} className={`cursor-pointer ${currentTab === value ? " font-[600] text-[#6C5DD3] border-b-2 border-[#6C5DD3]" : ""}`} >
                            {value}
                        </div>
                    ))
                }
            </div>
            <div className=" w-full h-[1px] bg-[#E6E8F0]"></div>
            <div className=" p-4">
                {
                    currentTab === Tabs.all &&
                    <div className="">
                        <div className=" flex flex-col lg:flex-row gap-4 *:h-[234px]">
                            <div className=" flex-1">
                                <FoodCard item={Foods[0]} />
                            </div>
                            <div className=" w-full lg:w-[379px]">
                                <FoodCard item={Foods[1]} />
                            </div>
                        </div>
                        <div className=" mt-4 w-full overflow-x-auto scrollbar-hide">
                            <div className=" flex flex-row flex-nowrap *:flex-none gap-4">
                                {
                                    Foods.slice(2).map((item, index) => (
                                        <div key={index} className=" w-[258px] h-[234px]">
                                            <FoodCard item={item} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Menu;

const Tabs = {
    all: "All Category",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
};

const Foods = [
    { img: Food1, title: "Surf & Turf Gift Basket", served: 456, price: 89.24 },
    { img: Food2, title: "Shaking Beef Tri-Tip", served: 456, price: 96.46 },
    { img: Food3, title: "BBQ Rib Dinner", served: 456, price: 69.21 },
    { img: Food4, title: "Chicken & Ribs Combo", served: 456, price: 98.49 },
    { img: Food5, title: "Fried Chicken Dinne", served: 456, price: 83.56 },
    { img: Food6, title: "Dark & Stormy", served: 456, price: 90.58 },
]

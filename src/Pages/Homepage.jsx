import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { dressPage1 } from "../Data/dress/page1";
import { menshirt } from "../Data/shoes";
import { men_jeans } from "../Data/Men/men_jeans";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
      <HomeProductSection data={men_jeans} section={"Men's Jeans"} />
        <HomeProductSection data={menshirt} section={"Men's Shirts"} />
        <HomeProductSection data={dressPage1} section={"Dress"} />
      </div>

      
    </div>
  );
};

export default Homepage;

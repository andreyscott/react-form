import React from "react";
import DoorToDoo from "../assests/DoorTodoo.png";
import days from "../assests/days.png";
import affordable
  // friendly
  // live
from "../assests/affordable.png";

import friendly from "../assests/friendly.png";
import live from "../assests/live.png";
import Slider from "react-slick";
const data = [
  {
    type: "Door to door Delivery",
    icon: DoorToDoo,
  },
  {
    type: "3-5 days express delivery",
    icon: days,
  },
  {
    type: "Affordable rates",
    icon: affordable,
  },
  {
    type: "Friendly customer service and merchant support reps",
    icon: friendly,
  },
  {
    type: "Live tracking and notifications on all shipments",
    icon: live,
  },
];

const Carousel = () => {
  const  settings = {
    infinite: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  //   centerMode: true,
  //   centerPadding: "60px",
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2500,
  //   responsive: [
  //     {
  //       breakpoint: 1350,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         centerMode: true,
  //         centerPadding: "30px",
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         centerMode: true,
  //         centerPadding: "15px",
  //       },
  //     },
  //     {
  //       breakpoint: 320,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerMode: true,
  //         centerPadding: "7.5px",
  //       },
  //     },
  //   ],
  // };
  return (
    <div className="flex p-5 w-full bg-black">
      <Slider {...settings}>
        {data.map((service, index) => {
          return (
            <div key={index} className="bg-white border-2 rounded-lg flex flex-col  mr-4 items-start  justify-evenly py-5 px-3 min-w-40 h-52 shadow-lg">
              <img className="w-11 h-11" src={service.icon} alt="imports" />
              <p className="bold-text">{service.type}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;

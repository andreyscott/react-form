import React, { Component } from 'react'

import Slider from 'react-slick/dist/react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


import DoorToDoo from "../assests/DoorTodoo.png";
import days from "../assests/days.png";
import affordable from "../assests/affordable.png";

import friendly from "../assests/friendly.png";
import live from "../assests/live.png";

//import './Testimonials.css'

export default class Testimonials extends Component {


  render() {
    const items  =  [ 
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

    const settings = {
   
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,

    
    responsive: [

      {
        breakpoint: 1350,
        settings: {

          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,          
          centerPadding: "30px",

        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "7.5px",
        },
      },
    ],
  };

    return (
      <section className="flex p-5 w-full overflow-hidden bg-slate-400">
     
        <div className="container skinny taCenter">
          <div className="Testimonials--Slider">
            <div
              className="Testimonials--Slider--Quote"
            />
            <Slider {...settings}>
              {items.map((item = {}, index) => {
                return (
                  <div
          className=" mr-5  h-60 w-fit border-2 rounded-lg flex flex-col items-start  justify-evenly py-5 px-3  shadow-lg"
                    key={item.type}
                  >
                    <img className='w-11 mt-4 h-11' src={item.icon} alt={item.type} />

                    <p className='text-left font-semibold text-2xl mt-2  pt-3 pb-10  '>{item.type}</p>
                   
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
    )
  }
}
import { Carousel } from "antd";
import "antd/dist/antd.css";
import { Carousal } from "../MAIN/Alldata";

import React, { useState } from "react";

const Maincarousal = () => {

  const[carousaldata,setcarousaldata]=useState(Carousal)
  console.log(carousaldata,"carousaldata");
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
       <Carousel className="carousal" afterChange={onChange}>
      {
        carousaldata.map((item)=>{
    return   <div className="carousal_container">
          <div className="left_container">
            <h2>{item.heading}</h2>
            <p>
              {item.para}
            </p>
            <button>{item.button}</button>
          </div>
          <div className="right_container">
            <img
              className="carausal_img"
              src={item.image}
              alt="carousalimg"
            />
          </div>
        </div>;
        })
      }
      </Carousel>
      </>
        );
};

export default Maincarousal;

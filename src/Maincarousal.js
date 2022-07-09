import { Carousel } from "antd";
import "antd/dist/antd.css";
import { Carousal } from "./Alldata";

import React, { useState } from "react";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Maincarousal = () => {

  const[carousaldata,setcarousaldata]=useState([Carousal])
  console.log(carousaldata,"carousaldata");
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
       <Carousel className="carousal" afterChange={onChange}>
      {
        carousaldata.map((item)=>{
          console.log(item,"item");    
        <div className="carousal_container">
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
              alt="carousal image"
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

import React from "react";
import Button from "./Button";

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../utils/productSlice";

const Hero = ({ content }) => {
  return (
    <div className="h-fit  mt-5 w-screen flex flex-wrap ">
      <div className=" w-full h-full p-10  shadow-lg shadow-orange-700 text-center flex flex-col justify-center items-center">
        <p className=" text-slate-800 font-semibold text-3xl ">
          {content.title}
        </p>
        <p className=" text-slate-800 font-semibold text-md ">
          {content.description}
        </p>
        <img src={content.image} alt="bag_hero" className=" h-40 " />
        <Button content="Know More" />
      </div>
    </div>
  );
};

export default Hero;

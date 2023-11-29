import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Banner from "./Banner";
import Footer from "./Footer";
import {  useSelector } from "react-redux";
const Publicpage = () => {
  const products = useSelector((store) => store.products);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero content={products.products[10]}/>
      <Banner />
      <Hero content={products.products[13]}/>
      <Footer />
    </div>
  );
};

export default Publicpage;

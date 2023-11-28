import React from "react";

const Header = () => {
  return (
    <div className="text-white flex justify-between bg-slate-900 h-20 shadow-2xl shadow-orange-400 w-screen rounded-b-3xl">
      <div className="hidden md:flex md:w-1/3 justify-evenly items-center">
        <h3>Home</h3>
        <h3>Contact</h3>
      </div>
      <div className=" w-screen  md:w-1/3 text-center flex justify-center items-center font-bold text-4xl">
        <span>Delta</span>
      </div>
      <div className="hidden  md:flex md:w-1/3 justify-evenly items-center">
        <h3>Login</h3>
        <h3>Sign up</h3>
      </div>
    </div>
  );
};

export default Header;

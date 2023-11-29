import React from "react";

const Button = ({content}) => {
  return (
    <button className=" text-xl bg-orange-500 mt-6 p-2 rounded-lg hover:bg-orange-300 hover:cursor-pointer">
      {content}
    </button>
  );
};

export default Button;

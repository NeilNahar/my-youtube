import React from "react";

const Button = (props) => {
  return (
    <button className="min-w-max px-4 py-1 text-sm rounded-lg bg-gray-200">{props.label}</button>
  );
};

export default Button;

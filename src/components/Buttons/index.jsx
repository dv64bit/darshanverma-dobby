import React from "react";

const Button = ({ butLable = "" }) => {
  return (
    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
      {butLable}
    </button>
  );
};

export default Button;

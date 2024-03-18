import React from "react";

const Input = ({ name = "", label = "", type = "", placeholder = "" }) => {
  return (
    <div>
      <div className="mt-4">
        {label && (
          <label
            htmlFor={name}
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </div>
  );
};

export default Input;

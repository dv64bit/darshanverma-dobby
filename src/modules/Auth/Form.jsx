import React, { useState } from "react";
import Input from "../../components/Inputs";
import Button from "../../components/Buttons";

const Form = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);
  return (
    <div className="w-full max-w-sm  p-6 mt-20 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <form className="mt-6">
        {isSignInPage ? (
          <h1 className="text-white">Log In</h1>
        ) : (
          <h1 className="text-white">Sign Up</h1>
        )}
        {!isSignInPage && (
          <Input
            name="fname"
            label="Full Name"
            type="text"
            placeholder="Enter Your Ful Name"
          />
        )}
        <Input
          name="email"
          label="Email"
          type="text"
          placeholder="Enter Your Email"
        />
        <Input
          name="password"
          label="Password"
          type="text"
          placeholder="Enter Your Password"
        />
      </form>
      <div className="mt-6">
        {isSignInPage ? (
          <Button butLable="Sign In" />
        ) : (
          <Button butLable="Sign Up" />
        )}
      </div>
      {isSignInPage ? (
        <p className="mt-8 text-xs font-light text-center text-gray-400">
          Don`&apos;`t have an account?
          <a
            onClick={() => setIsSignInPage(!isSignInPage)}
            href="#"
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Create One
          </a>
        </p>
      ) : (
        <p className="mt-8 text-xs font-light text-center text-gray-400">
          Do you have an account?
          <a
            onClick={() => setIsSignInPage(!isSignInPage)}
            href="#"
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Login
          </a>
        </p>
      )}
    </div>
  );
};

export default Form;

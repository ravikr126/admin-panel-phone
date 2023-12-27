import React from "react";
import Sidebar from "./Sidebar";

const Signup = () => {
  return (
    <>
      <div className=" relative flex ">
        <Sidebar />
        <div className="w-full items-start h-screen flex">
          {/* left side containt */}
          <div className="w-1/2 h-full flex flex-col p-20 text-center">
            <h1 className="text-blue-950 font-bold text-3xl p-5">
              {" "}
              Create an Account
            </h1>
            <h2 className="text-green-950 text-3xl p-5">
              Create a new Account Login
            </h2>
            <div className="flex flex-col text-center justify-center">
              <input
                type="text text-xl"
                placeholder="Name"
                className="border p-3 m-3 rounded-lg border-black"
              />
              <input
                type="email"
                placeholder="Email id"
                className="border p-3 m-3 rounded-lg border-black"
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-3 m-3 rounded-lg border-black"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="border p-3 m-3 rounded-lg border-black"
              />
            </div>
            <p>
              Already have an account?{" "}
              <span className="text-red-500"> Sign in </span>
            </p>
            <button className="bg-blue-500 rounded-lg m-5 text-3xl ">
              {" "}
              Sign Up
            </button>
          </div>
          {/* right side content */}
          <div className="relative w-1/2 h-full flex flex-col">
            <img
              src="https://images.unsplash.com/photo-1703362557243-76ce344f5527?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

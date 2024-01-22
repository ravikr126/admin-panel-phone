import React from "react";
import Home_Table from "./Home_Table";
import { MdArrowOutward } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
      <div className="m-10 ">
        <div class="max-w-7xl mt-10 p-8 mx-auto bg-white rounded-md  border flex flex-row justify-between">
          <h1 className="font-serif	text-3xl font-bold	">Dashboard</h1>
        </div>
        <br />
        <br />
        <div class="grid grid-cols-2 md:grid-cols-3 gap-10 pt-2 justify-between">
          {/* 1st box */}
          <div class="py-2 bg-white drop-shadow-xl p-4 border  rounded">
            <h2 class="font-semibold text-xl pt-4 text-gray-300  ">
              Total sells
            </h2>
            <div className="flex flex-row ">
              <p class="text-black-500 text-3xl mr-20 ">$500</p>

              <div className="flex flex-col text-right ">
                <p className="text-xl text-green-500 ml-5">
                  {" "}
                  <MdArrowOutward className="ml-36" />
                  34.7%
                </p>
                <p className="text-gray-300">Compared to April 2021</p>
              </div>
            </div>
          </div>
          {/* 1st box end */}

          {/* 2nd box start */}

          <div class="py-2 bg-white drop-shadow-xl  p-4 border  rounded">
            <h2 class="font-semibold text-xl pt-4 text-gray-300  ">
              Total sells
            </h2>
            <div className="flex flex-row ">
              <p class="text-black-500 text-3xl mr-20 ">$500</p>

              <div className="flex flex-col text-right ">
                <p className="text-xl text-green-500 ml-5">
                  {" "}
                  <MdArrowOutward className="ml-36" />
                  34.7%
                </p>
                <p className="text-gray-300">Compared to April 2021</p>
              </div>
            </div>
          </div>
          {/* 2nd box end */}

          {/* 3rd box start */}
          <div class="py-2 bg-white drop-shadow-xl p-4 border  rounded">
            <h2 class="font-semibold text-xl pt-4 text-gray-300  ">
              Total sells
            </h2>
            <div className="flex flex-row ">
              <p class="text-black-500 text-3xl mr-20 ">$500</p>

              <div className="flex flex-col text-right ">
                <p className="text-xl text-green-500 ml-5">
                  {" "}
                  <MdArrowOutward className="ml-36" />
                  34.7%
                </p>
                <p className="text-gray-300">Compared to April 2021</p>
              </div>
            </div>
          </div>

          {/* 3rd box end */}
        </div>

        {/* upper box ends */}

        <div className="border  my-5 rounded bg-white">
          <h1 className="m-4 text-3xl font-bold ">Recent Orders</h1>

          {/* table start */}
          {/* <Table /> */}
          <Home_Table />
          {/* table end */}
        </div>

        {/* upper boxex ends */}
      </div>
      {/* 2nd div row wali */}

      {/* home section end */}
    </>
  );
};

export default Dashboard;

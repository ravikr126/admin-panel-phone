import React from "react";
import { useState } from "react";

const Categories = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="m-10">
        <div className="rounded block border border-separate ">
          <h1 className="text-left font-bold text-3xl p-5 ">
            Product Category
          </h1>
          <h3 className="text-right font-bold pr-5">
            Dashboard/ Product Category
          </h3>
        </div>

        <button className="bg-green border rounded p-3 m-3">
          <span className="font-bold text-xl">+</span> Add New
        </button>

        {/* Table start */}

        <div class="items-center bg-gray-100 dark:bg-gray-900 block m-10">
          <div class="w-full mx-auto lg:container">
            <div class="w-full">
              <div class="min-w-full my-10 overflow-x-auto border rounded-md shadow-sm ">
                <table class="min-w-full bg-white rounded whitespace-nowrap">
                  <thead class="border-b bg-gray-50">
                    <tr class="">
                      <th class="px-3 py-3 text-center ">
                        <div class="flex place-content-center">
                          <input
                            type="checkbox"
                            name="select_all"
                            id="select_all"
                            class="w-4 h-4 text-indigo-500 border border-gray-200 rounded focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 dark:border-gray-700"
                          />
                        </div>
                      </th>
                      <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Name
                      </th>
                      <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Image
                      </th>
                      <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Icon
                      </th>
                      <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Status
                      </th>
                      <th class="px-3 py-3 text-xs font-normal text-right text-gray-500 uppercase align-middle">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-sm bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="w-20 px-3 py-4 text-center">
                        <input
                          type="checkbox"
                          name="select"
                          class="w-4 h-4 rounded opacity-50"
                        />
                      </td>
                      <td class="px-3 py-4 text-gray-600 ">#102-325-2565</td>
                      <td class="px-3 py-4 text-gray-500 w-2/6 bg-green-600 text-center ">
                        <img
                          src="https://images.unsplash.com/photo-1549921296-3b0f9a35af35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                          alt="#"
                          className="h-full w-2/6 justify-center ml-9 "
                        />
                      </td>
                      <td class="px-3 py-4">
                        <div class="flex items-center w-max">icon</div>
                      </td>
                      <td class="px-3 py-4">
                        //active and inactive button here
                      </td>
                      <td class="px-3 py-4 text-right text-gray-500 ">
                        $125.00
                      </td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ////////////////////////////////////////////////////// */}
      </div>
    </>
  );
};

export default Categories;

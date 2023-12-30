import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <>
      <div className="w-full h-100px text-black border-black border bg-white-500 flex items-center">
        <div className="text-center flex-grow">
          <input
            type="search"
            name=""
            id=""
            className="m-2 p-2 rounded-full bg-gray-300 text-center"
            placeholder="search items"
          />
        </div>
        <div className="text-center">
          <AccountCircleIcon className="m-5" />
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import { TiThMenu } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaBell } from "react-icons/fa";
function NavBar() {
  return (
    <div className="fixed top-0 flex justify-between px-6 py-2 mt-2 bg-white shadow-lg w-[100%]">
      <div className="flex items-center space-x-4 ">
        <TiThMenu className="text-xl" />
        <img
          className="w-[150px] h-[50px] object-cover object-center"
          src="https://logowik.com/content/uploads/images/youtube-premium8029.logowik.com.webp"
          alt=""
        />
      </div>
      <div className="flex items-center  w-[37%]  ">
        <div className="w-[100%] px-3 py-2 border rounded-l-full ">
          <input type="text" placeholder=" Search" className="outline-none" />
        </div>
        <button className="px-3 py-2.5 text-xl bg-gray-100 border rounded-r-full">
          <CiSearch />
        </button>

        <FaMicrophone
          size={"23px"}
          className="ml-3 duration-200 border rounded-full cursor-pointer hover:bg-gray-400"
        />
      </div>
      <div className="flex justify-between items-center space-x-3  border-black  w-[10%]">
        <MdOutlineVideoCall size={"36px"} />
        <FaBell size={"28px"} />
        <div className="rounded-full w-[40px]">
          <img
            className="object-cover rounded-full"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

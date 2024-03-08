import React from "react";
import { CustomButton } from "../UI";
import { IoMenu } from "react-icons/io5";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-[#121212] h-8 p-8 flex justify-center items-center text-white ">
      <div className="flex justify-between w-full items-center ">
        <div className=" block text-xl font-bold">UO.</div>
        <div className="hidden md:block">
          <div className="flex justify-between w-[500px] capitalize">
            <a>home</a>
            <a>skills</a>
            <a>Project</a>
            <a>Blog</a>
            <a>Contact</a>
          </div>
        </div>
        <div className="hidden md:block">
          <CustomButton
            title="download Cv"
            containerStyles="bg-[#3B2541] px-4 py-3 rounded-xl capitalize"
          />
        </div>
        <div className="block md:hidden">
          <IoMenu size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;

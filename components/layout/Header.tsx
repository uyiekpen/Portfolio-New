import React from "react";
import { CustomButton } from "../UI";
import { IoMenu } from "react-icons/io5";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className=" h-8 p-8 flex justify-center items-center shadow-md ">
      <div className="flex justify-between w-full items-center ">
        <div className=" block text-xl font-bold">UO.</div>
        <div className="hidden md:block">
          <div className="flex justify-between w-[400px] capitalize">
            <a>home</a>
            <a>Portfolio</a>
            <a>Blog</a>
            <a>Contact</a>
          </div>
        </div>
        <div className="hidden md:block">
          <a href="https://docs.google.com/document/d/1LNs4rOLf3fDMaA1k90z5y8Iw3NkhgT62/edit">
            <CustomButton
              title="download Cv"
              containerStyles="bg-transparent text-black border-[2px] px-4 py-3 rounded-xl capitalize"
            />
          </a>
        </div>
        <div className="block md:hidden">
          <IoMenu size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;

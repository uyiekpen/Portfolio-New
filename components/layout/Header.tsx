"use client";
import React, { useState } from "react";
import { CustomButton } from "../UI";
import { IoMenu } from "react-icons/io5";

// ... (previous imports)

type Props = {};

const Header = (props: Props) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className="fixed top-0 w-full bg-white h-16 p-4 flex justify-center items-center shadow-md z-50">
      <div className="flex justify-between w-full items-center">
        <div className="block text-xl font-bold">UO.</div>
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
              title="Download CV"
              containerStyles="bg-transparent text-black border-[2px] px-4 py-3 rounded-xl capitalize"
            />
          </a>
        </div>
        <div className="block md:hidden" onClick={onToggle}>
          <IoMenu size={30} />
        </div>
      </div>
      {toggle ? (
        <div className="bg-[#33323D] fixed right-0 w-[200px] h-[300px] top-16">
          <div className="flex text-center mt-10 leading-10 text-white uppercase flex-col items-center">
            <a>home</a>
            <a>Portfolio</a>
            <a>Blog</a>
            <a>Contact</a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;

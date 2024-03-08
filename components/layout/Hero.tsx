import React from "react";
import Image from "next/image";
import HeroImg from "../../assets/header-img.svg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-[540px] w-full text-white  bg-[#121212]">
      <div className="h-full w-full ">
        <div className="flex justify-between w-full h-full p-8">
          <div className="md:h-[120px] h-[100px]  flex flex-col justify-between  ">
            <div className="h-3 w-3 rounded-[100%] bg-white "></div>
            <div className="h-3 w-3 rounded-[100%] bg-white "></div>
            <div className="h-3 w-3 rounded-[100%] bg-white"></div>
            <div className="h-3 w-3 rounded-[100%] bg-white"></div>{" "}
            <div className="h-3 w-3 rounded-[100%] bg-white"></div>
          </div>
          <div className="flex w-[90%] justify-between flex-col-reverse md:flex-row ">
            <div className="md:w-[500px]  w-full flex justify-center flex-col ">
              <h2 className="md:text-5xl md:font-semibold md:leading-normal text-2xl">
                Hello, I am Osazie Uyiekpen A software Engineer
              </h2>
              <p className="mt-2  text-xs md:text-sm">
                I’m a professional front end developer and also a tutor based in
                Lagos. I am passionate about leveraging my diverse backgrounds
                to decipher challenging problems and create delightful
                experiences.
              </p>
            </div>
            <div className="md:w-[500px] w-full ">
              <Image src={HeroImg} alt="hero.png" />
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Hero;

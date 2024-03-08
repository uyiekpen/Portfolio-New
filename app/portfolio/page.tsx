import Image from "next/image";
import React from "react";
import RouteliftImage from "../../assets/routelift.png";
import { CustomButton } from "@/components/UI";
type Props = {};

const portfolio = (props: Props) => {
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:h-[400px] h-[300px]">
          <Image
            src={RouteliftImage}
            alt="project.png"
            className="w-full h-full md:object-contain object-cover"
          />
        </div>
        <div className=" md:px-8 px-4 flex justify-center flex-col md:w-1/2 leading-8">
          <h2 className="font-semibold capitalize mb-2">
            Route Lift(Delivery Application)
          </h2>
          <p className="font-light mb-2">
            Handle your last-mile deliveries like a pro using our smart software
            No more manual hassles. Automate dispatch, track everything in
            real-time, and make your customers smile. Boost efficiency, keep 'em
            coming back, and cut down on costs.
          </p>
          <div className="hidden md:block">
            <a href="https://www.routelift.com/">
              <CustomButton
                title="View Project"
                containerStyles="bg-transparent text-black border-[2px] px-4 py-3  capitalize"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;

import React, { useState } from "react";
import GetOtp from "./GetOtp";
import OTP from "./OTP";

const Signin = () => {
  const [isOtp, setIsOtp] = useState(false);
  return (
    <section className="min-w-full min-h-screen flex flex-col p-3  lg:flex-row ">
      <div className="w-full flex-1  order-1 flex justify-center items-center ">
        <div className="w-full  flex items-center ">
          <div className="px-10">
            <h1 className="text-6xl md:text-8xl">
              VOTE<span className="text-purple-700">M</span>
            </h1>
            <h5 className="text-3xl ">
              Democracy on the{" "}
              <span className="text-purple-500">BLOCKCHAIN</span>
            </h5>
          </div>
        </div>
      </div>
      {isOtp ? <OTP /> : <GetOtp setIsOtp={setIsOtp} />}
    </section>
  );
};

export default Signin;

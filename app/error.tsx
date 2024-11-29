"use client";
import React from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { PiExclamationMark } from "react-icons/pi";

const Page = () => {
  return (
    <div className="flex-col  flex justify-center items-center text-3xl lg:text-5xl font-bold text-red5 uppercase">
      <div className="flex py-32 flex-col items-center gap-5">
        <BsExclamationCircle className=" size-40" />
        <p>Error occured</p>
      </div>
    </div>
  );
};

export default Page;

"use client";
import GsapSlider from "@/components/GsapSlider";
import ToDoApp from "@/components/ToDoApp";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const Hero = () => {
  const arr = ["Page-1", "Page-2"];
  const [open, setOpen] = useState(0);
  const param = useParams();
  const { slug } = param;
  const handleButtonClick = (index: any) => {
    setOpen(open === index ? false : index);
  };
  return (
    <div>
      <div>
        {arr.map((obj, i) => (
          <Link
            href={`/test/${obj.toLowerCase().replace(" ", "-")}`}
            onClick={() => handleButtonClick(i)}
            key={i}
            className={`${
              slug === obj.toLowerCase().replace(" ", "-") &&
              "bg-red-400 text-black border border-black"
            } bg-black mx-auto text-white px-4 py-2.5 my-2 border border-transparent text-base font-normal rounded-lg hover:text-black hover:bg-transparent hover:border-black duration-300 ease-linear text-center flex justify-center items-center max-w-36`}
          >
            {obj}
          </Link>
        ))}
      </div>
      {slug === "page-1" && <ToDoApp />}
      {slug === "page-2" && <GsapSlider />}
    </div>
  );
};

export default Hero;

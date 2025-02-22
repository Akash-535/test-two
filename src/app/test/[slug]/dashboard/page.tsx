"use client";
import NewSlider from "@/components/NewSlider";
import ToDoApp from "@/components/ToDoApp";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const Hero = () => {
  const arr = ["Question-1", "Question-2"];
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
            href={`/test/${obj.toLowerCase().replace(" ", "-")}/dashboard`}
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
      {slug === "question-1" && <ToDoApp />}
      {slug === "question-2" && <NewSlider />}
    </div>
  );
};

export default Hero;

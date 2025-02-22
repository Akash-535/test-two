import { NEW_SWIPER_LIST, SLIDER_ICON_LIST } from "@/utils/helper";
import { HeroLayerIcon } from "@/utils/Icons";
import gsap from "gsap";
import Image from "next/image";
import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NewSlider = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.log("GSAP Animation running...");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const mm = gsap.matchMedia();
      // for 1920
      mm.add("(min-width:1280.98px)", () => {
        gsap.set(".icon-one", {
          borderRadius: "6px",
          background: "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
          borderColor: "black",
        });
        gsap.set(".icon-one::after", {
          background: "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
          content: '""',
        });
        gsap.set(".line", {
          width: "15.5%",
          background: "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
        });
        ScrollTrigger.create({
          trigger: ".gsap-parent",
          start: "20% , top",
          end: "500% center",
          scrub: 2,
          pin: true,
          animation: tl,
        });

        tl.to(
          ".my-slider",
          {
            x: "-300%",
            duration: 2,
          },
          0.24
        )
          .to(
            ".icon-two",
            {
              borderRadius: "6px",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
              borderColor: "black",
              fill: "white",
            },
            0.1
          )
          .to(".icon-two::after", {
            background:
              "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
            content: '""',
          })
          .to(
            ".icon-two svg path",
            {
              fill: "white",
            },
            0.1
          )
          .fromTo(
            ".line",
            { width: "15.5%" },
            {
              width: "39%",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
            },
            0.2
          )
          .to(
            ".icon-three",
            {
              borderRadius: "6px",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
              borderColor: "black",
              fill: "white",
            },
            0.4
          )
          .to(
            ".icon-three svg path",
            {
              stroke: "white",
            },
            0.4
          )
          .fromTo(
            ".line",
            { width: "39%" },
            {
              width: "60.5%",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
            },
            0.6
          )
          .to(
            ".icon-four",
            {
              borderRadius: "6px",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
              borderColor: "black",
              fill: "white",
            },
            1.2
          )
          .to(
            ".icon-four svg path",
            {
              stroke: "white",
            },
            1.2
          )
          .fromTo(
            ".line",
            { width: "60.5%" },
            {
              width: "83%",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
            },
            1.4
          );
      });
      // for 1280
      mm.add("(min-width:1023.98px) and (max-width:1280.98px)", () => {
        gsap.set(".icon-one", {
          borderRadius: "6px",
          background: "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
          borderColor: "black",
        });
        gsap.set(".icon-one::after", {
          background: "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
          content: '""',
        });
        gsap.set(".line", {
          width: "13.5%",
          background: "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
        });
        ScrollTrigger.create({
          trigger: ".gsap-parent",
          start: "top, top",
          end: "400% center",
          scrub: 2,
          pin: true,
          animation: tl,
        });

        tl.to(
          ".my-slider",
          {
            x: "-305%",
            duration: 2,
          },
          0.21
        )
          .to(
            ".icon-two",
            {
              borderRadius: "6px",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
              borderColor: "black",
              fill: "white",
            },
            0
          )
          .to(".icon-two::after", {
            background:
              "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
            content: '""',
          })
          .to(
            ".icon-two svg path",
            {
              fill: "white",
            },
            0
          )
          .fromTo(
            ".line",
            { width: "13.5%" },
            {
              width: "39%",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
            },
            0.2
          )
          .to(
            ".icon-three",
            {
              borderRadius: "6px",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
              borderColor: "black",
              fill: "white",
            },
            0.4
          )
          .to(
            ".icon-three svg path",
            {
              stroke: "white",
            },
            0.4
          )
          .fromTo(
            ".line",
            { width: "39%" },
            {
              width: "61%",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
            },
            0.6
          )
          .to(
            ".icon-four",
            {
              borderRadius: "6px",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
              borderColor: "black",
              fill: "white",
            },
            0.8
          )
          .to(
            ".icon-four svg path",
            {
              stroke: "white",
            },
            0.8
          )
          .fromTo(
            ".line",
            { width: "61%" },
            {
              width: "84.5%",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
            },
            1.2
          );
      });
      // for 1024
      mm.add("(min-width:767.98px) and (max-width:1023.98px)", () => {
        gsap.set(".icon-one", {
          borderRadius: "6px",
          background: "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
          borderColor: "black",
        });
        gsap.set(".icon-one::after", {
          background: "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
          content: '""',
        });
        gsap.set(".line", {
          height: "5%",
          background: "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
        });
        ScrollTrigger.create({
          trigger: ".gsap-parent",
          start: "20%, top",
          end: "400%, center",
          scrub: 1.5,
          pin: true,
          animation: tl,
        });

        tl.to(
          ".my-slider",
          {
            y: "-312%",
            duration: 2,
          },
          0.32
        )
          .to(
            ".icon-two",
            {
              borderRadius: "6px",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
              borderColor: "black",
              fill: "white",
            },
            0.2
          )
          .to(".icon-two::after", {
            background:
              "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
            content: '""',
          })
          .to(
            ".icon-two svg path",
            {
              fill: "white",
            },
            0.2
          )
          .fromTo(
            ".line",
            { height: "5%" },
            {
              height: "35%",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
              duration: 0.45,
            },
            0.4
          )
          .to(
            ".icon-three",
            {
              borderRadius: "6px",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
              borderColor: "black",
              fill: "white",
            },
            0.6
          )
          .to(
            ".icon-three svg path",
            {
              stroke: "white",
            },
            0.6
          )
          .fromTo(
            ".line",
            { height: "34%" },
            {
              height: "65%",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
              duration: 0.55,
            },
            0.78
          )
          .to(
            ".icon-four",
            {
              borderRadius: "6px",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
              borderColor: "black",
              fill: "white",
            },
            1.3
          )
          .to(
            ".icon-four svg path",
            {
              stroke: "white",
            },
            1.3
          )
          .fromTo(
            ".line",
            { height: "65%" },
            {
              height: "95%",
              background:
                "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
              duration: 0.45,
            },
            1.6
          );
      });
      // For mobile screen
      mm.add("(max-width:767.98px)", () => {
        ScrollTrigger.create({
          trigger: ".gsap-parent",
          start: "20%, top",
          end: "400%, center",
          scrub: 1.5,
          pin: true,
          animation: tl,
        });

        tl.to(".my-slider", {
          y: "-290%",
          duration: 2,
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-custom-black relative pt-[156px] pb-28 gsap-parent overflow-hidden max-xl:pt-28 max-lg:py-16">
      <div className="absolute top-0 right-0">
        <HeroLayerIcon />
      </div>
      <h2 className="text-white max-w-[830px] mx-auto text-5xl leading-[57.6px] text-center pb-[60px] max-lg:text-4xl max-md:text-3xl -5 max-lg:max-w-[740px] max-md:max-w-[540px] max-sm:max-w-[340px]">
        Transforming Secure, Modern{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-pink to-custom-sky-blue">
          Development
        </span>{" "}
        with AdaptsAI
      </h2>
      <div className="flex flex-col w-full justify-center items-center max-lg:flex-row max-lg:px-4 max-lg:container mx-auto overflow-hidden max-lg:min-h-[500px] max-md:py-20">
        <div className="w-full flex flex-col max-lg:flex-row-reverse max-lg:max-w-[165px] mx-auto max-md:hidden">
          <div className="flex w-full max-w-[1023px] mx-auto justify-between pb-6 max-xl:max-w-[790px] max-lg:flex-col max-lg:max-w-[165px] max-lg:pb-0">
            {SLIDER_ICON_LIST.map((obj, i) => (
              <div
                key={i}
                className={`border max-w-[58px] border-custom-blue border-opacity-25 p-4 rounded-md relative after:absolute after:content-'' after:-bottom-[31px] after:size-3 after:rounded-full after:border after:border-white after:border-opacity-10 after:bg-[#060606] after:z-[1] after:max-lg:-left-1/2 after:max-lg:bottom-[40%] max-lg:left-5 ${
                  i === 0
                    ? "icon-one after:line-one-dot"
                    : i === 1
                    ? "icon-two"
                    : i === 2
                    ? "icon-three"
                    : "icon-four"
                }`}
              >
                {obj}
              </div>
            ))}
          </div>
          <div className="w-full h-0.5 bg-white bg-opacity-20 max-lg:w-0.5 max-lg:h-screen max-lg:ml-2.5">
            <div className="h-0.5 line bg-gradient-to-r from-custom-blue to-custom-sky-blue w-[15.5%] max-xl:w-[13.5%] relative max-lg:h-[6%] max-lg:w-0.5"></div>
          </div>
        </div>
        <div className="flex items-center max-w-[1440px] max-xl:max-w-[1024px] px-4 pt-[60px] container mx-auto max-lg:flex-col max-lg:max-h-[700px] max-md:px-0">
          {NEW_SWIPER_LIST.map((obj, i) => (
            <div
              className="flex items-center w-full min-w-[1440px] max-lg:flex-col max-xl:min-w-[1050px] max-lg:min-w-0 max-xl:ml-5 container mx-auto justify-center max-xl:justify-start max-lg:justify-end my-slider gap-16 max-xl:gap-10 max-lg:gap-6 max-lg:min-h-[700px] max-lg:pl-0 max-md:ml-0"
              key={i}
            >
              <div className="max-w-[461px] max-xl:max-w-sm max-lg:max-w-none max-lg:w-full">
                <div className="object-cover w-full max-w-[297px] text-icon max-md:mx-auto max-md:flex justify-center">
                  {obj.textIcon}
                </div>
                <h2 className="text-3xl text-offWhite font-medium leading-6 text-white max-lg:text-2xl max-md:text-center">
                  {obj.heading}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-pink to-custom-sky-blue">
                    {obj.spanText}
                  </span>
                </h2>
                <p className="text-base font-normal leading-6 max-w-[421px] text-white opacity-90 pt-4 max-lg:max-w-lg max-md:text-sm max-md:text-center">
                  {obj.description}
                </p>
              </div>
              <div className="w-6/12 max-lg:w-full">
                <Image
                  src={obj.image}
                  alt="slides"
                  width={614}
                  height={427}
                  className="max-lg:object-contain lg:object-cover max-xl:w-[510px] max-lg:max-w-md max-lg:h-[250px] max-md:w-full max-md:max-w-none max-md:h-[300px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewSlider;

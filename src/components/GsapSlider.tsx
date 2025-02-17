"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgOne from "../../public/assets/images/first-image.webp";
import gifTwo from "../../public/assets/gif/gif-1.gif";
import gifFour from "../../public/assets/gif/gif-2.gif";
import imgThree from "../../public/assets/images/slider-img-three.webp";
gsap.registerPlugin(ScrollTrigger);

const GsapSlider = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gsap-slider",
        start: "60% center",
        end: "200%",
        scrub: 1,
        pin: true,
      },
    });
    tl.fromTo(
      ".slider-item",
      {
        x: "0%",
      },
      {
        x: "-75%",
      },
      "+=0.5"
    );
  }, []);
  return (
    <div className="bg-custom-black gsap-slider min-h-screen pt-[156px] pb-28 overflow-hidden mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-center items-center px-5">
        <h2 className="text-white max-w-[830px] mx-auto text-5xl leading-[57.6px] text-center pb-[60px] max-lg:text-4xl max-md:text-3xl -5 max-lg:max-w-[740px] max-md:max-w-[540px] max-sm:max-w-[340px]">
          Transforming Secure, Modern{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-pink to-custom-sky-blue">
            Development
          </span>{" "}
          with AdaptsAI
        </h2>
        <div className="overflow-hidden pt-[60px] max-w-[1440px]">
          <div className="flex w-max slider-item left-0 ">
            {/* gsap content one */}
            <div className="min-w-[1440px] max-xl:min-w-[1000px] mx-auto px-5">
              <div
                className={`flex gap-[65px] items-center container max-w-[1140px] mx-auto max-xl:flex-col`}
              >
                <div className="flex flex-col max-w-[461px]">
                  <h3
                    className={`font-roboto font-black text-[256px] leading-[100%] text-white`}
                  >
                    01
                  </h3>
                  <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                    AI Chatbots don’t create enterprse-grade
                    <span className="text-blue">apps</span>
                  </h4>
                  <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">
                    Bootstrap end to end application package including
                    architecture, tests, infrastructure and deployment code
                    leveraging AdaptsAI’s patented engine. Your apps are secure
                    by design and by default.
                  </p>
                </div>
                <Image
                  src={imgOne}
                  alt="slider"
                  width={614}
                  height={417}
                  className="shadow-[0px_4px_58.7px_0px_#00DDFF26] rounded-xl h-[417px] max-lg:max-w-[614px] max-lg:max-h-[417px]"
                />
              </div>
            </div>
            {/* gsap content two */}
            <div className="min-w-[1440px] max-xl:min-w-[1000px] mx-auto px-5">
              <div
                className={`flex gap-[65px] items-center container max-w-[1140px] mx-auto max-xl:flex-col`}
              >
                <div className="flex flex-col max-w-[461px]">
                  <h3
                    className={`font-roboto font-black text-[256px] leading-[100%] text-white`}
                  >
                    02
                  </h3>
                  <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                    Modernization Doesn’t Have to Mean Failure
                  </h4>
                  <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">
                    Traditional app modernization often falls short because
                    teams are forced to navigate poorly documented legacy code —
                    an outdated maze that slows progress and drives up costs.
                    It’s time to change the narrative. <br /> <br /> The
                    execution can neither compromise on business and technical
                    requirements nor lose sight of modern architecture and
                    security.
                  </p>
                </div>
                <Image
                  src={gifTwo}
                  alt="slider"
                  width={614}
                  height={417}
                  className="shadow-[0px_4px_58.7px_0px_#00DDFF26] rounded-xl h-[417px] max-lg:max-w-[614px] max-lg:max-h-[417px]"
                />
              </div>
            </div>
            {/* gsap content three*/}
            <div className="min-w-[1440px] max-xl:min-w-[1000px] mx-auto">
              <div
                className={`flex gap-[65px] items-center container max-w-[1140px] mx-auto max-xl:flex-col`}
              >
                <div className="flex flex-col max-w-[461px]">
                  <h3
                    className={`font-roboto font-black text-[256px] leading-[100%] text-white`}
                  >
                    03
                  </h3>
                  <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                    Protected from Legal Risks and IP liability
                  </h4>
                  <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">
                    AdaptsAI ensures IP protection by generating custom,
                    original code with no direct replication of copyrighted
                    material. Our LLM engine delivers unique, optimized
                    solutions while maintaining high quality. Users can trust
                    their codebases are free from IP risks, enabling secure,
                    responsible AI innovation.
                  </p>
                </div>
                <Image
                  src={imgThree}
                  alt="slider"
                  width={614}
                  height={417}
                  className="shadow-[0px_4px_58.7px_0px_#00DDFF26] rounded-xl h-[417px] max-lg:max-w-[614px] max-lg:max-h-[417px]"
                />
              </div>
            </div>
            {/* gsap content four */}
            <div className="min-w-[1440px] max-xl:min-w-[1000px] mx-auto">
              <div
                className={`flex gap-[65px] items-center container max-w-[1140px] mx-auto max-xl:flex-col`}
              >
                <div className="flex flex-col max-w-[461px]">
                  <h3
                    className={`font-roboto font-black text-[256px] leading-[100%] text-white`}
                  >
                    04
                  </h3>
                  <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                    AI generated apps need maintenance too!
                  </h4>
                  <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">
                    Business applications demand ongoing maintenance to address
                    new vulnerabilities, ensure reliability, and deliver updates
                    or bug fixes. <br /> <br />
                    With AdaptsAI's advanced context awareness, maintenance
                    becomes effortless—minimizing code ramp-up time,
                    streamlining troubleshooting, and simplifying enhancements
                    for maximum efficiency.
                  </p>
                </div>
                <Image
                  src={gifFour}
                  alt="slider"
                  width={614}
                  height={417}
                  className="shadow-[0px_4px_58.7px_0px_#00DDFF26] rounded-xl h-[417px] max-lg:max-w-[614px] max-lg:max-h-[417px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Slider End  */}
      </div>
    </div>
  );
};

export default GsapSlider;

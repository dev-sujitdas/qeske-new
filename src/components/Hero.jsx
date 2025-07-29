import React, {useRef} from "react";
import Button from "./buttons/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroVideo from "/Videos/qeske video.mp4";
import { FaDiceD20 } from "react-icons/fa6";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { ImSpoonKnife } from "react-icons/im";

const Hero = () => {

  const heroContent = [
    {
      icon: <FaDiceD20 />,
      title: "Textile Innovation Space",
      para: (
        <>
          A creative lab where textiles meet technology
          <br />— shaping the future of fabric and design.
        </>
      ),
    },
    {
      icon: <HiWrenchScrewdriver />,
      title: "The Makerspace at Qeske",
      para: (
        <>
          A collaborative space equipped for building,
          <br />
          prototyping, and bringing bold ideas to life.
        </>
      ),
    },
    {
      icon: <ImSpoonKnife />,
      title: "Community Canteen Space",
      para: (
        <>
          More than meals — a warm place to connect,
          <br />
          share, and spark new conversations.
        </>
      ),
    },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => { 
      
      gsap.from("#hero-title h1", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }); 

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="w-full h-screen relative">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        src={heroVideo}
      ></video>
      <div className="w-full h-full absolute top-0 left-0 p-7 flex flex-col justify-between">
        <div  id="hero-title" className="w-full h-fit mt-24 ">
          <div className="lexend-deca-regular text-8xl text-[#f1f1f1] h-[7rem] overflow-hidden">
            <h1>Workspace.</h1>
          </div>
          <div className="lexend-deca-regular text-8xl text-[#f1f1f1] h-[7rem] flex gap-5  overflow-hidden">
            <h1>Designed To Inspire</h1>
          </div>
        </div>
        <div className="w-full h-fit flex justify-between ">
          <div className="w-1/2">
            {heroContent.map((item, index) => (
              <div key={index} className="flex gap-5 items-center mt-5">
                <h2 className="text-5xl text-white">{item.icon}</h2>
                <div className="">
                  <h2 className="text-xl text-white lexend-deca-semibold ">
                    {item.title}
                  </h2>
                  <p className="lexend-deca-regular text-zinc-300 ">
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-1/2 flex flex-col justify-end gap-5">
            <h2 className="lexend-deca-regular text-[#f1f1f1] flex flex-col text-6xl">
              <span>You bring the vision</span>
              <span>— Qeske create the space.</span>
            </h2>
            <Button
              width="w-48"
              title="Get in touch"
              bodyColor="bg-white"
              bodyText="text-black"
              circleColor="bg-[#000]"
              circleText="text-white"
              href="mailto:community@qeskemaastricht.nl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

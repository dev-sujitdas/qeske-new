import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./buttons/Button";
import denim from "/Images/logo-denimx-white.jpg";
import { FaPlay } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Company = () => {
  const titleRef = useRef();  
  const title2Ref = useRef();
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isPlay, setIsPlay] = useState(null);

  const gridItems = [
    {
      href: "https://www.twogirlsonestudio.com/",
      title: "Two Girls One Studio",
      description: "Communal Ceramic and Textile Makerspace",
      logo: "https://static.wixstatic.com/media/d6a4b6_25409b4a2785434281223e964b19969e~mv2.png/v1/crop/x_0,y_707,w_2480,h_758/fill/w_677,h_207,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d6a4b6_25409b4a2785434281223e964b19969e~mv2.png",
    },
    {
      href: "https://sustainably.io/",
      title: "Sustainably",
      description: "Take air quality into your own hands",
      logo: "https://sustainably.io/assets/images/logo/sustainably_logo.jpg",
    },
    {
      href: "https://pro-duck.com/",
      title: "Pro Duck",
      description: "3D Modeling, CNC Routing, Prototyping",
      logo: "https://pro-duck.com/wp-content/uploads/2024/06/Pro-Duck-Logo.png",
    },
    {
      href: "https://www.flokotattoo.com/",
      title: "Folko Tattoo",
      description: "Floko Tattoo is a private tattoo studio.",
      logo: "https://lh3.googleusercontent.com/Pn2j-EzirX-febdSsoLr7Knn30IpB6wA59oN7-odM0BlgWzIGMIcdi1oqtVR1O4roKDNgdUhvMGKjf9BMkbfSbhf4vGFPgcEHdt-Oje1YDSKaPWakRLFNtlHRktO94kDIQ6PRn_LgVY=w16383",
    },
    {
      href: "https://denimx.nl/",
      title: "Denim X",
      description: "Recycled Denim Products",
      logo: denim,
    },
    {
      href: "https://www.uni-view.nl/",
      title: "Uni View",
      description: "Student's Online Housing Viewing Platform",
      logo: "https://www.uni-view.nl/logo/light/logo_darker.svg",
    },
    {
      href: "https://www.atc-network.com/",
      title: "ATC Network",
      description: "Airspace Aviation Media B2B",
      logo: "https://www.atc-network.com/upload/air-traffic-control-network-logo.svg",
    },
    {
      href: "https://toleria.nl/",
      title: "Toleria",
      description: "We Create Digital Solutions",
      logo: "https://toleria.nl/img/toleria-logo-text-company.png",
    },
  ]; 

   useEffect(() => {
    const videoContainer = containerRef.current;
    const video = videoRef.current;
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const handleMouseMove = (e) => {
      gsap.to(follower, {
        opacity: 1,
      });
      gsap.to(cursor, {
        left: e.clientX - 500,
        top: e.clientY - 200,
      });
    };

    const handleClick = () => {
      if (!isPlay) {
        video.play();
        gsap.to(cursor, { scale: 0.5 });
      } else {
        video.pause();
        gsap.to(cursor, { scale: 1 });
      }
      setIsPlay(!isPlay);
    };

    videoContainer.addEventListener("mouseenter", () => {
      videoContainer.addEventListener("mousemove", handleMouseMove);
    });

    videoContainer.addEventListener("mouseleave", () => {
      gsap.to(follower, { opacity: 1 });
      gsap.to(cursor, { left: "50%", top: "50%" });
      videoContainer.removeEventListener("mousemove", handleMouseMove);
    });

    videoContainer.addEventListener("click", handleClick);

    return () => {
      videoContainer.removeEventListener("click", handleClick);
      videoContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isPlay]);

     useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.querySelectorAll("h2 span"), {
        scrollTrigger: {
          trigger: "#company",
          start: "top 85%",
          end: "top 50%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });  
          
    });

    return () => ctx.revert();
  });






  return (
    <section id="company" className="w-full">
      <div className="p-7 w-full flex flex-col justify-center items-center mt-25">
        <div ref={titleRef} id="company-title" className="text-center">
          <h2 className="text-black text-8xl lexend-deca-regular tracking-tighter">
            <span>Your</span> <span>Creative</span> <span>Launch</span>
          </h2>
          <h2 className="text-black text-8xl lexend-deca-regular tracking-tighter">
            <span>Space</span>
          </h2>
        </div>
        <div className="flex justify-center items-center mt-10">
          <h3 className="text-center text-xl">
            Qeske brings creators, entrepreneurs, and innovators under one roof{" "}
            <br />— with flexible workspaces, vibrant communities, and
            opportunities to grow.
          </h3>
        </div>
      </div>
   
      <div className="w-full flex justify-center items-center mt-20">
        <div className="video-container h-[40rem] w-[60%] rounded-xl overflow-hidden relative" ref={containerRef}>
          <video
            ref={videoRef}
            src="https://www.qeskemaastricht.nl/qeske%2dmaastricht%2dpromo.mp4"
            className="object-cover w-full h-full"
          />
          <div
            id="video-cursor"
            ref={cursorRef}
            className="absolute left-0 top-0"
          >
          {isPlay ? <IoMdPause/> :  <FaPlay/>}
          </div>
          <div className="mousefollower" ref={followerRef}></div>
        </div>
      </div>

      <div className="w-full">
        <div ref={title2Ref} className="company-title2 p-7 mt-20">
          <h2 className="text-7xl lexend-deca-regular tracking-tight">
            <span>Creative</span> <span>Forces</span>
          </h2>
          <h2 className="text-7xl lexend-deca-regular mt-3 tracking-tighter leading-10">
            <span>Within</span> <span>Our</span> <span>Network.</span>
          </h2>
          <div>
            <h3 className="text-lg lexend-deca-regular mt-7 w-[25rem]">
              Participating Companies, Startups, Studios & Visionaries Growing
              at Qeske.
            </h3>
          </div>
        </div>

        <div id="grid_box" className="grid grid-cols-4 grid-rows-2 mt-10">
          {gridItems.map((item, index) => (
            <div key={index} className="item_grid">
              <div className="icon_grid flex justify-center items-center">
                <img className="h-24 w-fit" src={item.logo} alt="" />
              </div>
              <div className="flexbox_grid mt-10">
                <div className="title text-2xl lexend-deca-semibold tracking-tight">
                  {item.title}
                </div>
                <div className="text-lg">{item.description}</div>
                <div className="mt-2">
                  <Button
                    width="w-42"
                    title="Know more"
                    bodyColor="bg-black"
                    bodyText="text-white"
                    circleColor="bg-white"
                    circleText="text-black"
                    circleSize="2rem"
                    href={item.href}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;

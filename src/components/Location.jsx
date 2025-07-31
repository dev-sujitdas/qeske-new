import React, { useRef, useEffect } from "react";
import Button from "./buttons/Button";
import workspace from "/Images/workspace.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const titleRef = useRef();
  const scrollRef = useRef();
  const locationRef = useRef();

  const locations = [
    {
      icon: <FaLocationDot />,
      title: "Qeske Maastricht.",
      href: "https://www.qeskemaastricht.nl/",
    },
    {
      icon: <FaLocationDot />,
      title: "Qeske Maastricht Q1.",
      href: "https://qeske.nl/qeske-kerkrade-q1/",
    },
    {
      icon: <FaLocationDot />,
      title: "Qeske Maastricht Q2.",
      href: "https://qeske.nl/qeske-kerkrade-q2/",
    },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.querySelectorAll("h2"), {
        scrollTrigger: {
          trigger: "#location",
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

  useEffect(() => {
    gsap.to(scrollRef.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: locationRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        scroller: document.body,
      },
    });
  }, []);

  return (
    <section
      ref={locationRef}
      id="location"
      className="w-full h-screen bg-black flex overflow-hidden relative"
    >
      <div className="w-1/2 h-full relative overflow-hidden">
        <div ref={scrollRef} className="absolute inset-0">
          <img
            src={workspace}
            className="w-full h-full object-cover scale-120"
            alt="Workspace"
          />
        </div>
      </div>

      <div className="w-1/2 h-full flex flex-col justify-between p-7">
        <div ref={titleRef} id="location-title">
          <h2 className="text-white text-8xl lexend-deca-regular tracking-tighter">
            Anyone.
          </h2>
          <h2 className="text-white text-8xl lexend-deca-regular tracking-tighter">
            Anywhere.
          </h2>
        </div>

        <div>
          <div className="w-full flex flex-wrap justify-center items-center">
            {locations.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3">
                  <div className="flex gap-2 items-center">
                    <h2 className="text-white text-2xl">{item.icon}</h2>
                    <h2 className="text-zinc-300 text-2xl lexend-deca-medium tracking-tighter">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="w-[80%] mt-10">
            <h2 className="text-zinc-200 text-4xl tracking-tighter lexend-deca-light mb-5">
              Work shouldn’t be limited by access, background, or geography.
              Space to grow should belong to you.
            </h2>
            <Button
              width="w-48"
              title="Get in touch"
              titleSize="1.125rem"
              bodyColor="bg-white"
              bodyText="text-black"
              circleColor="bg-[#000]"
              circleText="text-white"
              circleSize="2.5rem" 
              href="mailto:community@qeskemaastricht.nl"
            />           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

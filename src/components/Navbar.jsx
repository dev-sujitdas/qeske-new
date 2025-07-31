import React, { useEffect, useState } from "react";
import Button from "./buttons/Button";

const Navbar = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmall(width <= 820);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className="px-7 py-4 w-full absolute top-0 left-0 z-996 backdrop-blur-sm shadow-sm">
      <div className="w-full flex justify-between items-center">
        <h2 className="lexend-deca-semibold text-white text-xl z-999">
          <a href="/">Qeske Maastricht</a>
        </h2>
        {isSmall ? (
          <button
            onClick={handleToggle}
            className="text-white lexend-deca-semibold z-999"
          >
            {toggle ? ".Menu" : ".Close"}
          </button>
        ) : (
          <div className="flex justify-between items-center gap-40">
            <h3 className="flex gap-5 text-white font-semibold text-base lexend-deca-regular">
              <a className="hover:text-zinc-300" href="/">
                .Home
              </a>
              <a className="hover:text-zinc-300" href="#workspace">
                .Workspace
              </a>
              <a className="hover:text-zinc-300" href="#location">
                .Location
              </a>
              <a className="hover:text-zinc-300" href="#contact">
                .Contact
              </a>
            </h3>

            <Button
              width="w-48"
              title="Get in touch"
              titleSize="1.125rem"
              text="text-black"
              bodyColor="bg-black"
              bodyText="text-white"
              circleColor="bg-[#f1f1f1]"
              circleSize="2.5rem"
              href="mailto:community@qeskemaastricht.nl"
            />
          </div>
        )}
      </div>

      {isSmall && !toggle && (
        <div className="z-998 p-4 bg-black h-[100svh] w-full absolute top-0 right-0 flex flex-col justify-center items-center">
          <h3 className="flex flex-col gap-5 text-white font-semibold text-5xl lexend-deca-regular justify-center items-center">
            <a
              href="#home"
              onClick={() => setToggle(true)}
              className="hover:text-zinc-300"
            >
              .Home
            </a>
            <a
              href="#workspace"
              onClick={() => setToggle(true)}
              className="hover:text-zinc-300"
            >
              .Workspace
            </a>
            <a
              href="#location"
              onClick={() => setToggle(true)}
              className="hover:text-zinc-300"
            >
              .Location
            </a>
            <a
              href="#contact"
              onClick={() => setToggle(true)}
              className="hover:text-zinc-300"
            >
              .Contact
            </a>
          </h3>
          <div className="mt-10">
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
      )}
    </nav>
  );
};

export default Navbar;

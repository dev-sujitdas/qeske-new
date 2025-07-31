import React from "react";
import Button from "./buttons/Button";

const Navbar = () => {
  return (
    <nav className="px-7 py-4 w-full absolute top-0 left-0 z-999 backdrop-blur-sm shadow-sm">
      <div className="w-full flex justify-between items-center">
        <h2 className="lexend-deca-semibold text-white text-2xl"><a href="/">Qeske Maastricht</a></h2>
        <div className="flex justify-between items-center gap-40">
          <h3 className="flex gap-5 text-white font-semibold text-base lexend-deca-regular">
            <a className="hover:text-zinc-300" href="">.Home</a>
            <a className="hover:text-zinc-300" href="">.Workspace</a>
            <a className="hover:text-zinc-300" href="">.Location</a>
            <a className="hover:text-zinc-300" href="">.Contact</a>
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
      </div>
    </nav>
  );
};

export default Navbar;

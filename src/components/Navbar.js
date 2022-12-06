import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [active, setActive] = useState(0);
  const [isNavbaropen, setNavbarclose] = useState(false);

  const navActive = "bg-primary-600 opacity-100";
  const navNonActive = "opacity-70";
  const show = "blcok duration-300";
  const hidden = "hidden duration-300";

  const getActive = (index) => {
    setActive(index);
  };

  const Navdata = [
    <FaHome className="text-2xl md:text-2xl lg:text-2xl" />,
    "កម្សាន្ត",
    "បច្ចេកវិទ្យា",
    "ជីវិតនិងសង្គម",
    "កីឡា",
    "ផ្លូវទៅស្រុក",
    "AUTO TALKS",
    "PODCAST",
    "WORLD CUP",
    <BsThreeDots className="text-2xl md:text-2xl" />,
  ];

  return (
    <>
      <div className="relative h-[70px] w-full bg-black md:h-[140px] lg:h-[140px] xl:h-[140px]">
        <div className="container items-center justify-between bg-black px-0 md:flex md:h-[140px] lg:h-[140px] xl:h-[140px]">
          <AiOutlineMenu
            className="absolute ml-3 block h-[70px] text-2xl text-white sm:left-0 md:hidden"
            onClick={() => setNavbarclose(!isNavbaropen)}
          />
          <div className="flex justify-center px-0 md:block">
            <img
              className="mt-1 h-[60px] w-[50px] md:h-[140px] md:w-[120px] md:py-3"
              src="./img/sabaylogo.png"
              alt="sabaylogo"
            />
          </div>
          <div className="h-full items-center justify-end md:flex lg:mt-0">
            <img
              className="hidden h-[80px] w-9/12 md:flex lg:h-[100px] lg:w-9/12"
              src="./img/advertisement.jpg"
              alt="Advertisement"
            />
          </div>
          <div className="absolute top-3 right-0 flex items-end justify-end md:hidden">
            <img
              className="h-[45px] w-[45px] pr-3"
              src="./img/dealad.gif"
              alt="dealad"
            />
          </div>
        </div>
        <div className="absolute z-50 w-full bg-black md:hidden">
          <div
            className={`grid grid-cols-2 gap-y-1 ${
              isNavbaropen ? show : hidden
            }`}
          >
            {Navdata.map((item) => {
              return (
                <>
                  <div className="items-start justify-start py-2 first:col-span-2 first:flex first:w-full first:bg-red-600">
                    <h1 className="flex items-start justify-start pl-8 font-kulen text-lg text-white">
                      {item}
                    </h1>
                  </div>
                </>
              );
            })}
            <div className="mt-3 flex h-10 justify-center last:col-span-2">
              <img
                className="w-[60px] py-2"
                src="./img/smallmenuicon.png"
                alt="smallmenuicon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary-500">
        <div className="container hidden h-16 bg-primary-500 px-0 md:block">
          <div className="flex h-16 items-center justify-center gap-x-3 lg:justify-start lg:space-x-2">
            {Navdata.map((item, index) => {
              return (
                <>
                  <div
                    className={`flex h-full cursor-pointer items-center justify-center self-center py-3 text-white  
                                     ${
                                       index === active
                                         ? navActive
                                         : navNonActive
                                     }`}
                    onClick={() => getActive(index)}
                  >
                    <h1 className="px-2 font-kulen text-sm md:px-0 md:text-sm lg:px-2 lg:text-lg">
                      {item}
                    </h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

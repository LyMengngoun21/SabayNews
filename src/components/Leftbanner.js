import React from "react";

function Leftbanner({ image, tittle ,bgcolor }) {
  return (
    <div>
      <div className="h-52 bg-black duration-500 md:mt-8 lg:mt-5">
        <img
          className="h-full hover:scale-95"
          src={image}
          alt="leftbannerimage"
        />
        <div className={`h-40 ${bgcolor}`}>
          <p className="px-5 pt-6 font-Battambang md:text-2xl  font-bold text-white">
            {tittle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leftbanner;

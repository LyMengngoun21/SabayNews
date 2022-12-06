import React from "react";

function Smallrightcontent({ image, tittle }) {
  return (
    <div>
      <div className="h-[160px] w-36 overflow-hidden sm:mt-4 md:h-[170px] md:w-[160px] lg:my-1 lg:h-[170px] lg:last:block">
        <div className="aspect-w-3 aspect-h-2 bg-black duration-500 lg:w-36 xl:w-[168px]">
          <img
            className="object-cover hover:scale-95"
            src={image}
            alt="rightcontentimage"
          />
        </div>
        <p className="py-1 font-Battambang text-sm line-clamp-3 lg:w-36 xl:w-40">
          {tittle}
        </p>
      </div>
    </div>
  );
}

export default Smallrightcontent;

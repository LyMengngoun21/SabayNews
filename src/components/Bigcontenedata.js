import React from "react";

function Bigcontenedata({ image, category, title, detail, date, categorybg }) {
  return (
    <>
      <img
        className="absolute group-hover:mix-blend-overlay"
        src={image}
        alt="Bigcontentimage"
      />
      <div
        className={`absolute left-16 top-4 h-8 w-5 skew-x-12 ${categorybg}`}
      ></div>
      <div
        className={`absolute left-4 top-4 h-8 w-16 ${categorybg} py-1 pl-1 font-kulen text-white`}
      >
        {category}
      </div>
      <div className=" h-56 w-full overflow-hidden">
        <h1 className="absolute top-40 left-2 py-2 font-kulen text-white transition-all group-hover:-translate-y-14">
          {title}
        </h1>
        <h1 className="absolute bottom-5 left-2 top-72 font-kulen text-lg text-white transition-all group-hover:-translate-y-28 group-hover:text-red-500">
          {detail}
        </h1>
      </div>
      <p className="absolute bottom-0 left-2 h-8 w-full overflow-hidden py-1 font-kulen text-sm text-white">
        {date}
      </p>
    </>
  );
}

export default Bigcontenedata;

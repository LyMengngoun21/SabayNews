import React from "react";
import { FaChevronRight } from "react-icons/fa";

function Content({ title, bordercolor, bgcolor }) {
  return (
    <>
      <div className="mt-12 overflow-hidden">
        <div className="float-left h-12">
          <div className={`h-12 md:h-12 ${bgcolor} relative`}>
            <p
              className={`h-10 px-3 pt-2 font-kulen text-white md:h-12 md:pt-3 ${bgcolor} flex`}
            >
              {title}
              <div className="px-3 text-xl">
                <FaChevronRight />
              </div>
              <div
                className={`absolute -right-2 skew-x-12 ${bgcolor} top-0 h-[50px] w-5`}
              ></div>
            </p>
          </div>
        </div>
      </div>
      <div className={`-mt-1 border-b-4 ${bordercolor}`}></div>
    </>
  );
}

export default Content;

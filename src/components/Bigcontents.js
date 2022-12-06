import React from "react";
import Bigcontenedata from "./Bigcontenedata";

function Bigcontents() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="container mt-3 grid h-[263px] w-full grid-cols-4 gap-1">
          <div className="col-span-3 grid bg-green-400 ">
            <div className="grid grid-cols-5">
              <div className="hover:text-Navcolor group relative col-span-3 grid h-full w-full cursor-pointer bg-gradient-to-t from-black to-slate-400">
                <Bigcontenedata
                  image="./img/stingnews.jpg"
                  category="កម្សាន្ត"
                  categorybg="bg-red-500"
                  title="ស្ប៉តពាណិជ្ជកម្មរបស់ Sting ល្បីមិនត្រឹមតែនៅកម្ពុជា តែកក្រើកដល់ប្រទេសចំនួន ២ ផ្សេងទៀត"
                  detail="ស្ប៉តពាណិជ្ជកម្មរបស់ Sting ល្បីមិនត្រឹមតែនៅកម្ពុជា"
                  date="Todat 12:23pm"
                />
              </div>
              <div className="full group relative col-span-2 grid w-full cursor-pointer overflow-hidden bg-blue-400 bg-gradient-to-t from-slate-900 to-slate-600">
                <Bigcontenedata
                  image="./img/messi.png"
                  category="កីឡា"
                  categorybg="bg-orange-500"
                  title="ស្ប៉តពាណិជ្ជកម្មរបស់ Sting ល្បីមិនត្រឹមតែនៅកម្ពុជា តែកក្រើកដល់ប្រទេសចំនួន ២ ផ្សេងទៀត"
                  detail="ស្ប៉តពាណិជ្ជកម្មរបស់ Sting"
                  date="Todat 12:23pm"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 grid pb-1">
            <img
              src="./img/cocasponsor.png"
              alt="Cocasponsor"
              className="h-[259px]"
            />
          </div>
        </div>
        <div className="container grid h-[263px] w-full grid-cols-4 gap-1 overflow-hidden">
          <div className="col-span-3 grid bg-green-400">
            <div className="grid grid-cols-5">
              <div className="hover:text-Navcolor group relative col-span-3 grid h-full w-full cursor-pointer bg-gradient-to-t from-slate-900 to-slate-600">
                <Bigcontenedata
                  image="./img/chinasuperstar.png"
                  category="កម្សាន្ត"
                  categorybg="bg-pink-500"
                  title="ស្ប៉តពាណិជ្ជកម្មរបស់ Sting ល្បីមិនត្រឹមតែនៅកម្ពុជា តែកក្រើកដល់ប្រទេសចំនួន ២ ផ្សេងទៀត"
                  detail="ស្ប៉តពាណិជ្ជកម្មរបស់ Sting ល្បីមិនត្រឹមតែនៅកម្ពុជា"
                  date="Todat 12:23pm"
                />
              </div>
              <div className="group relative col-span-2 grid h-[263px] w-full cursor-pointer overflow-hidden bg-blue-400 bg-gradient-to-t from-slate-900 to-slate-600">
                <Bigcontenedata
                  image="./img/messi.png"
                  category="កម្សាន្ត"
                  categorybg="bg-red-500"
                  title="ស្ប៉តពាណិជ្ជកម្មរបស់ Sting ល្បីមិនត្រឹមតែនៅកម្ពុជា តែកក្រើកដល់ប្រទេសចំនួន ២ ផ្សេងទៀត"
                  detail="ស្ប៉តពាណិជ្ជកម្មរបស់ Sting"
                  date="Todat 12:23pm"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 grid pt-1">
            <img
              src="./img/cocasponsor.png"
              alt="Cocasponsor"
              className="h-[259px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bigcontents;

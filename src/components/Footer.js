import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const allSabaylogo = [
  "./img/sabaylogo.png",
  "./img/kanhalogo.png",
  "./img/novellogo.png",
  "./img/kleykleylogo.png",
  "./img/entertainmentlogo.png",
  "./img/socialnewslogo.png",
  "./img/sportlogo.png",
  "./img/sabaytechlogo.png",
  "./img/bizlogo.png",
  "./img/autoverselogo.png",
];

const socialMedia = [
  <BsFacebook />,
  <BsInstagram />,
  <IoLogoYoutube />,
  <SiTiktok />,
  <BsTelegram />,
];

function Footer() {
  return (
    <div className="mt-5 bg-black">
      <div className="container px-0">
        <div className="grid h-auto items-center gap-3 overflow-hidden md:grid-cols-1 lg:grid-cols-3">
          <div className="bg-black">
            <div className="flex justify-center pt-5 md:justify-start md:pt-5 md:pl-0">
              <img
                src="./img/sabayfooterlogo.png"
                alt="Sabayfooterimage"
                className="h-16"
              />
            </div>
            <div className="mt-1 flex flex-col items-center font-Battambang text-white md:items-start">
              <p className="pt-3 text-center font-thin opacity-70 md:pl-0 md:pt-3">
                ​© រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង​ដោយ​ Sabay ឆ្នាំ​២០១៦
              </p>
              <p className="py-2 text-center font-semibold md:py-2 md:pl-0">
                គោលការណ៍​ភាព​ឯកជន | Privacy Policy
              </p>
              <p className="font-semibold md:pl-0">អាសយដ្ឋាន</p>
              <p className="font-thin opacity-70 md:pl-0">
                អគារ​លេខ ៣០៨ មហាវិថីព្រះមុន្នីវង្ស
              </p>
              <p className="mb-4 font-thin opacity-70 md:pl-0">
                សង្កាត់បឹងរាំង ខណ្ឌដូនពេញ
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <h1 className="pt-6 font-kulen text-2xl text-white">អំពីយើង</h1>
            <p className="pt-6 font-Battambang text-white opacity-70">
              Sabay Digital Corporation ជា​ក្រុមហ៊ុន​ព័ត៌មាន​ឌីជីថល
              និង​កម្សាន្ត​ឈាន​មុខ​គេ​នៅ​កម្ពុជា។ ព័ត៌មាន​បន្ថែម
            </p>
            <p className="py-3 font-Battambang text-white opacity-70">
              ផលិត​ផល​ និង​ សេវាកម្ម របស់ Sabay
            </p>
            <div className="flex">
              {allSabaylogo.map((item) => {
                return (
                  <div className="h-14 w-14 opacity-100">
                    <img
                      src={item}
                      alt="alllogoimages"
                      className="rounded-full px-1"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-4 flex flex-col items-center bg-black md:items-start">
            <div>
              <h1 className="flex flex-col items-center pt-0 font-kulen text-2xl text-white opacity-70 md:justify-start md:pl-0 md:pt-5">
                ជួបគ្នានៅបណ្តាញសង្គម
              </h1>
            </div>
            <div className="flex pt-4 md:pl-0 md:pt-7">
              {socialMedia.map((item) => {
                return (
                  <div className="h-14 w-8 text-2xl text-gray-400">{item}</div>
                );
              })}
            </div>
            <div>
              <p className="pb-2 font-Battambang font-semibold text-white md:pl-0">
                ទំនាក់ទំនង
              </p>
              <p className="font-kulen text-sm text-white opacity-70 md:pl-0">
                infomation@sabay.com
              </p>
              <p className="font-kulen text-sm text-white opacity-70 md:pl-0">
                023 228 000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import Tittle from "./Tittle";

function Videosection() {
  const Videodata = [
    {
      img: "./img/clnews.png",
      title:
        "ឈុតឆាកមិនអាចបំភ្លេចបាន និងត្រូវបានបញ្ចូលក្នុងប្រវត្តិសាស្ត្រ MAMA ច្រើនឆ្នាំកន្លងមកនេះនិងត្រូវបានបញ្ចូលក្នុងប្រវត្តិសាស្ត្រ MAMA ច្រើនឆ្នាំកន្លងមកនេះ",
    },
    {
      img: "./img/ronaldonews.png",
      title:
        "Ronaldo បាត់ឱកាស ២គ្រាប់នៅ World Cup ក្រោយគ្រាប់ទីមួយត្រូវ FIFA ឲ្យ Bruno ហើយ​បាល់ប៉េ ត្រូវ Bruno ទាត់ជំនួស",
    },
    {
      img: "./img/beernews.png",
      title: "វីដេអូឯកសារការផលិត RUM បិតពីអំពៅរបស់កម្ពុជាដែលពិភពលោកទទួលស្គាល់",
    },
  ];
  const Videodata1 = [
    {
      img: "./img/beernews.png",
      title:
        "វីដេអូឯកសារការផលិត RUM បិតពីអំពៅរបស់កម្ពុជាដែលពិភពលោកទទួលស្គាល់បិតពីអំពៅរបស់កម្ពុជាដែលពិភពលោកទទួលស្គាល់",
    },
    {
      img: "./img/ronaldonews.png",
      title:
        "Ronaldo បាត់ឱកាស ២គ្រាប់នៅ World Cup ក្រោយគ្រាប់ទីមួយត្រូវ FIFA ឲ្យ Bruno ហើយ​បាល់ប៉េ ត្រូវ Bruno ទាត់ជំនួស",
    },
    {
      img: "./img/beernews.png",
      title:
        "វីដេអូឯកសារការផលិត RUM បិតពីអំពៅរបស់កម្ពុជាដែលពិភពលោកទទួលស្គាល់បិតពីអំពៅរបស់កម្ពុជាដែលពិភពលោកទទួលស្គាល់",
    },
    {
      img: "./img/beernews.png",
      title:
        "វីដេអូឯកសារការផលិត RUM បិតពីអំពៅរបស់កម្ពុជាដែលពិភពលោកទទួលស្គាល់បិតពីអំពៅរបស់កម្ពុជាដែលពិភពលោកទទួលស្គាល់",
    },
    {
      img: "./img/beernews.png",
      title: "វីដេអូឯកសារការផលិត RUM បិតពីអំពៅរបស់កម្ពុជាដែលពិភពលោកទទួលស្គាល់",
    },
    {
      img: "./img/beernews.png",
      title: "វីដេអូឯកសារការផលិត RUM បិតពីអំពៅរបស់កម្ពុជាដែលពិភពលោកទទួលស្គាល់",
    },
    {
      img: "./img/beernews.png",
      title: "វីដេអូឯកសារការផលិត RUM បិតពីអំពៅរបស់កម្ពុជាដែលពិភពលោកទទួលស្គាល់",
    },
    {
      img: "./img/beernews.png",
      title: "វីដេអូឯកសារការផលិត RUM បិតពីអំពៅរបស់កម្ពុជាដែលពិភពលោកទទួលស្គាល់",
    },
  ];

  return (
    <div className="container hidden md:block">
      <div className="relative">
        <Tittle
          title="វីដេអូ"
          bordercolor="border-red-600"
          bgcolor="bg-red-600"
        />
        <div className="shadow-black-500/50 left-0 h-auto w-full px-4 shadow-lg">
          <div className="mt-4 grid w-full grid-cols-3 gap-2 pt-2">
            {Videodata.map((item) => {
              return (
                <div>
                  <div className="">
                    <img src={item.img} alt="" className="h-full w-full" />
                    <div className="font-Battambang text-xl font-medium text-gray-800 line-clamp-3">
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-3 grid h-auto space-x-3 md:grid-cols-6">
            <div className="grid md:col-span-6 lg:col-span-4">
              <div className="grid grid-cols-2 space-x-2 md:grid-cols-3 lg:grid-cols-4">
                {Videodata1.map((item) => (
                  <div className="my-3 h-[240px] overflow-hidden md:h-[170px] md:last:hidden lg:last:block">
                    <div className="h-[100px] w-full bg-slate-400 duration-500">
                      <img
                        className="h-full w-full object-cover hover:scale-95"
                        src={item.img}
                        alt="videosectionimage"
                      />
                    </div>
                    <p className="py-2 font-Battambang text-sm line-clamp-3">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-2 mt-3 hidden h-[300px] space-y-2 lg:grid">
              <img
                className="w-full"
                src="./img/smallsponsor.gif"
                alt="smallcarsponserimage"
              />
              <img
                className="w-full"
                src="./img/smallsponsor2.gif"
                alt="krudsponsorimage"
              />
              <img
                className="w-full"
                src="./img/smallsponsor3.jpg"
                alt="tigersponsorimage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videosection;

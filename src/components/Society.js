import React from "react";
import Leftbanner from "./Leftbanner";
import Smallrightcontent from "./Smallrightcontent";
import Tittle from "./Tittle";

function Society() {
  const Societydata = [
    {
      img: "./img/missgrandsmall.jpg",
      title:
        "បវរកញ្ញា ម៉ិកស៊ិក ម្នាក់ឆក់ចរន្តអគ្គិសនីដាច់ផ្ងារ អំឡុងពេលឡើងប្រកួតលើកឆាក",
    },
    {
      img: "./img/vannsasingg.jpg",
      title:
        "រំភើបណាស់! លោកតា គង់ ណៃ មានស្នាដៃ គ្រប់គ្នាសឹងតែភ្លេច តែត្រូវបានលើកតម្កើងដោយ វណ្ណដា",
    },
    {
      img: "./img/gdevid.jpg",
      title:
        "ក្រៅពីការសម្ដែងរបស់ កញ្ញា G-Devith និង វណ្ណដា ក៏នៅមានទស្សនីយភាពអស្ចារ្យផ្សេងទៀតនៅពិធីបិទកីឡាជាតិលើកទី ៣",
    },
    {
      img: "./img/stingsmall.jpg",
      title:
        "ស្ប៉តពាណិជ្ជកម្មរបស់ Sting ល្បីមិនត្រឹមតែនៅកម្ពុជា តែកក្រើកដល់ប្រទេសចំនួន ២ ផ្សេងទៀត",
    },
    {
      img: "./img/seasotheara.jpg",
      title:
        "អាណិតណាស់! កូនៗស៊ូទ្រាំមើលថែម្តាយមិនហ៊ានគេង ក្រោយ សឿ សុធារ៉ា ចូលមន្ទីរពេទ្យ",
    },
    {
      img: "./img/englandworldcup.jpg",
      title:
        "ខ្សែ​បម្រើ​អង់គ្លេស៖ អង់គ្លេស​សម​ជា​ក្រុម​ដ៏​គួរ​ឱ្យ​ខ្លាចរអា​មួយ",
    },
    {
      img: "./img/mexicoworldcup.jpg",
      title:
        "ក្រោយ​បរាជ័យ​ឡើង​វគ្គ​បន្ត គ្រូ​ម៉ិកស៊ីកូ​អស់​កុងត្រា​ជាមួយ​ក្រុម​ជម្រើសជាតិ",
    },
    {
      img: "./img/ronaldosmall.jpg",
      title:
        "Ronaldo ខកខាន​ហាត់​ជាមួយ​ក្រុ ម​ក្នុង​ការ​ត្រៀម​ប៉ះ​នឹង​កូរ៉េ​ខាង​ត្បូង",
    },
  ];
  return (
    <div className="w-full md:container">
      <div className="relative">
        <Tittle
          title="ជីវិតនិងសង្គម"
          bordercolor="border-orange-400"
          bgcolor="bg-orange-400"
        />
        <div className="shadow-black-500/50 grid h-auto w-full grid-cols-6 gap-3 px-5 shadow-md">
          <div className="hidden sm:hidden md:col-span-3 md:block lg:col-span-2">
            <Leftbanner
              image="./img/nikopic.png"
              bgcolor="bg-orange-500"
              tittle="លោក នីកូ បានបង្ហើបឱ្យដឹងថារូបលោកក្លាយជាទូតសុឆន្ទៈរបស់ផលិតផលថ្នាំដុសធ្មេញ Closeup"
            />
          </div>
          <div className="col-span-6 w-full overflow-x-scroll pb-5 sm:col-span-6 md:col-span-3 md:grid md:overflow-x-hidden lg:col-span-4">
            <div className="col-span-3 mt-4 flex flex-row gap-2 sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid-cols-4">
              {Societydata.map((item) => (
                <Smallrightcontent image={item.img} tittle={item.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Society;

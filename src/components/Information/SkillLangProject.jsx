import React from "react";
import { BsTrash } from "react-icons/bs";

function SkillLangProject() {
  return (
    <div className="px-6 pb-4 flex flex-col space-y-4">
      <div className="flex flex-row space-x-8">
        <div className="flex flex-col basis-1/2">
          <h2 className="font-bold text-xl text-offblack">Yetenekler</h2>
          <div className="flex flex-row justify-around basis-1/2 mt-4 space-x-6">
            <div className="flex flex-col basis-1/2">
              <label className="font-bold text-offblack text-sm mb-2 ml-1">
                Yetenek Adı
              </label>
              <input type="text" placeholder="" className="my-input" />
            </div>
            <div className="flex flex-col basis-1/2">
              <label className="font-bold text-offblack text-sm mb-2 ml-1">
                Seviye
              </label>
              <select className="my-input">
                <option value="beginner">Başlangıç</option>
                <option value="intermediate">Orta seviye</option>
                <option value="advanced">İleri seviye</option>
                <option value="expert">Uzman</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label className="font-bold text-offblack text-sm mb-2 ml-1 text-center">
                Sil
              </label>
              <button className="next-button w-10">
                <BsTrash className="text-xl text-center w-full" />
              </button>
            </div>
          </div>
          <button className="add-button mt-4">Ekle</button>
        </div>

        <div className="flex flex-col basis-1/2">
          <h2 className="font-bold text-xl text-offblack">Diller</h2>
          <div className="flex flex-row justify-around basis-1/2 mt-4 space-x-6">
            <div className="flex flex-col basis-1/2">
              <label className="font-bold text-offblack text-sm mb-2 ml-1">
                Dil Adı
              </label>
              <input type="text" placeholder="" className="my-input" />
            </div>
            <div className="flex flex-col basis-1/2">
              <label className="font-bold text-offblack text-sm mb-2 ml-1">
                Seviye
              </label>
              <select className="my-input">
                <option value="beginner">Başlangıç</option>
                <option value="intermediate">Orta seviye</option>
                <option value="advanced">İleri seviye</option>
                <option value="expert">Uzman</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label className="font-bold text-offblack text-sm mb-2 ml-1 text-center">
                Sil
              </label>
              <button className="next-button w-10">
                <BsTrash className="text-xl text-center w-full" />
              </button>
            </div>
          </div>
          <button className="add-button mt-4">Ekle</button>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <button className="back-button">Geri</button>
        <button className="next-button">İleri</button>
      </div>
    </div>
  );
}

export default SkillLangProject;

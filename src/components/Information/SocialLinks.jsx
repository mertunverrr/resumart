import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/progressbarSlice";

function SocialLinks() {
  const dispatch = useDispatch();
  return (
    <div className="py-2 px-2 lg:px-6 flex flex-col space-y-4">
      <div className="flex flex-row space-x-2 lg:space-x-8">
        <div className="flex flex-col basis-1/5">
          <label className="font-bold text-offblack text-sm mb-2 ml-1">
            Sosyal Medya
          </label>
          <select className="my-input">
            <option value="github">GitHub</option>
            <option value="linkedin">LinkedIn</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
          </select>
        </div>
        <div className="flex flex-col basis-3/5">
          <label className="font-bold text-offblack text-sm mb-2 ml-1">
            Link URL
          </label>
          <input type="text" className="my-input" />
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-offblack text-sm mb-2 ml-1 text-center">
            Sil
          </label>
          <button className="next-button">
            <BsTrash className="text-xl text-center w-full" />
          </button>
        </div>
      </div>
      <button className="add-button">Ekle</button>
      <div className="flex flex-row justify-between">
        <button className="back-button" onClick={() => dispatch(decrement())}>
          Geri
        </button>
        <button className="next-button">İleri</button>
      </div>
    </div>
  );
}

export default SocialLinks;

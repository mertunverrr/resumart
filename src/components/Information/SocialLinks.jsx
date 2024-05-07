import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/progressbarSlice";
import { addArrayItem, updateArrayField } from "../../redux/formSlice";

function SocialLinks() {
  const formData = useSelector((store) => store.form);
  const addSocialLink = (e) => {
    e.preventDefault();
    dispatch(
      addArrayItem({
        arrayName: "socialLinks",
        newItem: {
          socialMedia: "",
          link: "",
        },
      })
    );
  };
  console.log(formData.socialLinks);
  const dispatch = useDispatch();
  return (
    <div className="py-2 px-2 lg:px-6 flex flex-col space-y-4">
      {formData.socialLinks.map((socialLink, index) => (
        <div className="flex flex-row space-x-2 lg:space-x-8" key={index}>
          <div className="flex flex-col basis-1/5">
            <label className="font-bold text-offblack text-sm mb-2 ml-1">
              Sosyal Medya
            </label>
            <select
              className="my-input"
              value={formData.socialLinks[index].socialMedia}
              onChange={(e) =>
                dispatch(
                  updateArrayField({
                    arrayName: "socialLinks",
                    field: "socialMedia",
                    value: e.target.value,
                    index: index,
                  })
                )
              }
            >
              <option value="">Sosyal Medya</option>
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
            <input
              type="text"
              className="my-input"
              value={formData.socialLinks[index].link}
              onChange={(e) =>
                dispatch(
                  updateArrayField({
                    arrayName: "socialLinks",
                    field: "link",
                    value: e.target.value,
                    index: index,
                  })
                )
              }
            />
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
      ))}
      <button className="add-button" onClick={(e) => addSocialLink(e)}>
        Ekle
      </button>
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

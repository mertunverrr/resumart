import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/progressbarSlice";
import {
  addArrayItem,
  updateArrayField,
  deleteArrayItem,
} from "../../redux/formSlice";

function SocialLinks() {
  const formData = useSelector((store) => store.form);
  const langs = useSelector((store) => store.language);
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
    <>
      {langs.lang === "tr" && (
        <div className="py-2 px-0 lg:px-6 flex flex-col space-y-4">
          {formData.socialLinks.map((socialLink, index) => (
            <div className="flex flex-row space-x-1 lg:space-x-6" key={index}>
              <div className="flex flex-col basis-4/12">
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
              <div className="flex flex-col basis-6/12">
                <label className="font-bold text-offblack text-sm mb-2 ml-1 ">
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
              <div className="flex flex-col basis-2/12">
                <label className="font-bold text-offblack text-sm mb-2 ml-1 text-center">
                  Sil
                </label>
                <button
                  className="remove-button"
                  onClick={() =>
                    dispatch(
                      deleteArrayItem({
                        arrayName: "socialLinks",
                        index: index,
                      })
                    )
                  }
                >
                  <BsTrash className="text-xl text-center w-full" />
                </button>
              </div>
            </div>
          ))}
          <button className="add-button" onClick={(e) => addSocialLink(e)}>
            Ekle
          </button>
          <div className="flex flex-row justify-between">
            <button
              className="back-button"
              onClick={() => dispatch(decrement())}
            >
              Geri
            </button>
            <button
              className="next-button"
              onClick={() => dispatch(increment())}
            >
              İleri
            </button>
          </div>
        </div>
      )}
      {langs.lang === "eng" && (
        <div className="py-2 px-0 lg:px-6 flex flex-col space-y-4">
          {formData.socialLinks.map((socialLink, index) => (
            <div className="flex flex-row space-x-1 lg:space-x-8" key={index}>
              <div className="flex flex-col basis-4/12">
                <label className="font-bold text-offblack text-sm mb-2 ml-1">
                  Social Media
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
              <div className="flex flex-col basis-6/12">
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
              <div className="flex flex-col basis-2/12">
                <label className="font-bold text-offblack text-sm mb-2 ml-1 text-center">
                  Remove
                </label>
                <button
                  className="remove-button"
                  onClick={() =>
                    dispatch(
                      deleteArrayItem({
                        arrayName: "socialLinks",
                        index: index,
                      })
                    )
                  }
                >
                  <BsTrash className="text-xl text-center w-full" />
                </button>
              </div>
            </div>
          ))}
          <button className="add-button" onClick={(e) => addSocialLink(e)}>
            Add Item
          </button>
          <div className="flex flex-row justify-between">
            <button
              className="back-button"
              onClick={() => dispatch(decrement())}
            >
              Back
            </button>
            <button
              className="next-button"
              onClick={() => dispatch(increment())}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SocialLinks;

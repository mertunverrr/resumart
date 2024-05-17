import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/progressbarSlice";
import {
  addArrayItem,
  updateArrayField,
  deleteArrayItem,
} from "../../redux/formSlice";

function SkillLangProject() {
  const formData = useSelector((store) => store.form);
  const langs = useSelector((store) => store.language);
  const dispatch = useDispatch();
  const addSkillItem = (e) => {
    e.preventDefault();
    dispatch(
      addArrayItem({
        arrayName: "skills",
        newItem: {
          skillName: "",
          skillLevel: "",
        },
      })
    );
  };
  const addLangItem = (e) => {
    e.preventDefault();
    dispatch(
      addArrayItem({
        arrayName: "languages",
        newItem: {
          langName: "",
          langLevel: "",
        },
      })
    );
  };
  console.log(formData);
  return (
    <>
      {langs.lang === "tr" && (
        <div className="px-1 lg:px-6 pb-4 flex flex-col space-y-4">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="flex flex-col basis-1/2">
              <h2 className="font-bold text-xl text-offblack">Yetenekler</h2>
              {formData.skills.map((skill, index) => (
                <div
                  className="flex flex-row justify-around basis-1/2 mt-2 lg:mt-3 space-x-2 lg:space-x-4"
                  key={index}
                >
                  <div className="flex flex-col basis-6/12">
                    <label className="font-bold text-offblack text-sm mb-2 ml-1">
                      Yetenek Adı
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="my-input"
                      value={formData.skills[index].skillName}
                      onChange={(e) =>
                        dispatch(
                          updateArrayField({
                            arrayName: "skills",
                            field: "skillName",
                            value: e.target.value,
                            index: index,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col basis-4/12">
                    <label className="font-bold text-offblack text-sm mb-2 ml-1">
                      Seviye
                    </label>
                    <select
                      className="my-input"
                      value={formData.skills[index].skillLevel}
                      onChange={(e) =>
                        dispatch(
                          updateArrayField({
                            arrayName: "skills",
                            field: "skillLevel",
                            value: e.target.value,
                            index: index,
                          })
                        )
                      }
                    >
                      <option value="seviye">Seviye</option>
                      <option value="beginner">Başlangıç</option>
                      <option value="intermediate">Orta seviye</option>
                      <option value="advanced">İleri seviye</option>
                      <option value="expert">Uzman</option>
                    </select>
                  </div>
                  <div className="flex flex-col basis-2/12 ">
                    <label className="font-bold text-offblack text-sm mb-2 ml-1 text-center">
                      Sil
                    </label>
                    <button
                      className="remove-button"
                      onClick={() =>
                        dispatch(
                          deleteArrayItem({
                            arrayName: "skills",
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
              <button
                className="add-button mt-4"
                onClick={(e) => addSkillItem(e)}
              >
                Ekle
              </button>
            </div>

            <div className="flex flex-col basis-1/2 mt-6 lg:mt-0">
              <h2 className="font-bold text-xl text-offblack">Diller</h2>
              {formData.languages.map((langItem, index) => (
                <div
                  className="flex flex-row justify-around basis-1/2 mt-2 lg:mt-3 space-x-2 lg:space-x-4"
                  key={index}
                >
                  <div className="flex flex-col basis-6/12">
                    <label className="font-bold text-offblack text-sm mb-2 ml-1">
                      Dil Adı
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="my-input"
                      value={formData.languages[index].langName}
                      onChange={(e) =>
                        dispatch(
                          updateArrayField({
                            arrayName: "languages",
                            field: "langName",
                            value: e.target.value,
                            index: index,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col basis-4/12">
                    <label className="font-bold text-offblack text-sm mb-2 ml-1">
                      Seviye
                    </label>
                    <select
                      className="my-input"
                      value={formData.languages[index].langLevel}
                      onChange={(e) =>
                        dispatch(
                          updateArrayField({
                            arrayName: "languages",
                            field: "langLevel",
                            value: e.target.value,
                            index: index,
                          })
                        )
                      }
                    >
                      <option value="x">Seviye</option>
                      <option value="temel">Temel</option>
                      <option value="konuşkan">Konuşkan</option>
                      <option value="akıcı konuşabilen">
                        Akıcı konuşabilen
                      </option>
                      <option value="ana dil">Ana dil</option>
                    </select>
                  </div>
                  <div className="flex flex-col basis-2/12 ">
                    <label className="font-bold text-offblack text-sm mb-2 ml-1 text-center">
                      Sil
                    </label>
                    <button
                      className="remove-button"
                      onClick={() =>
                        dispatch(
                          deleteArrayItem({
                            arrayName: "languages",
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
              <button
                className="add-button mt-4"
                onClick={(e) => addLangItem(e)}
              >
                Ekle
              </button>
            </div>
          </div>
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
        <div className="px-1 lg:px-6 pb-4 flex flex-col space-y-4">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="flex flex-col basis-1/2">
              <h2 className="font-bold text-xl text-offblack">Skills</h2>
              {formData.skills.map((skill, index) => (
                <div
                  className="flex flex-row justify-around basis-1/2 mt-2 lg:mt-3 space-x-2 lg:space-x-4"
                  key={index}
                >
                  <div className="flex flex-col basis-6/12">
                    <label className="font-bold text-offblack text-sm mb-2 ml-1">
                      Skill Name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="my-input"
                      value={formData.skills[index].skillName}
                      onChange={(e) =>
                        dispatch(
                          updateArrayField({
                            arrayName: "skills",
                            field: "skillName",
                            value: e.target.value,
                            index: index,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col basis-4/12">
                    <label className="font-bold text-offblack text-sm mb-2 ml-1">
                      Level
                    </label>
                    <select
                      className="my-input"
                      value={formData.skills[index].skillLevel}
                      onChange={(e) =>
                        dispatch(
                          updateArrayField({
                            arrayName: "skills",
                            field: "skillLevel",
                            value: e.target.value,
                            index: index,
                          })
                        )
                      }
                    >
                      <option value="level">Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                  <div className="flex flex-col basis-2/12">
                    <label className="font-bold text-offblack text-sm mb-2 -ml-2">
                      Remove
                    </label>
                    <button
                      className="remove-button"
                      onClick={() =>
                        dispatch(
                          deleteArrayItem({
                            arrayName: "skills",
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
              <button
                className="add-button mt-4"
                onClick={(e) => addSkillItem(e)}
              >
                Add Item
              </button>
            </div>

            <div className="flex flex-col basis-1/2 mt-6 lg:mt-0">
              <h2 className="font-bold text-xl text-offblack">Languages</h2>
              {formData.languages.map((langItem, index) => (
                <div
                  className="flex flex-row justify-around basis-1/2 mt-2 lg:mt-3 space-x-2 lg:space-x-4"
                  key={index}
                >
                  <div className="flex flex-col basis-1/2">
                    <label className="font-bold text-offblack text-sm mb-2 ml-1">
                      Language Name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="my-input"
                      value={formData.languages[index].langName}
                      onChange={(e) =>
                        dispatch(
                          updateArrayField({
                            arrayName: "languages",
                            field: "langName",
                            value: e.target.value,
                            index: index,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col basis-4/12">
                    <label className="font-bold text-offblack text-sm mb-2 ml-1">
                      Level
                    </label>
                    <select
                      className="my-input"
                      value={formData.languages[index].langLevel}
                      onChange={(e) =>
                        dispatch(
                          updateArrayField({
                            arrayName: "languages",
                            field: "langLevel",
                            value: e.target.value,
                            index: index,
                          })
                        )
                      }
                    >
                      <option value="y">Level</option>
                      <option value="basic">Basic</option>
                      <option value="conversational">Conversational</option>
                      <option value="fluent">Fluent</option>
                      <option value="native">Native</option>
                    </select>
                  </div>
                  <div className="flex flex-col basis-2/12">
                    <label className="font-bold text-offblack text-sm mb-2 -ml-2">
                      Remove
                    </label>
                    <button
                      className="remove-button"
                      onClick={() =>
                        dispatch(
                          deleteArrayItem({
                            arrayName: "languages",
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
              <button
                className="add-button mt-4"
                onClick={(e) => addLangItem(e)}
              >
                Add Item
              </button>
            </div>
          </div>
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

export default SkillLangProject;

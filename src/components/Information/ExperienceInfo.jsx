import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/progressbarSlice";
import { updateArrayField, addArrayItem } from "../../redux/formSlice";

function ExperienceInfo() {
  const formData = useSelector((store) => store.form);
  const langs = useSelector((store) => store.language);

  const addExperienceItem = (e) => {
    e.preventDefault();
    dispatch(
      addArrayItem({
        arrayName: "experience",
        newItem: {
          companyName: "",
          companyJobTitle: "",
          jobStartDate: "",
          jobEndDate: "",
        },
      })
    );
  };
  console.log(formData);

  const dispatch = useDispatch();
  return (
    <div className="py-2 px-1 lg:px-6">
      {langs.lang === "tr" && (
        <form className="flex flex-col space-y-4">
          {formData.experience.map((experienceItem, index) => (
            <div className="flex flex-col space-y-4" key={index}>
              <div className="flex space-x-2 lg:space-x-8">
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Şirket Adı
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="my-input"
                    value={formData.experience[index].companyName}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "experience",
                          field: "companyName",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    İş Ünvanı
                  </label>
                  <input
                    type="text"
                    placeholder="Computer Engineering"
                    className="my-input"
                    value={formData.experience[index].companyJobTitle}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "experience",
                          field: "companyJobTitle",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex space-x-2 lg:space-x-8">
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Başlangıç Tarihi
                  </label>
                  <input
                    type="date"
                    placeholder="Computer Engineering"
                    className="my-input"
                    min="1970-01-01"
                    max="2024-12-31"
                    value={formData.experience[index].jobStartDate}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "experience",
                          field: "jobStartDate",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Bitiş Tarihi
                  </label>
                  <input
                    type="date"
                    placeholder="Computer Engineering"
                    className="my-input"
                    min="1970-01-01"
                    max="2029-12-31"
                    value={formData.experience[index].jobEndDate}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "experience",
                          field: "jobEndDate",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col basis-1/2">
                <label className="font-bold text-offblack text-sm mb-2 ml-1">
                  İş Tanımı ( Opsiyonel )
                </label>
                <textarea
                  maxLength={600}
                  placeholder="During a mandatory internship period of 1 months, I gained experience in the professional world by serving as an intern assistant under our supervisor."
                  className="my-input h-24"
                  value={formData.experience[index].jobDesc}
                  onChange={(e) =>
                    dispatch(
                      updateArrayField({
                        arrayName: "experience",
                        field: "jobDesc",
                        value: e.target.value,
                        index: index,
                      })
                    )
                  }
                />
              </div>
            </div>
          ))}
          <button className="add-button" onClick={(e) => addExperienceItem(e)}>
            Ekle
          </button>
          <div className="flex justify-between">
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
        </form>
      )}
      {langs.lang === "eng" && (
        <form className="flex flex-col space-y-4">
          {formData.experience.map((experienceItem, index) => (
            <div className="flex flex-col space-y-4" key={index}>
              <div className="flex space-x-2 lg:space-x-8">
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="my-input"
                    value={formData.experience[index].companyName}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "experience",
                          field: "companyName",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Computer Engineering"
                    className="my-input"
                    value={formData.experience[index].companyJobTitle}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "experience",
                          field: "companyJobTitle",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex space-x-2 lg:space-x-8">
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    placeholder="Computer Engineering"
                    className="my-input"
                    min="1970-01-01"
                    max="2024-12-31"
                    value={formData.experience[index].jobStartDate}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "experience",
                          field: "jobStartDate",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    placeholder="Computer Engineering"
                    className="my-input"
                    min="1970-01-01"
                    max="2029-12-31"
                    value={formData.experience[index].jobEndDate}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "experience",
                          field: "jobEndDate",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col basis-1/2">
                <label className="font-bold text-offblack text-sm mb-2 ml-1">
                  Job Description (Optional)
                </label>
                <textarea
                  maxLength={600}
                  placeholder="During a mandatory internship period of 1 months, I gained experience in the professional world by serving as an intern assistant under our supervisor."
                  className="my-input h-24"
                  value={formData.experience[index].jobDesc}
                  onChange={(e) =>
                    dispatch(
                      updateArrayField({
                        arrayName: "experience",
                        field: "jobDesc",
                        value: e.target.value,
                        index: index,
                      })
                    )
                  }
                />
              </div>
            </div>
          ))}
          <button className="add-button" onClick={(e) => addExperienceItem(e)}>
            Add Item
          </button>
          <div className="flex justify-between">
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
        </form>
      )}
    </div>
  );
}

export default ExperienceInfo;

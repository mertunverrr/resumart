import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/progressbarSlice";
import { updateArrayField, addArrayItem } from "../../redux/formSlice";

function ExperienceInfo() {
  const formData = useSelector((store) => store.form);

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
    <div className="py-2 px-6">
      <form className="flex flex-col space-y-4">
        {formData.experience.map((experienceItem, index) => (
          <div className="flex flex-col space-y-4" key={index}>
            <div className="flex space-x-10">
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
            <div className="flex space-x-10">
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
          </div>
        ))}
        <button className="add-button" onClick={(e) => addExperienceItem(e)}>
          Ekle
        </button>
        <div className="flex justify-between">
          <button className="back-button" onClick={() => dispatch(decrement())}>
            Geri
          </button>
          <button className="next-button" onClick={() => dispatch(increment())}>
            İleri
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExperienceInfo;

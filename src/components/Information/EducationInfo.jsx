import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/progressbarSlice";
import { addArrayItem, updateArrayField } from "../../redux/formSlice";

function EducationInfo() {
  const dispatch = useDispatch();
  const formData = useSelector((store) => store.form);
  const langs = useSelector((store) => store.language);

  const addEducationInfo = (e) => {
    e.preventDefault();
    dispatch(
      addArrayItem({
        arrayName: "educationInfo",
        newItem: {
          schoolName: "",
          bachelorName: "",
          bachelorStartDate: "",
          bachelorEndDate: "",
          gradutionGrade: "",
        },
      })
    );
  };
  return (
    <div className="py-2 px-6">
      {langs.lang === "tr" && (
        <form className="flex flex-col space-y-4">
          {formData.educationInfo.map((education, index) => (
            <div className="space-y-4 flex flex-col" key={index}>
              <div className="flex space-x-10">
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Okul Adı
                  </label>
                  <input
                    type="text"
                    placeholder="Ankara University"
                    className="my-input"
                    value={formData.educationInfo[index].schoolName}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "educationInfo",
                          field: "schoolName",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Lisans
                  </label>
                  <input
                    type="text"
                    placeholder="Computer Engineering"
                    className="my-input"
                    value={formData.educationInfo[index].bachelorName}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "educationInfo",
                          field: "bachelorName",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex space-x-10">
                <div className="flex flex-col basis-1/3">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Başlangıç Tarihi
                  </label>
                  <input
                    type="number"
                    placeholder="2019"
                    className="my-input"
                    min="1970"
                    max="2024"
                    value={formData.educationInfo[index].bachelorStartDate}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "educationInfo",
                          field: "bachelorStartDate",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/3">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Bitiş Tarihi
                  </label>
                  <input
                    type="number"
                    placeholder="2023"
                    className="my-input"
                    min="1970"
                    max="2029"
                    value={formData.educationInfo[index].bachelorEndDate}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "educationInfo",
                          field: "bachelorEndDate",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/3">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Mezuniyet Notu
                  </label>
                  <input
                    type="text"
                    placeholder="3.24 / 4.00"
                    className="my-input"
                    value={formData.educationInfo[index].gradutionGrade}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "educationInfo",
                          field: "gradutionGrade",
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

          <button className="add-button" onClick={(e) => addEducationInfo(e)}>
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
          {formData.educationInfo.map((education, index) => (
            <div className="space-y-4 flex flex-col" key={index}>
              <div className="flex space-x-10">
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    School Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ankara University"
                    className="my-input"
                    value={formData.educationInfo[index].schoolName}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "educationInfo",
                          field: "schoolName",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Bachelor
                  </label>
                  <input
                    type="text"
                    placeholder="Computer Engineering"
                    className="my-input"
                    value={formData.educationInfo[index].bachelorName}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "educationInfo",
                          field: "bachelorName",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex space-x-10">
                <div className="flex flex-col basis-1/3">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Start Date
                  </label>
                  <input
                    type="number"
                    placeholder="2019"
                    className="my-input"
                    min="1970"
                    max="2024"
                    value={formData.educationInfo[index].bachelorStartDate}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "educationInfo",
                          field: "bachelorStartDate",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/3">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    End Date
                  </label>
                  <input
                    type="number"
                    placeholder="2023"
                    className="my-input"
                    min="1970"
                    max="2029"
                    value={formData.educationInfo[index].bachelorEndDate}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "educationInfo",
                          field: "bachelorEndDate",
                          value: e.target.value,
                          index: index,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/3">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Graduation Grade
                  </label>
                  <input
                    type="text"
                    placeholder="3.24 / 4.00"
                    className="my-input"
                    value={formData.educationInfo[index].gradutionGrade}
                    onChange={(e) =>
                      dispatch(
                        updateArrayField({
                          arrayName: "educationInfo",
                          field: "gradutionGrade",
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

          <button className="add-button" onClick={(e) => addEducationInfo(e)}>
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

export default EducationInfo;

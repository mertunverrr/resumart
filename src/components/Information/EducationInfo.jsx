import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/progressbarSlice";
import { updateField } from "../../redux/formSlice";

function EducationInfo() {
  const dispatch = useDispatch();
  const formData = useSelector((store) => store.form);

  return (
    <div className="py-2 px-6">
      <form className="flex flex-col space-y-4">
        <div className="flex space-x-10">
          <div className="flex flex-col basis-1/2">
            <label className="font-bold text-offblack text-sm mb-2 ml-1">
              Okul Adı
            </label>
            <input
              type="text"
              placeholder="Ankara University"
              className="my-input"
              value={formData.schoolname}
              onChange={(e) =>
                dispatch(
                  updateField({ field: "schoolName", value: e.target.value })
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
              value={formData.bachelorName}
              onChange={(e) =>
                dispatch(
                  updateField({ field: "bachelorName", value: e.target.value })
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
              value={formData.bachelorStartDate}
              onChange={(e) =>
                dispatch(
                  updateField({
                    field: "bachelorStartDate",
                    value: e.target.value,
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
              value={formData.bachelorEndDate}
              onChange={(e) =>
                dispatch(
                  updateField({
                    field: "bachelorEndDate",
                    value: e.target.value,
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
              value={formData.gradutionGrade}
              onChange={(e) =>
                dispatch(
                  updateField({
                    field: "gradutionGrade",
                    value: e.target.value,
                  })
                )
              }
            />
          </div>
        </div>
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

export default EducationInfo;

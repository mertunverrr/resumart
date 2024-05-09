import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/progressbarSlice";
import {
  addArrayItem,
  deleteArrayItem,
  updateArrayField,
} from "../../redux/formSlice";
import { BsTrash } from "react-icons/bs";

function Projects() {
  const formData = useSelector((store) => store.form);
  const dispatch = useDispatch();
  const addProject = (e) => {
    e.preventDefault();
    dispatch(
      addArrayItem({
        arrayName: "projects",
        newItem: {
          projectName: "",
          projectDesc: "",
        },
      })
    );
  };

  return (
    <div className="py-2 px-2 lg:px-6 flex flex-col space-y-4">
      {formData.projects.map((project, index) => (
        <div className="flex flex-row space-x-2 lg:space-x-8" key={index}>
          <div className="flex flex-col basis-1/5">
            <label className="font-bold text-offblack text-sm mb-2 ml-1">
              Proje İsmi
            </label>
            <input
              type="text"
              className="my-input"
              value={formData.projects[index].projectName}
              onChange={(e) =>
                dispatch(
                  updateArrayField({
                    arrayName: "projects",
                    field: "projectName",
                    value: e.target.value,
                    index: index,
                  })
                )
              }
            ></input>
          </div>
          <div className="flex flex-col basis-3/5">
            <label className="font-bold text-offblack text-sm mb-2 ml-1">
              Proje Tanıtımı
            </label>
            <input
              type="text"
              className="my-input"
              value={formData.projects[index].projectDesc}
              onChange={(e) =>
                dispatch(
                  updateArrayField({
                    arrayName: "projects",
                    field: "projectDesc",
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
            <button
              className="next-button"
              onClick={() =>
                dispatch(
                  deleteArrayItem({
                    arrayName: "projects",
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
      <button className="add-button" onClick={(e) => addProject(e)}>
        Ekle
      </button>
      <div className="flex flex-row justify-between">
        <button className="back-button" onClick={() => dispatch(decrement())}>
          Geri
        </button>
        <button className="next-button" onClick={() => dispatch(increment())}>
          İleri
        </button>
      </div>
    </div>
  );
}

export default Projects;

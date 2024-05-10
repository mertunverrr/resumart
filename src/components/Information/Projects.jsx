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
  const langs = useSelector((store) => store.language);
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
    <>
      {langs.lang === "tr" && (
        <div className="py-2 px-1 lg:px-6 flex flex-col space-y-4">
          {formData.projects.map((project, index) => (
            <div className="flex space-x-2 lg:space-x-8" key={index}>
              <div className="flex flex-col w-3/12">
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
              <div className="flex flex-col w-7/12">
                <label className="font-bold text-offblack text-sm mb-2 ml-1">
                  Proje Tanıtımı
                </label>
                <textarea
                  maxLength={600}
                  className="my-input h-9"
                  value={formData.projects[index].jprojectDesc}
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
              <div className="flex flex-col w-2/12">
                <label className="font-bold text-offblack text-sm mb-2 ml-1 text-center">
                  Sil
                </label>
                <button
                  className="remove-button"
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
        <div className="py-2 px-1 lg:px-6 flex flex-col space-y-4">
          {formData.projects.map((project, index) => (
            <div className="flex flex-row space-x-2 lg:space-x-8" key={index}>
              <div className="flex flex-col w-3/12">
                <label className="font-bold text-offblack text-sm mb-2 ml-1">
                  Project
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
              <div className="flex flex-col w-7/12">
                <label className="font-bold text-offblack text-sm mb-2 ml-1">
                  Project Information
                </label>
                <textarea
                  maxLength={600}
                  className="my-input h-9"
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
              <div className="flex flex-col w-2/12">
                <label className="font-bold text-offblack text-sm mb-2 ml-1 text-center">
                  Remove
                </label>
                <button
                  className="remove-button"
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

export default Projects;

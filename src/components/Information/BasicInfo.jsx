import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/progressbarSlice";
import { updateField } from "../../redux/formSlice";

function BasicInfo() {
  const dispatch = useDispatch();
  const formData = useSelector((store) => store.form);
  const langs = useSelector((store) => store.language);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const fileUrl = reader.result; // Dosyanın URL'si
      dispatch(updateField({ field: "cvPicture", value: fileUrl }));
    };
    reader.readAsDataURL(file);
  };
  console.log(formData);

  return (
    <>
      {langs.lang === "tr" && (
        <div className="py-2 px-1 lg:px-6">
          <form className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="flex flex-col basis-1/2 space-y-3 lg:space-y-4 lg:mt-4">
              <div className="flex flex-col">
                <label className="font-bold text-offblack text-sm mb-2 ml-1">
                  İsim - Soyisim
                </label>
                <input
                  type="text"
                  placeholder="Jack Spear"
                  className="my-input"
                  value={formData.fullName}
                  onChange={(e) =>
                    dispatch(
                      updateField({ field: "fullName", value: e.target.value })
                    )
                  }
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-offblack text-sm mb-2 ml-1">
                  Meslek Ünvanı
                </label>
                <input
                  type="text"
                  placeholder="Frontend Developer"
                  className="my-input"
                  value={formData.jobTitle}
                  onChange={(e) =>
                    dispatch(
                      updateField({ field: "jobTitle", value: e.target.value })
                    )
                  }
                />
              </div>
              <div className="flex flex-row space-x-2 lg:space-x-6">
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="jackspear@resumart.com"
                    className="my-input"
                    value={formData.email}
                    onChange={(e) =>
                      dispatch(
                        updateField({ field: "email", value: e.target.value })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Şehir
                  </label>
                  <input
                    type="text"
                    placeholder="İstanbul"
                    className="my-input"
                    value={formData.city}
                    onChange={(e) =>
                      dispatch(
                        updateField({ field: "city", value: e.target.value })
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <div className="basis-1/2 flex-row mt-6 lg:mt-0 lg:flex-col lg:space-y-4">
              <div className="flex flex-col basis-1/2 lg:basis-2/3 justify-center items-center relative lg:-mb-4">
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  className="w-24 h-24 bg-mypurple rounded-full cursor-pointer py-9 px-0.5 "
                  onChange={(e) => handleFileUpload(e.target.files[0])}
                />
              </div>
              <div className="flex flex-col justify-center lg:justify-normal basis-1/2 lg:basis-1/3">
                <label className="font-bold text-offblack text-sm mb-2 ml-1">
                  Telefon
                </label>
                <input
                  type="text"
                  placeholder="123 321 45 54"
                  className="my-input"
                  value={formData.tel}
                  onChange={(e) =>
                    dispatch(
                      updateField({ field: "tel", value: e.target.value })
                    )
                  }
                />
              </div>
              <div className="flex flex-row space-x-2 lg:space-x-6 mt-4 lg:mt-0">
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Doğum Yılı
                  </label>
                  <input
                    type="text"
                    placeholder="2001"
                    className="my-input"
                    value={formData.birthyear}
                    onChange={(e) =>
                      dispatch(
                        updateField({
                          field: "birthyear",
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Ehliyet
                  </label>
                  <input
                    type="text"
                    placeholder="B"
                    className="my-input"
                    value={formData.drivingLicense}
                    onChange={(e) =>
                      dispatch(
                        updateField({
                          field: "drivingLicense",
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="flex flex-col mt-4">
            <label className="font-bold text-offblack text-sm mb-2 ml-1">
              Hakkımda
            </label>
            <input
              type="text"
              placeholder="I'm Mert Ünver. I graduated from university in 2023. Throughout university, I had the opportunity to develop myself by participating in various training programs. Currently, I am actively looking for full-time employment."
              className="my-input"
              onChange={(e) =>
                dispatch(
                  updateField({
                    field: "aboutMe",
                    value: e.target.value,
                  })
                )
              }
            />
          </div>

          <div className="flex justify-end mt-4">
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
        <div className="py-2 px-1 lg:px-6">
          <form className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="flex flex-col basis-1/2 space-y-3 lg:space-y-4 lg:mt-4">
              <div className="flex flex-col">
                <label className="font-bold text-offblack text-sm mb-2 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jack Spear"
                  className="my-input"
                  value={formData.fullName}
                  onChange={(e) =>
                    dispatch(
                      updateField({ field: "fullName", value: e.target.value })
                    )
                  }
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-offblack text-sm mb-2 ml-1">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="Frontend Developer"
                  className="my-input"
                  value={formData.jobTitle}
                  onChange={(e) =>
                    dispatch(
                      updateField({ field: "jobTitle", value: e.target.value })
                    )
                  }
                />
              </div>
              <div className="flex flex-row space-x-6">
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="jackspear@resumart.com"
                    className="my-input"
                    value={formData.email}
                    onChange={(e) =>
                      dispatch(
                        updateField({ field: "email", value: e.target.value })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="İstanbul"
                    className="my-input"
                    value={formData.city}
                    onChange={(e) =>
                      dispatch(
                        updateField({ field: "city", value: e.target.value })
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <div className="basis-1/2 flex-row mt-6 lg:mt-0 lg:flex-col lg:space-y-4">
              <div className="flex flex-col basis-1/2 lg:basis-2/3 justify-center items-center relative lg:-mb-4">
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  className="w-24 h-24 bg-mypurple rounded-full cursor-pointer py-9 px-0.5 "
                  onChange={(e) => handleFileUpload(e.target.files[0])}
                />
              </div>
              <div className="flex flex-col justify-center lg:justify-normal basis-1/2 lg:basis-1/3">
                <label className="font-bold text-offblack text-sm mb-2 ml-1">
                  Mobile Phone
                </label>
                <input
                  type="text"
                  placeholder="123 321 45 54"
                  className="my-input"
                  value={formData.tel}
                  onChange={(e) =>
                    dispatch(
                      updateField({ field: "tel", value: e.target.value })
                    )
                  }
                />
              </div>
              <div className="flex flex-row space-x-2 lg:space-x-6 mt-4 lg:mt-0">
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Birth Year
                  </label>
                  <input
                    type="text"
                    placeholder="2001"
                    className="my-input"
                    value={formData.birthyear}
                    onChange={(e) =>
                      dispatch(
                        updateField({
                          field: "birthyear",
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col basis-1/2">
                  <label className="font-bold text-offblack text-sm mb-2 ml-1">
                    Driver's License
                  </label>
                  <input
                    type="text"
                    placeholder="B"
                    className="my-input"
                    value={formData.drivingLicense}
                    onChange={(e) =>
                      dispatch(
                        updateField({
                          field: "drivingLicense",
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="flex flex-col mt-4">
            <label className="font-bold text-offblack text-sm mb-2 ml-1">
              About Me
            </label>
            <input
              type="text"
              placeholder="I'm Mert Ünver. I graduated from university in 2023. Throughout university, I had the opportunity to develop myself by participating in various training programs. Currently, I am actively looking for full-time employment."
              className="my-input"
              onChange={(e) =>
                dispatch(
                  updateField({
                    field: "aboutMe",
                    value: e.target.value,
                  })
                )
              }
            />
          </div>

          <div className="flex justify-end mt-4">
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

export default BasicInfo;

import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../../redux/progressbarSlice";
import { CgProfile } from "react-icons/cg";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { IoIosOptions, IoIosCodeWorking } from "react-icons/io";
import { useReactToPrint } from "react-to-print";

function DownloadCv() {
  const formData = useSelector((store) => store.form);
  const langs = useSelector((store) => store.language);
  const dispatch = useDispatch();
  const contentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });

  return (
    <>
      {langs.lang === "tr" && (
        <div className="text-offblack">
          <div className="py-2 px-6 flex justify-center">
            <button
              className="w-1/3 bg-mypurple text-white font-medium tracking-wide text-lg p-1 rounded-xl hover:brightness-110 hover:text-orange-400"
              onClick={handlePrint}
            >
              İndir
            </button>
          </div>
          <div
            ref={contentRef}
            className="py-2 px-6 container font-montserrat text-offblack flex"
          >
            <div className="flex flex-col w-1/3 bg-neutral-700 rounded-sm space-y-8 h-1096">
              {formData.cvPicture === "" ? (
                ""
              ) : (
                <div className="items-center flex justify-center">
                  <img
                    src={formData.cvPicture}
                    alt={formData.cvPicture.name}
                    className="w-40 h-40 rounded-full object-cover mt-10 mb-3 flex"
                  />
                </div>
              )}
              <div className="flex flex-col text-bgInput ml-8">
                <h2 className=" mb-2 font-semibold">Kişisel</h2>
                <h4 className="text-xs font-medium">
                  İsim:
                  <span className="ml-1 font-light capitalize">
                    {formData.fullName}
                  </span>
                </h4>
                <h4 className="text-xs font-medium">
                  Doğum Yılı:
                  <span className="ml-1 font-light">{formData.birthyear}</span>
                </h4>
                {formData.drivingLicense === "" ? (
                  ""
                ) : (
                  <h4 className="text-xs font-medium">
                    Ehliyet:
                    <span className="ml-1 font-light capitalize">
                      {formData.drivingLicense}
                    </span>
                  </h4>
                )}
              </div>
              <div className="flex flex-col text-bgInput ml-8">
                <h2 className=" mb-2 font-semibold">İletişim</h2>
                <h4 className="text-xs font-medium">
                  Telefon:
                  <span className="ml-1 font-light">{formData.tel}</span>
                </h4>
                <h4 className="text-xs font-medium">
                  Mail:
                  <span className="ml-1 font-light break-all">
                    {formData.email}
                  </span>
                </h4>
                <h4 className="text-xs font-medium">
                  Şehir:
                  <span className="ml-1 font-light capitalize">
                    {formData.city}
                  </span>
                </h4>
              </div>
              {formData.languages[0].langName === "" ? (
                ""
              ) : (
                <div className="flex flex-col text-bgInput ml-8">
                  <h2 className=" mb-2 font-semibold">Diller</h2>
                  {formData.languages.map((lang, index) => (
                    <h4 className="text-xs font-medium capitalize" key={index}>
                      {formData.languages[index].langName}
                      {formData.languages[index].langName ? ":" : ""}
                      <span className="ml-1 font-light capitalize">
                        {formData.languages[index].langLevel}
                      </span>
                    </h4>
                  ))}
                </div>
              )}
              {formData.languages[0].langName === "" ? (
                ""
              ) : (
                <div className="flex flex-col text-bgInput ml-8 ">
                  <h2 className=" mb-2 font-semibold">Sosyal Medya</h2>
                  {formData.socialLinks.map((link, index) => (
                    <div key={index} className="flex flex-col">
                      <h4 className="text-xs font-medium capitalize flex flex-col">
                        {formData.socialLinks[index].socialMedia}
                      </h4>
                      <span className="font-light normal-case text-xs flex break-all mb-1.5 mr-8 mt-0.5">
                        {formData.socialLinks[index].link}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col w-2/3 bg-white px-10 py-10 space-y-3">
              <div>
                <div className="flex flex-col relative">
                  <h1 className="text-4xl font-bold text-offblack capitalize">
                    {formData.fullName}
                  </h1>
                  <h2 className="text-lg text-offblack capitalize mt-1">
                    {formData.jobTitle}
                  </h2>
                  <hr className="mt-2 border-offblack" />
                  <hr className="absolute border-4 w-28 border-offblack right-0 -bottom-1 rounded-sm" />
                </div>
              </div>
              {formData.aboutMe === "" ? (
                ""
              ) : (
                <div className="flex flex-col space-y-1 ">
                  <div className="flex items-center">
                    <CgProfile className="text-5xl" />
                    <h3 className="ml-4 font-semibold">Hakkımda</h3>
                    <hr className="w-full border-offblack ml-4" />
                    <hr className="w-20 border-offblack border-2" />
                  </div>
                  <p className="text-xs">{formData.aboutMe}</p>
                </div>
              )}
              {formData.educationInfo[0].schoolName === "" ? (
                ""
              ) : (
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center">
                    <FaGraduationCap className="text-5xl" />
                    <h3 className="ml-4 font-semibold">Eğitim</h3>
                    <hr className="w-full border-offblack ml-4" />
                    <hr className="w-20 border-offblack border-2" />
                  </div>
                  <div className="space-y-3">
                    {formData.educationInfo.map((education, index) => (
                      <div className="flex flex-col " key={index}>
                        <div className="flex flex-col">
                          <h3 className="capitalize text-sm font-medium ">
                            {formData.educationInfo[index].schoolName} /{" "}
                            {formData.educationInfo[index].bachelorName}
                          </h3>
                          <h4 className="capitalize text-xs font-normal">
                            {formData.educationInfo[index].bachelorStartDate} -{" "}
                            {formData.educationInfo[index].bachelorEndDate}
                          </h4>
                        </div>
                        <div>
                          <h4 className="capitalize text-xs font-medium">
                            Mezuniyet notu :{" "}
                            <span className="font-normal">
                              {formData.educationInfo[index].gradutionGrade}
                            </span>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {formData.experience[0].companyName === "" ? (
                ""
              ) : (
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center">
                    <FaBriefcase className="text-4xl" />
                    <h3 className="ml-4 font-semibold">Deneyim</h3>
                    <hr className="w-full border-offblack ml-4" />
                    <hr className="w-20 border-offblack border-2" />
                  </div>

                  {formData.experience.map((exp, index) => (
                    <div className="flex flex-col" key={index}>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <h3 className="capitalize text-sm font-medium ">
                            {formData.experience[index].companyName}
                          </h3>
                          <h4 className="capitalize text-xs font-medium">
                            {formData.experience[index].companyJobTitle}
                          </h4>
                        </div>
                        <h5 className="capitalize text-xs font-normal flex items-center ">
                          {formData.experience[index].jobStartDate && (
                            <div>
                              {formData.experience[index].jobStartDate} /{" "}
                              {formData.experience[index].jobEndDate}
                            </div>
                          )}
                        </h5>
                      </div>
                      {formData.experience[index].jobDesc && (
                        <p className="text-xs mt-2">
                          {formData.experience[index].jobDesc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {formData.projects[0].projectName === "" ? (
                ""
              ) : (
                <div className="flex flex-col space-y-1 text-offblack">
                  <div className="flex items-center">
                    <IoIosCodeWorking className="text-4xl" />
                    <h3 className="ml-4 font-semibold">Projeler</h3>
                    <hr className="w-full border-offblack ml-4" />
                    <hr className="w-20 border-offblack border-2" />
                  </div>
                  {formData.projects.map((project, index) => (
                    <div className="flex flex-col" key={index}>
                      <h3 className="text-sm font-medium">
                        {formData.projects[index].projectName}
                      </h3>
                      <p className="text-xs font-normal">
                        {formData.projects[index].projectDesc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {formData.skills[0].skillName === "" ? (
                ""
              ) : (
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <IoIosOptions className="text-4xl" />
                    <h3 className="ml-4 font-semibold">Yetenekler</h3>
                    <hr className="w-full border-offblack ml-4" />
                    <hr className="w-20 border-offblack border-2" />
                  </div>
                  <ul className="grid grid-cols-2 grid-flow-row gap-4">
                    {formData.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex justify-between relative"
                      >
                        <li className="list-disc text-xs">
                          {formData.skills[index].skillName}
                        </li>
                        <hr className="border-gray-300 border-2 w-24 mt-1.5 mr-3 rounded-lg " />
                        <hr
                          className={
                            "border-mypurple border-2 max-w-24 absolute left-22 top-1.5  rounded-lg" +
                            (formData.skills[index].skillLevel === "beginner"
                              ? " w-6"
                              : formData.skills[index].skillLevel ===
                                "intermediate"
                              ? " w-12"
                              : formData.skills[index].skillLevel === "advanced"
                              ? " w-18"
                              : formData.skills[index].skillLevel === "expert"
                              ? " w-24"
                              : "")
                          }
                        />
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <button
            className="bg-white text-mypurple font-medium tracking-wide text-lg p-1 rounded-xl w-1/3 my-4 mx-4 border-2 border-mypurple hover:brightness-110"
            onClick={() => dispatch(decrement())}
          >
            Geri
          </button>
        </div>
      )}
      {langs.lang === "eng" && (
        <div className="text-offblack">
          <div className="py-2 px-6 flex justify-center">
            <button
              className="w-1/3 bg-mypurple text-white font-medium tracking-wide text-lg p-1 rounded-xl hover:brightness-110 hover:text-orange-400"
              onClick={handlePrint}
            >
              Download
            </button>
          </div>
          <div
            ref={contentRef}
            className="py-2 px-6 container font-montserrat text-offblack flex"
          >
            <div className="flex flex-col w-1/3 bg-neutral-700 rounded-sm space-y-8 h-1096">
              {formData.cvPicture === "" ? (
                ""
              ) : (
                <div className="items-center flex justify-center">
                  <img
                    src={formData.cvPicture}
                    alt={formData.cvPicture.name}
                    className="w-40 h-40 rounded-full object-cover mt-10 mb-3 flex"
                  />
                </div>
              )}
              <div className="flex flex-col text-bgInput ml-8">
                <h2 className=" mb-2 font-semibold">Personal Information</h2>
                <h4 className="text-xs font-medium">
                  Full Name:
                  <span className="ml-1 font-light capitalize">
                    {formData.fullName}
                  </span>
                </h4>
                <h4 className="text-xs font-medium">
                  Birth Year:
                  <span className="ml-1 font-light">{formData.birthyear}</span>
                </h4>
                {formData.drivingLicense === "" ? (
                  ""
                ) : (
                  <h4 className="text-xs font-medium">
                    Driver's License:
                    <span className="ml-1 font-light capitalize">
                      {formData.drivingLicense}
                    </span>
                  </h4>
                )}
              </div>
              <div className="flex flex-col text-bgInput ml-8">
                <h2 className=" mb-2 font-semibold">Contact</h2>
                <h4 className="text-xs font-medium">
                  Phone:
                  <span className="ml-1 font-light">{formData.tel}</span>
                </h4>
                <h4 className="text-xs font-medium">
                  Mail:
                  <span className="ml-1 font-light break-all">
                    {formData.email}
                  </span>
                </h4>
                <h4 className="text-xs font-medium">
                  City:
                  <span className="ml-1 font-light capitalize">
                    {formData.city}
                  </span>
                </h4>
              </div>
              {formData.languages[0].langName === "" ? (
                ""
              ) : (
                <div className="flex flex-col text-bgInput ml-8">
                  <h2 className=" mb-2 font-semibold">Languages</h2>
                  {formData.languages.map((lang, index) => (
                    <h4 className="text-xs font-medium capitalize" key={index}>
                      {formData.languages[index].langName}
                      {formData.languages[index].langName ? ":" : ""}
                      <span className="ml-1 font-light capitalize">
                        {formData.languages[index].langLevel}
                      </span>
                    </h4>
                  ))}
                </div>
              )}
              {formData.socialLinks[0].socialMedia === "" ? (
                ""
              ) : (
                <div className="flex flex-col text-bgInput ml-8">
                  <h2 className=" mb-2 font-semibold">Social Media</h2>
                  {formData.socialLinks.map((link, index) => (
                    <div key={index} className="flex flex-col">
                      <h4 className="text-xs font-medium capitalize flex flex-col">
                        {formData.socialLinks[index].socialMedia}
                      </h4>
                      <span className="font-light normal-case text-xs flex break-all mb-1.5 mr-8 mt-0.5">
                        {formData.socialLinks[index].link}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col w-2/3 bg-white px-10 py-10 space-y-3">
              <div>
                <div className="flex flex-col relative">
                  <h1 className="text-4xl font-bold text-offblack capitalize">
                    {formData.fullName}
                  </h1>
                  <h2 className="text-lg text-offblack capitalize mt-1">
                    {formData.jobTitle}
                  </h2>
                  <hr className="mt-2 border-offblack" />
                  <hr className="absolute border-4 w-28 border-offblack right-0 -bottom-1 rounded-sm" />
                </div>
              </div>
              {formData.aboutMe === "" ? (
                ""
              ) : (
                <div className="flex flex-col space-y-1 ">
                  <div className="flex items-center">
                    <CgProfile className="text-5xl" />
                    <h3 className="ml-4 font-semibold">About Me</h3>
                    <hr className="w-full border-offblack ml-4" />
                    <hr className="w-20 border-offblack border-2" />
                  </div>
                  <p className="text-xs">{formData.aboutMe}</p>
                </div>
              )}
              {formData.educationInfo[0].schoolName === "" ? (
                ""
              ) : (
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center">
                    <FaGraduationCap className="text-5xl" />
                    <h3 className="ml-4 font-semibold">Education</h3>
                    <hr className="w-full border-offblack ml-4" />
                    <hr className="w-20 border-offblack border-2" />
                  </div>
                  <div className="space-y-3">
                    {formData.educationInfo.map((education, index) => (
                      <div className="flex flex-col " key={index}>
                        <div className="flex flex-col">
                          <h3 className="capitalize text-sm font-medium ">
                            {formData.educationInfo[index].schoolName} /{" "}
                            {formData.educationInfo[index].bachelorName}
                          </h3>
                          <h4 className="capitalize text-xs font-normal">
                            {formData.educationInfo[index].bachelorStartDate} -{" "}
                            {formData.educationInfo[index].bachelorEndDate}
                          </h4>
                        </div>
                        <div>
                          <h4 className="capitalize text-xs font-medium">
                            Gradution grade :{" "}
                            <span className="font-normal">
                              {formData.educationInfo[index].gradutionGrade}
                            </span>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {formData.experience[0].companyName === "" ? (
                ""
              ) : (
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center">
                    <FaBriefcase className="text-4xl" />
                    <h3 className="ml-4 font-semibold">Experience</h3>
                    <hr className="w-full border-offblack ml-4" />
                    <hr className="w-20 border-offblack border-2" />
                  </div>

                  {formData.experience.map((exp, index) => (
                    <div className="flex flex-col" key={index}>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <h3 className="capitalize text-sm font-medium ">
                            {formData.experience[index].companyName}
                          </h3>
                          <h4 className="capitalize text-xs font-medium">
                            {formData.experience[index].companyJobTitle}
                          </h4>
                        </div>
                        <h5 className="capitalize text-xs font-normal flex items-center ">
                          {formData.experience[index].jobStartDate && (
                            <div>
                              {formData.experience[index].jobStartDate} /{" "}
                              {formData.experience[index].jobEndDate}
                            </div>
                          )}
                        </h5>
                      </div>
                      {formData.experience[index].jobDesc && (
                        <p className="text-xs mt-2">
                          {formData.experience[index].jobDesc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {formData.projects[0].projectName === "" ? (
                ""
              ) : (
                <div className="flex flex-col space-y-1 text-offblack">
                  <div className="flex items-center">
                    <IoIosCodeWorking className="text-4xl" />
                    <h3 className="ml-4 font-semibold">Projects</h3>
                    <hr className="w-full border-offblack ml-4" />
                    <hr className="w-20 border-offblack border-2" />
                  </div>
                  {formData.projects.map((project, index) => (
                    <div className="flex flex-col" key={index}>
                      <h3 className="text-sm font-medium">
                        {formData.projects[index].projectName}
                      </h3>
                      <p className="text-xs font-normal">
                        {formData.projects[index].projectDesc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {formData.skills[0].skillName === "" ? (
                ""
              ) : (
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <IoIosOptions className="text-4xl" />
                    <h3 className="ml-4 font-semibold">Skills</h3>
                    <hr className="w-full border-offblack ml-4" />
                    <hr className="w-20 border-offblack border-2" />
                  </div>
                  <ul className="grid grid-cols-2 grid-flow-row gap-4">
                    {formData.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex justify-between relative"
                      >
                        <li className="list-disc text-xs">
                          {formData.skills[index].skillName}
                        </li>
                        <hr className="border-gray-300 border-2 w-24 mt-1.5 mr-4 rounded-lg " />
                        <hr
                          className={
                            "border-mypurple border-2 max-w-24 absolute left-20 top-1.5  rounded-lg" +
                            (formData.skills[index].skillLevel === "beginner"
                              ? " w-6"
                              : formData.skills[index].skillLevel ===
                                "intermediate"
                              ? " w-12"
                              : formData.skills[index].skillLevel === "advanced"
                              ? " w-18"
                              : formData.skills[index].skillLevel === "expert"
                              ? " w-24"
                              : "")
                          }
                        />
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <button
            className="bg-white text-base text-mypurple font-semibold tracking-wide p-1 rounded-xl w-1/4 my-4 mx-4 border-2 border-mypurple hover:brightness-110"
            onClick={() => dispatch(decrement())}
          >
            Back
          </button>
        </div>
      )}
    </>
  );
}

export default DownloadCv;

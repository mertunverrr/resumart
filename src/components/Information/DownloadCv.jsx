import React from "react";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { IoIosOptions } from "react-icons/io";

function DownloadCv() {
  const formData = useSelector((store) => store.form);
  console.log(formData.cvPicture);
  return (
    <div className="py-2 px-6 flex container font-montserrat text-offblack">
      <div className="flex flex-col basis-1/3 bg-neutral-700 rounded-sm space-y-6 pb-8">
        <div className="w-full items-center flex justify-center">
          <img
            src={formData.cvPicture}
            alt={formData.cvPicture.name}
            className="w-40 h-40 rounded-full object-cover mt-8 flex"
          />
        </div>
        <div className="flex flex-col text-bgInput ml-12">
          <h2 className=" mb-2 font-semibold">Kişisel</h2>
          <h4 className="text-sm font-medium">
            İsim:
            <span className="ml-1 font-light capitalize">
              {formData.fullName}
            </span>
          </h4>
          <h4 className="text-sm font-medium">
            Doğum Yılı:
            <span className="ml-1 font-light">{formData.birthyear}</span>
          </h4>
          <h4 className="text-sm font-medium">
            Ehliyet:
            <span className="ml-1 font-light capitalize">
              {formData.drivingLicense}
            </span>
          </h4>
        </div>
        <div className="flex flex-col text-bgInput ml-12">
          <h2 className=" mb-2 font-semibold">İletişim</h2>
          <h4 className="text-sm font-medium">
            Telefon:
            <span className="ml-1 font-light">{formData.tel}</span>
          </h4>
          <h4 className="text-sm font-medium">
            Mail:
            <span className="ml-1 font-light">{formData.email}</span>
          </h4>
          <h4 className="text-sm font-medium">
            Şehir:
            <span className="ml-1 font-light capitalize">{formData.city}</span>
          </h4>
        </div>
        <div className="flex flex-col text-bgInput ml-12">
          <h2 className=" mb-2 font-semibold">Diller</h2>
          {formData.languages.map((lang, index) => (
            <h4 className="text-sm font-medium capitalize" key={index}>
              {formData.languages[index].langName}:
              <span className="ml-1 font-light capitalize">
                {formData.languages[index].langLevel}
              </span>
            </h4>
          ))}
        </div>
        <div className="flex flex-col text-bgInput ml-12">
          <h2 className=" mb-2 font-semibold">Sosyal Medya</h2>
          {formData.socialLinks.map((link, index) => (
            <h4 className="text-sm font-medium capitalize" key={index}>
              {formData.socialLinks[index].socialMedia}:
              <span className="ml-1 font-light normal-case">
                {formData.socialLinks[index].link}
              </span>
            </h4>
          ))}
        </div>
      </div>
      <div className="flex flex-col basis-2/3 bg-white px-12 py-20 space-y-6">
        <div>
          <div className="flex flex-col relative">
            <h1 className="text-5xl font-bold text-offblack capitalize">
              {formData.fullName}
            </h1>
            <hr className="mt-4 border-offblack" />
            <hr className="absolute border-4 w-28 border-offblack right-0 -bottom-1 rounded-sm" />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <CgProfile className="text-6xl" />
            <h3 className="ml-4 font-semibold">Hakkımda</h3>
            <hr className="w-full border-offblack ml-4" />
            <hr className="w-20 border-offblack border-2" />
          </div>
          <p className="text-sm">{formData.aboutMe}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <FaGraduationCap className="text-6xl" />
            <h3 className="ml-4 font-semibold">Eğitim</h3>
            <hr className="w-full border-offblack ml-4" />
            <hr className="w-20 border-offblack border-2" />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="capitalize text-base font-medium ">
                {formData.schoolName}
              </h3>
              <h4 className="capitalize text-sm font-normal text-center">
                {formData.bachelorStartDate} - {formData.bachelorEndDate}
              </h4>
            </div>
            <div>
              <h3 className="capitalize text-base font-medium ">
                {formData.bachelorName}
              </h3>
              <h4 className="capitalize text-sm font-normal text-center">
                {formData.gradutionGrade}
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <FaBriefcase className="text-5xl" />
            <h3 className="ml-4 font-semibold">Deneyim</h3>
            <hr className="w-full border-offblack ml-4" />
            <hr className="w-20 border-offblack border-2" />
          </div>

          {formData.experience.map((exp, index) => (
            <div className="flex flex-col" key={index}>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h3 className="capitalize text-base font-medium ">
                    {formData.experience[index].companyName}
                  </h3>
                  <h4 className="capitalize text-sm font-medium">
                    {formData.experience[index].companyJobTitle}
                  </h4>
                </div>
                <h5 className="capitalize text-sm font-normal flex items-center ">
                  {formData.experience[index].jobStartDate} /{" "}
                  {formData.experience[index].jobEndDate}
                  {!formData.experience[index].jobEndDate && "∞"}
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
      </div>
    </div>
  );
}

export default DownloadCv;

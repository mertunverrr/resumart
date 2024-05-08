import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../../redux/progressbarSlice";
import { CgProfile } from "react-icons/cg";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { IoIosOptions, IoIosCodeWorking } from "react-icons/io";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function DownloadCv() {
  const formData = useSelector((store) => store.form);
  const dispatch = useDispatch();
  const contentRef = useRef(null);

  const handleDownload = () => {
    const content = contentRef.current;

    if (content) {
      html2canvas(content, { scale: 2 }).then((canvas) => {
        // Adjust scale factor here
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4"); // Specify document format and orientation
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("CV.pdf");
      });
    }
  };

  return (
    <div className="text-offblack">
      <div className="py-2 px-6 flex justify-center">
        <button
          className="w-1/3 bg-mypurple text-white font-medium tracking-wide text-lg p-1 rounded-xl hover:brightness-110 hover:text-orange-400"
          onClick={handleDownload}
        >
          İndir
        </button>
      </div>
      <div
        ref={contentRef}
        className="py-2 px-6 flex container font-montserrat text-offblack"
      >
        <div className="flex flex-col w-1/3 bg-neutral-700 rounded-sm space-y-10">
          <div className="items-center flex justify-center">
            <img
              src={formData.cvPicture}
              alt={formData.cvPicture.name}
              className="w-40 h-40 rounded-full object-cover mt-14 mb-3 flex"
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
              <span className="ml-1 font-light break-all">
                {formData.email}
              </span>
            </h4>
            <h4 className="text-sm font-medium">
              Şehir:
              <span className="ml-1 font-light capitalize">
                {formData.city}
              </span>
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
          <div className="flex flex-col text-bgInput pl-12 ">
            <h2 className=" mb-2 font-semibold">Sosyal Medya</h2>
            {formData.socialLinks.map((link, index) => (
              <div key={index} className="flex-col">
                <h4 className="text-sm font-medium capitalize flex ">
                  {formData.socialLinks[index].socialMedia}:
                </h4>
                <span className="ml-1 font-light normal-case text-sm flex break-all mb-1">
                  {formData.socialLinks[index].link}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-2/3 bg-white px-12 py-16 space-y-8 pb-160">
          <div>
            <div className="flex flex-col relative">
              <h1 className="text-5xl font-bold text-offblack capitalize">
                {formData.fullName}
              </h1>
              <h2 className="text-xl text-offblack capitalize my-1.5">
                {formData.jobTitle}
              </h2>
              <hr className="mt-4 border-offblack" />
              <hr className="absolute border-4 w-28 border-offblack right-0 -bottom-1 rounded-sm" />
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
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
            <div className="space-y-4">
              {formData.educationInfo.map((education, index) => (
                <div className="flex justify-between" key={index}>
                  <div className="flex flex-col">
                    <h3 className="capitalize text-base font-medium ">
                      {formData.educationInfo[index].schoolName}
                    </h3>
                    <h4 className="capitalize text-sm font-normal text-center">
                      {formData.educationInfo[index].bachelorStartDate} -{" "}
                      {formData.educationInfo[index].bachelorEndDate}
                    </h4>
                  </div>
                  <div>
                    <h3 className="capitalize text-base font-medium ">
                      {formData.educationInfo[index].bachelorName}
                    </h3>
                    <h4 className="capitalize text-sm font-normal text-center">
                      {formData.educationInfo[index].gradutionGrade}
                    </h4>
                  </div>
                </div>
              ))}
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
          <div className="flex flex-col space-y-2 text-offblack">
            <div className="flex items-center">
              <IoIosCodeWorking className="text-5xl" />
              <h3 className="ml-4 font-semibold">Projeler</h3>
              <hr className="w-full border-offblack ml-4" />
              <hr className="w-20 border-offblack border-2" />
            </div>
            {formData.projects.map((project, index) => (
              <div className="flex flex-col" key={index}>
                <h3 className="text-base font-medium">
                  {formData.projects[index].projectName}
                </h3>
                <p className="text-sm font-normal">
                  {formData.projects[index].projectDesc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <IoIosOptions className="text-5xl" />
              <h3 className="ml-4 font-semibold">Yetenekler</h3>
              <hr className="w-full border-offblack ml-4" />
              <hr className="w-20 border-offblack border-2" />
            </div>
            <ul className="grid grid-cols-2 grid-flow-row gap-4">
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex justify-between relative">
                  <li className="list-disc text-sm">
                    {formData.skills[index].skillName}
                  </li>
                  <hr className="border-gray-300 border-2 w-24 mt-3 mr-4 rounded-lg " />
                  <hr
                    className={
                      "border-mypurple border-2 max-w-24 absolute left-124 top-3 rounded-lg" +
                      (formData.skills[index].skillLevel === "beginner"
                        ? " w-6"
                        : formData.skills[index].skillLevel === "intermediate"
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
        </div>
      </div>
      <button
        className="back-button my-2 mx-6 p-1.5"
        onClick={() => dispatch(decrement())}
      >
        Geri
      </button>
    </div>
  );
}

export default DownloadCv;

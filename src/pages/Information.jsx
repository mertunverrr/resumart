import React from "react";
import ProgressBar from "../components/Information/ProgressBar";
import Heading from "../components/Information/Heading";
import InformationHeadings from "../components/Information/InformationHeadings";
import BasicInfo from "../components/Information/BasicInfo";
import EducationInfo from "../components/Information/EducationInfo";
import ExperienceInfo from "../components/Information/ExperienceInfo";
import SkillLangProject from "../components/Information/SkillLangProject";
import SocialLinks from "../components/Information/SocialLinks";

function Information() {
  return (
    <div>
      <ProgressBar />
      <Heading />
      <div>
        <div className="container mt-5 lg:mt-8 border-2 lg:w-928 rounded-md shadow-md">
          <InformationHeadings />
          <div className="mt-4 md:mt-0">
            <BasicInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;

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
        <div className="container mt-10 border-2 w-928 rounded-md shadow-md">
          <InformationHeadings />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Information;

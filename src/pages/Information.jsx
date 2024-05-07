import React from "react";
import ProgressBar from "../components/Information/ProgressBar";
import Heading from "../components/Information/Heading";
import InformationHeadings from "../components/Information/InformationHeadings";
import BasicInfo from "../components/Information/BasicInfo";
import EducationInfo from "../components/Information/EducationInfo";
import ExperienceInfo from "../components/Information/ExperienceInfo";
import SkillLangProject from "../components/Information/SkillLangProject";
import SocialLinks from "../components/Information/SocialLinks";
import { useSelector } from "react-redux";

function Information() {
  const state = useSelector((store) => store.progressbar);
  return (
    <div>
      <ProgressBar />
      <Heading />
      <div>
        <div className="container mt-5 lg:mt-8 border-2 lg:w-928 rounded-md shadow-md">
          <InformationHeadings />
          <div className="mt-4 md:mt-0">
            {state.value === 0 && <BasicInfo />}
            {state.value === 1 && <EducationInfo />}
            {state.value === 2 && <ExperienceInfo />}
            {state.value === 3 && <SkillLangProject />}
            {state.value === 4 && <SocialLinks />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;

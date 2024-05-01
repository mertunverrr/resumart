import React from "react";
import ProgressBar from "../components/Information/ProgressBar";
import BasicInfo from "../components/Information/BasicInfo";
import Heading from "../components/Information/Heading";
import InformationHeadings from "../components/Information/InformationHeadings";
import EducationInfo from "../components/Information/EducationInfo";

function Information() {
  return (
    <div>
      <ProgressBar />
      <Heading />
      <div>
        <div className="container mt-10 border-2 w-928 rounded-md shadow-md">
          <InformationHeadings />
          <EducationInfo />
        </div>
      </div>
    </div>
  );
}

export default Information;

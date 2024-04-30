import React from "react";
import ProgressBar from "../components/Information/ProgressBar";
import BasicInfo from "../components/Information/BasicInfo";
import Heading from "../components/Information/Heading";
import InformationHeadings from "../components/Information/InformationHeadings";

function Information() {
  return (
    <div>
      <ProgressBar />
      <Heading />
      <div>
        <div className="container mt-10 border-2 w-928 rounded-md">
          <InformationHeadings />
          <BasicInfo />
        </div>
      </div>
    </div>
  );
}

export default Information;

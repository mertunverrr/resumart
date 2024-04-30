import React from "react";

function InformationHeadings() {
  return (
    <div>
      <ul className="flex justify-around text-gray-400 border-b-2 relative my-4 pb-2">
        <li className="group relative cursor-pointer font-semibold text-sm hover:text-gray-500">
          Basic Info
          <hr className="absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300" />
        </li>
        <li className="group relative cursor-pointer font-semibold text-sm hover:text-gray-500">
          Education Info
          <hr className="absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300" />
        </li>
        <li className="group relative cursor-pointer font-semibold text-sm hover:text-gray-500">
          Experience Info
          <hr className="absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300" />
        </li>
        <li className="group relative cursor-pointer font-semibold text-sm hover:text-gray-500">
          Skills&Languages&Projects
          <hr className="absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300" />
        </li>
        <li className="group relative cursor-pointer font-semibold text-sm hover:text-gray-500">
          Social Media
          <hr className="absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300" />
        </li>
      </ul>
    </div>
  );
}

export default InformationHeadings;

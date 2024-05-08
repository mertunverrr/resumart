import React from "react";
import { useSelector } from "react-redux";

function Heading() {
  const state = useSelector((store) => store.progressbar);
  return (
    <div className="container lg:card mt-5 lg:mt-6">
      <h1 className="text-2xl lg:text-5xl text-center font-bold lg:font-extrabold text-offblack">
        {state.value === 6
          ? "Cv'nizi indirebilirsiniz"
          : "Bize biraz kendinizden bahsedin"}
      </h1>
    </div>
  );
}

export default Heading;

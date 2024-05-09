import React from "react";
import { useSelector } from "react-redux";

function ProgressBar() {
  const state = useSelector((store) => store.progressbar);

  return (
    <div className="relative container mt-4 lg:mt-8 w-8/12">
      <hr className="border-8 rounded-lg max-w-full" />
      <hr
        className={
          "absolute top-0 border-8 rounded-lg" +
          (state.value === 0
            ? " w-1 border-mypurple"
            : state.value === 1
            ? " w-1/6 border-mypurple"
            : state.value === 2
            ? " w-2/6 border-mypurple"
            : state.value === 3
            ? " w-3/6 border-mypurple"
            : state.value === 4
            ? " w-4/6 border-mypurple"
            : state.value === 5
            ? " w-5/6 border-mypurple"
            : state.value === 6
            ? " w-full border-green-400"
            : "")
        }
      />
    </div>
  );
}

export default ProgressBar;

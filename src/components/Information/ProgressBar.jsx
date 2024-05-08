import React from "react";
import { useSelector } from "react-redux";

function ProgressBar() {
  const state = useSelector((store) => store.progressbar);

  return (
    <div className="relative container mt-10 lg:mt-20 w-8/12">
      <hr className="border-8 rounded-lg max-w-full" />
      <hr
        className={
          state.value === 5
            ? "absolute top-0 border-8 rounded-lg border-green-600 w-full"
            : `absolute top-0 border-8 rounded-lg border-mypurple w-${state.value}/5`
        }
      />
    </div>
  );
}

export default ProgressBar;

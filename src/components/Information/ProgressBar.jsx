import React from "react";

function ProgressBar() {
  return (
    <div className="relative container lg:card mt-10 lg:mt-20 w-8/12">
      <hr className="border-8 rounded-lg max-w-full" />
      <hr className="absolute top-0 border-8 rounded-lg border-mypurple maw-w-full" />
    </div>
  );
}

export default ProgressBar;

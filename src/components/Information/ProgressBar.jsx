import React from "react";

function ProgressBar() {
  return (
    <div className="relative container lg:card mt-24">
      <hr className="border-8 rounded-lg grid grid-cols-5" />
      <hr className="absolute top-0 border-8 rounded-lg border-mypurple maw-w-928 min-w-60" />
    </div>
  );
}

export default ProgressBar;

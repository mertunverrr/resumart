import React from "react";

function ProgressBar() {
  return (
    <div className="relative container card mt-24">
      <hr className="border-8 rounded-lg max-w-928" />
      <hr className="absolute top-0 border-8 rounded-lg border-mypurple maw-w-928 min-w-928" />
    </div>
  );
}

export default ProgressBar;

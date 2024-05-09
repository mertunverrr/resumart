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
      {state.value === 6 && (
        <p className="text-sm text-center mt-4 -mb-6 underline underline-offset-2">
          <span className="font-semibold">DipNot: </span>Yetenekler kısmı taşmış
          gibi gözüküyor fakat pdf ile indirdiğinizde problem çözülecektir.
        </p>
      )}
    </div>
  );
}

export default Heading;

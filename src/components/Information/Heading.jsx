import React from "react";
import { useSelector } from "react-redux";

function Heading() {
  const state = useSelector((store) => store.progressbar);
  const langs = useSelector((store) => store.language);
  return (
    <>
      {langs.lang === "tr" && (
        <div className="container lg:card mt-5 lg:mt-6 lg:flex lg:flex-col justify-center">
          <h1 className="text-2xl lg:text-5xl text-center font-bold lg:font-extrabold text-offblack">
            {state.value === 6
              ? "Cv'nizi indirebilirsiniz"
              : "Bize biraz kendinizden bahsedin"}
          </h1>
          {state.value === 6 && (
            <p className="text-sm text-center mt-4 justify-center -mb-6 underline underline-offset-2 hidden lg:flex">
              <span className="font-semibold">Not: </span>Yetenekler kısmı
              taşmış gibi gözüküyor fakat pdf ile indirdiğinizde problem
              çözülecektir.
            </p>
          )}
        </div>
      )}
      {langs.lang === "eng" && (
        <div className="container lg:card mt-5 lg:mt-6 ">
          <h1 className="text-2xl lg:text-5xl text-center font-bold lg:font-extrabold text-offblack">
            {state.value === 6
              ? "You can download your CV"
              : "Tell us a bit about yourself"}
          </h1>
          {state.value === 6 && (
            <div>
              <p className="text-sm text-center justify-center mt-4 -mb-6 underline underline-offset-2 hidden lg:flex">
                <span className="font-semibold">Note: </span>The 'Skills'
                section seems to be overflowing, but this issue will be resolved
                when you download it as a PDF.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Heading;

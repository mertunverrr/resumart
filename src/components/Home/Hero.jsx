import React from "react";
import HeroImg from "../../assets/hero.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Hero() {
  const langs = useSelector((store) => store.language);
  return (
    <section>
      {langs.lang === "tr" && (
        <div className="container flex flex-col mt-4 lg:mt-12">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between w-full lg:space-x-32">
            <div className="flex flex-col basis-1/2 justify-center">
              <h2 className="text-3xl lg:text-5xl text-center lg:text-start font-semibold text-offblack leading-tight mt-8 ml-2">
                Online ve ücretsiz bir şekilde CV oluşturun
              </h2>
              <div className="flex justify-center lg:justify-normal">
                <Link
                  to="/resume-builder"
                  className="mt-6 lg:mt-8 font-semibold text-white w-60 lg:w-3/5 p-3 bg-mypurple rounded-md hover:brightness-125 tracking-wider text-center"
                >
                  CV Hazırlamaya Başla
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={HeroImg}
                className="w-80 md:w-96 lg:w-160 lg:basis-1/2 rounded-lg lg:rounded-md lg:rounded-br-large "
              />
            </div>
          </div>
          <div className="flex justify-around mt-10 space-x-1 mx-1 lg:mt-20">
            <button className="bg-gradient-to-r from-indigo-400 to-mypurple  lg:w-60 text-center py-1.5 lg:py-2.5 text-white rounded-3xl cursor-default font-semibold text-sm">
              Kayıt olmanıza gerek yok
            </button>
            <button className="bg-gradient-to-b from-mypurple to-indigo-400  lg:w-60 text-center py-1.5 lg:py-2.5  text-white rounded-3xl cursor-default font-semibold text-sm">
              Hızlı ve kolay
            </button>
            <button className="bg-gradient-to-r from-mypurple to-indigo-400  lg:w-60 text-center py-1.5 lg:py-2.5  text-white rounded-3xl cursor-default font-semibold text-sm">
              Ücretsiz hazır şablonlar
            </button>
          </div>
        </div>
      )}
      {langs.lang === "eng" && (
        <div className="container flex flex-col mt-4 lg:mt-12">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between w-full lg:space-x-32">
            <div className="flex flex-col basis-1/2 justify-center">
              <h2 className="text-3xl lg:text-5xl text-center lg:text-start font-semibold text-offblack leading-tight mt-8 ml-2">
                Create a CV online and free
              </h2>
              <div className="flex justify-center lg:justify-normal">
                <Link
                  to="/resume-builder"
                  className="mt-6 lg:mt-8 font-semibold text-white w-60 lg:w-3/5 p-3 bg-mypurple rounded-md hover:brightness-125 tracking-wider text-center"
                >
                  Start preparing your CV
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={HeroImg}
                className="w-80 md:w-96 lg:w-160 lg:basis-1/2 rounded-lg lg:rounded-md lg:rounded-br-large "
              />
            </div>
          </div>
          <div className="flex justify-around mt-10 space-x-1 mx-1 lg:mt-20">
            <button className="bg-gradient-to-r from-indigo-400 to-mypurple  lg:w-60 text-center py-1.5 lg:py-2.5 text-white rounded-3xl cursor-default font-semibold text-sm">
              You don't need to sign up
            </button>
            <button className="bg-gradient-to-b from-mypurple to-indigo-400  lg:w-60 text-center py-1.5 lg:py-2.5  text-white rounded-3xl cursor-default font-semibold text-sm">
              Fast and easy
            </button>
            <button className="bg-gradient-to-r from-mypurple to-indigo-400  lg:w-60 text-center py-1.5 lg:py-2.5  text-white rounded-3xl cursor-default font-semibold text-sm">
              Free ready-made templates
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;

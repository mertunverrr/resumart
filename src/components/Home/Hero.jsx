import React from "react";
import HeroImg from "../../assets/hero.jpg";

function Hero() {
  return (
    <section>
      <div className="container flex flex-col mt-4 lg:mt-12">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between w-full lg:space-x-32">
          <div className="flex flex-col basis-1/2 justify-center">
            <h2 className="text-3xl lg:text-5xl text-center lg:text-start font-semibold text-offblack leading-tight mt-8 ml-2">
              Online ve ücretsiz bir şekilde CV oluşturun
            </h2>
            <div className="flex justify-center lg:justify-normal">
              <button className="mt-4 lg:mt-8 font-semibold text-white w-60 lg:w-3/5 p-3 bg-mypurple rounded-md hover:brightness-125 tracking-wider">
                CV Hazırlamaya Başla
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={HeroImg}
              className=" w-160 lg:basis-1/2 rounded-md lg:rounded-br-large"
            />
          </div>
        </div>
        <div className="flex justify-around mt-8 lg:mt-20">
          <button className="bg-violet-400 w-44 lg:w-60 text-center py-3 text-white rounded-3xl cursor-default font-semibold text-sm">
            Kayıt olmaya gerek yok
          </button>
          <button className="bg-violet-400 w-44 lg:w-60 text-center py-3  text-white rounded-3xl cursor-default font-semibold text-sm">
            Hızlı ve kolay
          </button>
          <button className="bg-violet-400 w-44 lg:w-60 text-center py-3  text-white rounded-3xl cursor-default font-semibold text-sm">
            Ücretsiz hazır şablonlar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

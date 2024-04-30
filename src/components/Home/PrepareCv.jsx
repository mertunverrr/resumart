import React, { useState } from "react";
import LaptopPng from "../../assets/laptop.png";

function PrepareCv() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const handleFirst = () => {
    setFirst((prevState) => !prevState);
    setSecond(false);
    setThird(false);
  };
  const handleSecond = () => {
    setFirst(false);
    setSecond((prevState) => !prevState);
    setThird(false);
  };
  const handleThird = () => {
    setFirst(false);
    setSecond(false);
    setThird((prevState) => !prevState);
  };
  return (
    <section className="relative bg-white pt-12 pb-16">
      <div className="container flex-row lg:flex lg:space-x-16">
        <div className="flex justify-center lg:justify-normal">
          <img
            src={LaptopPng}
            className="min-w-96 w-132 lg:w-160 lg:min-w-160"
            alt="Laptop"
          />
        </div>
        <div className="text-offblack text-center lg:text-start mt-10 lg:mt-0 flex-col">
          <h1 className="font-extrabold text-2xl lg:text-3xl">
            Cv nasıl hazırlanır?
          </h1>
          <div
            className={
              first
                ? "mt-4 lg:mt-6 border-l-4 border-l-mypurple "
                : "mt-4 lg:mt-6 border-l-4 border-gray-300"
            }
          >
            <h2
              className="ml-4 font-bold cursor-pointer text-lg"
              onClick={handleFirst}
            >
              Resumartı açın
            </h2>
            <p
              className={
                first
                  ? "ml-0 lg:ml-4 text-sm  mt-1"
                  : "ml-0 lg:ml-4 text-sm hidden mt-1"
              }
            >
              Kendi cv'nizi oluşturmak için Resumart'ı açın ve "CV Hazırlamaya
              Başla" butonuna tıklayın.
            </p>
          </div>
          <div
            className={
              second
                ? "mt-4 lg:mt-6 border-l-4 border-l-mypurple"
                : "mt-4 lg:mt-6 border-l-4 border-gray-300"
            }
          >
            <h2
              className="ml-4 font-bold cursor-pointer text-lg"
              onClick={handleSecond}
            >
              Bilgilerinizi doldurun
            </h2>
            <p
              className={
                second
                  ? "ml-0 lg:ml-4 text-sm  mt-1"
                  : "ml-0 lg:ml-4 text-sm hidden mt-1"
              }
            >
              Eksiksiz bir şekilde sizden istenilen bilgileri doldurun.
            </p>
          </div>
          <div
            className={
              third
                ? "mt-4 lg:mt-6 border-l-4 border-l-mypurple"
                : "mt-4 lg:mt-6 border-l-4 border-gray-300"
            }
          >
            <h2
              className="ml-4 font-bold cursor-pointer text-lg"
              onClick={handleThird}
            >
              Şablon seçin
            </h2>
            <p
              className={
                third
                  ? "ml-0 lg:ml-4 text-sm  mt-1"
                  : "ml-0 lg:ml-4 text-sm hidden mt-1"
              }
            >
              Size özel hazırlanmış şablonlardan birisini seçip tasarımınızı
              sonlandırabilirsiniz. Şablonlar sürekli güncellenecek kontrol
              etmeyi unutmayın.
            </p>
          </div>
          <p className="mt-4 lg:mt-8 font-semibold">
            Resumart'la cv hazırlamak bu kadar kolay ve hızlı...
          </p>
        </div>
      </div>
    </section>
  );
}

export default PrepareCv;

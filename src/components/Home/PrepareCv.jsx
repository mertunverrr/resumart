import React, { useState } from "react";
import LaptopPng from "../../assets/laptop.png";
import { useSelector } from "react-redux";

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

  const langs = useSelector((store) => store.language);
  return (
    <section className="relative bg-white pt-20 pb-20">
      {langs.lang === "tr" && (
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
                Resumart'ı açın
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
      )}
      {langs.lang === "eng" && (
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
              How to prepare a CV?
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
                Open Resumart
              </h2>
              <p
                className={
                  first
                    ? "ml-0 lg:ml-4 text-sm  mt-1"
                    : "ml-0 lg:ml-4 text-sm hidden mt-1"
                }
              >
                To create your own CV, open Resumart and click on the "Start
                Preparing Your CV" button.
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
                Fill in your information
              </h2>
              <p
                className={
                  second
                    ? "ml-0 lg:ml-4 text-sm  mt-1"
                    : "ml-0 lg:ml-4 text-sm hidden mt-1"
                }
              >
                Fill in all the requested information accurately.
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
                Select a template
              </h2>
              <p
                className={
                  third
                    ? "ml-0 lg:ml-4 text-sm  mt-1"
                    : "ml-0 lg:ml-4 text-sm hidden mt-1"
                }
              >
                You can choose one of the templates customized for you and
                finalize your design. Remember, the templates will be regularly
                updated, so don't forget to check.
              </p>
            </div>
            <p className="mt-4 lg:mt-8 font-semibold">
              Preparing a CV with Resumart is this easy and fast...
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default PrepareCv;

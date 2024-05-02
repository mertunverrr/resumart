import React, { useState } from "react";
import {
  FaGooglePlusG,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Login() {
  const [active, setActive] = useState(false);

  const changeScreenRegister = () => {
    setActive(true);
  };
  const changeScreenLogin = () => {
    setActive(false);
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 to-purple-200 h-screen w-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl relative overflow-hidden w-768 max-w-full min-h-120">
        <div
          className={`absolute top-0 h-full transition-all ease-in-out duration-500 w-1/2 ${
            active && "translate-x-full opacity-100 z-50"
          }`}
        >
          <form className="bg-white flex flex-col items-center justify-center px-10 h-full">
            <h1 className="text-xl font-medium text-offblack">Hesap Oluştur</h1>
            <div className="flex flex-row mt-3 mb-2 text-lg text-mypurple">
              <a
                href="#"
                className=" border-2 border-mypurple rounded-2xl inline-flex justify-center items-center my-0 mx-1 w-10 h-10"
              >
                <FaGooglePlusG />
              </a>
              <a
                href="#"
                className=" border-2 border-mypurple rounded-2xl inline-flex justify-center items-center my-0 mx-1 w-10 h-10"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                className=" border-2 border-mypurple rounded-2xl inline-flex justify-center items-center my-0 mx-1 w-10 h-10"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className=" border-2 border-mypurple rounded-2xl inline-flex justify-center items-center my-0 mx-1 w-10 h-10"
              >
                <FaLinkedin />
              </a>
            </div>
            <span className="text-xs">
              veya kayıt olmak için email kullanabilirsiniz
            </span>
            <input
              type="text"
              placeholder="Name"
              className="bg-bgInput border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-bgInput border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-bgInput border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            />
            <button className="bg-mypurple text-white text-xs py-2 px-10 font-semibold tracking-wider uppercase mt-2.5 cursor-pointer rounded-lg">
              Kayıt Ol
            </button>
          </form>
        </div>
        <div
          className={`absolute top-0 h-full transition ease-in-out duration-500 left-0 w-1/2 z-20 ${
            active && "-translate-x-full"
          } `}
        >
          <form className="bg-white flex flex-col items-center justify-center px-10 h-full">
            <h1 className="text-xl font-medium text-offblack">Giriş Yap</h1>
            <div className="flex flex-row mt-3 mb-2 text-lg text-mypurple">
              <a
                href="#"
                className=" border-2 border-mypurple rounded-2xl inline-flex justify-center items-center my-0 mx-1 w-10 h-10"
              >
                <FaGooglePlusG />
              </a>
              <a
                href="#"
                className=" border-2 border-mypurple rounded-2xl inline-flex justify-center items-center my-0 mx-1 w-10 h-10"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                className=" border-2 border-mypurple rounded-2xl inline-flex justify-center items-center my-0 mx-1 w-10 h-10"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className=" border-2 border-mypurple rounded-2xl inline-flex justify-center items-center my-0 mx-1 w-10 h-10"
              >
                <FaLinkedin />
              </a>
            </div>
            <span className="text-xs">
              veya giriş yapmak için email kullanabilirsiniz
            </span>

            <input
              type="email"
              placeholder="Email"
              className="bg-bgInput border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-bgInput border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            />
            <a href="#">Şifrenizi mi unuttunuz?</a>
            <button className="bg-mypurple text-white text-xs py-2 px-10 font-semibold tracking-wider uppercase mt-2.5 cursor-pointer rounded-lg">
              Giriş Yap
            </button>
          </form>
        </div>
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all ease-in-out duration-500  z-50 ${
            active
              ? "-translate-x-full rounded-tl-none rounded-bl-none rounded-tr-topLeft rounded-br-bottomLeft"
              : "rounded-tl-topLeft rounded-bl-bottomLeft"
          }`}
        >
          <div
            className={`bg-mypurple text-toggleColor relative -left-full h-full w-200% transition-all duration-500 ease-in-out ${
              active ? "translate-x-1/2" : " translate-x-0"
            }`}
          >
            <div
              className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-7 text-center top-0 transition-all duration-500 ease-in-out ${
                active ? "translate-x-0" : "-translate-x-200%"
              }`}
            >
              <h1 className="text-lg font-medium">Tekrardan hoşgeldiniz!</h1>
              <p className="text-sm trackin-wide my-5">
                Kişisel bilgilerinizi kullanarak giriş yapabilirsiniz
              </p>
              <button
                className="bg-transparent border-white border-2 text-white text-xs py-2 px-10 font-semibold tracking-wider uppercase mt-2.5 cursor-pointer rounded-lg"
                onClick={changeScreenLogin}
              >
                Giriş Yap
              </button>
            </div>
            <div
              className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-7 text-center top-0 transition-all duration-500 ease-in-out right-0 ${
                active ? "translate-x-200%" : "translate-x-0"
              }`}
            >
              <h1 className="text-lg font-medium">Merhaba!</h1>
              <p className="text-sm trackin-wide my-5">
                Kişisel bilgilerinizi kullanarak kayıt olabilirsiniz{" "}
              </p>
              <button
                className="bg-transparent border-white border-2 text-white text-xs py-2 px-10 font-semibold tracking-wider uppercase mt-2.5 cursor-pointer rounded-lg"
                onClick={changeScreenRegister}
              >
                Kayıt Ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

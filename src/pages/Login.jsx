import React, { useState, useCallback } from "react";
import SignUp from "../components/Login/SignUp";
import SignIn from "../components/Login/SignIn";
import { useSelector } from "react-redux";
import Logo from "../assets/logo-no-background.svg";
import { Link } from "react-router-dom";

function Login() {
  const [active, setActive] = useState(false);
  const langs = useSelector((store) => store.language);

  const changeScreenRegister = () => {
    setActive(true);
  };
  const changeScreenLogin = () => {
    setActive(false);
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 to-purple-200 h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center -mt-24 mb-10">
        <Link to="/">
          <img
            src={Logo}
            alt="resumart logo"
            className="w-40 mt-8 cursor-pointer"
          />
        </Link>
      </div>
      {langs.lang === "tr" && (
        <div className="bg-white rounded-xl shadow-xl relative overflow-hidden w-768 max-w-full min-h-120">
          <div
            className={`absolute top-0 h-full transition-all ease-in-out duration-500 w-1/2 ${
              active && "translate-x-full opacity-100 z-50"
            }`}
          >
            <SignUp setActive={setActive} />
          </div>
          <div
            className={`absolute top-0 h-full transition ease-in-out duration-500 left-0 w-1/2 z-20 ${
              active && "-translate-x-full"
            } `}
          >
            <SignIn />
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
                  Kişisel bilgilerinizi kullanarak kayıt olabilirsiniz
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
      )}
      {langs.lang === "eng" && (
        <div className="bg-white rounded-xl shadow-xl relative overflow-hidden w-768 max-w-full min-h-120">
          <div
            className={`absolute top-0 h-full transition-all ease-in-out duration-500 w-1/2 ${
              active && "translate-x-full opacity-100 z-50"
            }`}
          >
            <SignUp setActive={setActive} />
          </div>
          <div
            className={`absolute top-0 h-full transition ease-in-out duration-500 left-0 w-1/2 z-20 ${
              active && "-translate-x-full"
            } `}
          >
            <SignIn />
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
                <h1 className="text-lg font-medium">Welcome back!</h1>
                <p className="text-sm trackin-wide my-5">
                  You can log in using your personal information
                </p>
                <button
                  className="bg-transparent border-white border-2 text-white text-xs py-2 px-10 font-semibold tracking-wider uppercase mt-2.5 cursor-pointer rounded-lg"
                  onClick={changeScreenLogin}
                >
                  Sign In
                </button>
              </div>
              <div
                className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-7 text-center top-0 transition-all duration-500 ease-in-out right-0 ${
                  active ? "translate-x-200%" : "translate-x-0"
                }`}
              >
                <h1 className="text-lg font-medium">Hello!</h1>
                <p className="text-sm trackin-wide my-5">
                  You can sign up using your personal information
                </p>
                <button
                  className="bg-transparent border-white border-2 text-white text-xs py-2 px-10 font-semibold tracking-wider uppercase mt-2.5 cursor-pointer rounded-lg"
                  onClick={changeScreenRegister}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

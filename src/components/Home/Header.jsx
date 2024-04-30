import React from "react";
import Logo from "../../assets/logo-no-background.svg";

function Header() {
  return (
    <section className="bg-white">
      <div className="container flex justify-between py-6">
        <img src={Logo} alt="resumart logo" className="w-40 cursor-pointer" />
        <div className="flex text-lg">
          <button className="mr-8 text-mypurple font-semibold w-24 rounded-md hover:brightness-125 duration-300">
            Giriş yap
          </button>
          <button className="bg-mypurple text-white font-semibold w-24 rounded-md hover:brightness-125 duration-300 ">
            Kaydol
          </button>
        </div>
      </div>
      <hr className="border-gray-200 border-2" />
    </section>
  );
}

export default Header;

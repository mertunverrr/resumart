import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "../../assets/logo-no-background.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../../redux/languages";

function Footer() {
  const dispatch = useDispatch();
  const langs = useSelector((store) => store.language);
  console.log(langs.lang);
  return (
    <footer className="bg-mypurple px-1 py-8 lg:p-8">
      <div className="container text-sm text-white flex justify-around">
        <div className="lg:flex">
          <img
            src={Logo}
            alt="Logo"
            className="w-28 cursor-pointer lg:-mt-1 lg:-mr-3 ml-16 lg:ml-0"
          />
          <p>(c) 2024 All rights are not reserved :)</p>
        </div>
        <div className="flex-row lg:flex space-y-1 lg:space-x-6 lg:space-y-0">
          <button
            className="  flex underline underline-offset-2 bg-transparent hover:text-orange-200 duration-200"
            onClick={() => dispatch(changeLang("tr"))}
          >
            Türkçe
          </button>
          <button
            className=" flex underline underline-offset-2 bg-transparent hover:text-orange-200 duration-200"
            onClick={() => dispatch(changeLang("eng"))}
          >
            English
          </button>
        </div>
        <div className="flex-row md:flex gap-4">
          <a
            href="https://www.linkedin.com/in/mert-%C3%BCnver-a89807305/"
            target="_blank"
          >
            <FaLinkedin className="text-2xl hover:text-orange-200 duration-200" />
          </a>
          <a href="https://github.com/mertunverrr" target="_blank">
            <FaGithub className="text-2xl hover:text-orange-200 duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

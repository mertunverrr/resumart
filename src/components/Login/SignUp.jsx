import React, { useState, useCallback } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";

function SignUp({ setActive }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(true);
  const langs = useSelector((store) => store.language);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password || !name) {
        setCheck(false);
        return;
      }
      createUserWithEmailAndPassword(auth, email, password).then((auth) => {
        setActive(false);
        setCheck(true);
        updateProfile(auth.user, { displayName: name });
        alert("Başarılı bir şekilde kayıt oldunuz");
        setName("");
        setEmail("");
        setPassword("");
      });
    },
    [name, email, password]
  );
  return (
    <>
      {langs.lang === "tr" && (
        <form
          className="bg-white flex flex-col items-center justify-center px-2 lg:px-10 h-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-lg lg:text-xl mb-3 lg:mb-1 font-medium text-offblack text-center lg:text-start">
            Hesap Oluştur
          </h1>

          <span className="text-xs text-center lg:text-start hidden lg:flex">
            veya kayıt olmak için email kullanabilirsiniz
          </span>

          <input
            type="text"
            placeholder="Name"
            value={name}
            className="bg-bgInput border-none my-1.5 lg:my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="bg-bgInput border-none my-1.5 lg:my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            className="bg-bgInput border-none my-1.5 lg:my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!check && (
            <span className="text-xs text-red-500">
              Lütfen alanları eksiksiz ve hatasız doldurunuz.
            </span>
          )}
          <button className="bg-mypurple text-white text-xs py-2 px-6 lg:px-10 font-semibold tracking-wider uppercase mt-3 cursor-pointer rounded-lg">
            Kayıt Ol
          </button>
        </form>
      )}
      {langs.lang === "eng" && (
        <form
          className="bg-white flex flex-col items-center justify-center px-2 lg:px-10 h-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-lg lg:text-xl mb-3 lg:mb-1 font-medium text-offblack text-center lg:text-start">
            Create Account
          </h1>

          <span className="text-xs text-center lg:text-start hidden lg:flex">
            you can also use email to sign up
          </span>

          <input
            type="text"
            placeholder="Name"
            value={name}
            className="bg-bgInput border-none my-1.5 lg:my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="bg-bgInput border-none my-1.5 lg:my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="bg-bgInput border-none my-1.5 lg:my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!check && (
            <span className="text-xs text-red-500">
              Please fill in the fields completely and accurately.
            </span>
          )}
          <button className="bg-mypurple text-white text-xs py-2 px-6 lg:px-10 font-semibold tracking-wider uppercase mt-3 cursor-pointer rounded-lg">
            Sign Up
          </button>
        </form>
      )}
    </>
  );
}

export default SignUp;

import React, { useCallback } from "react";
import Logo from "../../assets/logo-no-background.svg";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";

function Header() {
  const langs = useSelector((store) => store.language);
  const [user] = useAuthState(auth);
  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);
  return (
    <section className="bg-white">
      {langs.lang === "tr" && (
        <div className="container flex justify-between py-6">
          <img src={Logo} alt="resumart logo" className="w-40 cursor-pointer" />
          <div className="flex text-lg">
            {user ? (
              <>
                <h1 className="text-offblack flex justify-center items-center text-base font-semibold mr-5">
                  Hoşgeldin
                  <span className="text-mypurple ml-1">{user.displayName}</span>
                </h1>
                <button
                  className="bg-mypurple text-white font-semibold w-24 rounded-md hover:brightness-125 duration-300 text-center p-1"
                  onClick={handleSignOut}
                >
                  Çıkış yap
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="mr-2 lg:mr-8 text-mypurple font-semibold w-24 rounded-md hover:brightness-125 duration-300 text-center p-1"
                >
                  Giriş yap
                </Link>
                <Link
                  to="/login"
                  className="bg-mypurple text-white font-semibold w-24 rounded-md hover:brightness-125 duration-300 text-center p-1"
                >
                  Kaydol
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      {langs.lang === "eng" && (
        <div className="container flex justify-between py-6">
          <img src={Logo} alt="resumart logo" className="w-40 cursor-pointer" />
          <div className="flex text-lg">
            {user ? (
              <>
                <h1 className="text-offblack flex justify-center items-center text-base font-semibold mr-5">
                  Welcome
                  <span className="text-mypurple ml-1">{user.displayName}</span>
                </h1>
                <button
                  className="bg-mypurple text-white font-semibold w-24 rounded-md hover:brightness-125 duration-300 text-center p-1"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="mr-2 lg:mr-8 text-mypurple font-semibold w-24 rounded-md hover:brightness-125 duration-300 text-center p-1"
                >
                  Sign In
                </Link>
                <Link
                  to="/login"
                  className="bg-mypurple text-white font-semibold w-24 rounded-md hover:brightness-125 duration-300 text-center p-1"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      <hr className="border-gray-200 border-2" />
    </section>
  );
}

export default Header;

import React, { useState, useCallback } from "react";
import { FaGooglePlusG, FaFacebookSquare, FaGithub } from "react-icons/fa";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [check, setCheck] = useState(true);
  const langs = useSelector((store) => store.language);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) {
        setCheck(false);
        return;
      }
      signInWithEmailAndPassword(auth, email, password)
        .then(() => setCheck(true))
        .catch(() => setCheck(false));
    },
    [email, password]
  );
  const resetPasswordWithEmail = useCallback(
    (e) => {
      e.preventDefault();
      if (!email) {
        return;
      }
      sendPasswordResetEmail(auth, email).then(() => {
        alert("Doğrulama maili gönderildi");
      });
    },
    [email]
  );

  const [user, isLoading] = useAuthState(auth);
  if (user) {
    return <Navigate to="/" replace />;
  }

  const googleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      const user = data.user;
      if (user) {
        return <Navigate to="/" replace />;
      }
    } catch (error) {
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(credential);
    }
  };
  const githubLogin = async () => {
    try {
      const data = await signInWithPopup(auth, githubProvider);
      const credential = GithubAuthProvider.credentialFromResult(data);
      const user = data.user;
      if (user) {
        window.location = "/";
      }
    } catch (error) {
      const credential = GithubAuthProvider.credentialFromError(error);
      alert(credential);
    }
  };

  return (
    <>
      {langs.lang === "tr" && (
        <>
          {!resetPassword ? (
            <form
              className="bg-white flex flex-col items-center justify-center px-10 h-full"
              onSubmit={(e) => handleSubmit(e)}
            >
              <h1 className="text-xl font-medium text-offblack">Giriş Yap</h1>
              <div className="flex flex-row mt-3 mb-2 text-lg text-mypurple">
                <a
                  href="#"
                  className=" border-2 border-mypurple rounded-2xl inline-flex justify-center items-center my-0 mx-1 w-10 h-10"
                  onClick={googleLogin}
                >
                  <FaGooglePlusG />
                </a>

                <a
                  href="#"
                  className=" border-2 border-mypurple rounded-2xl inline-flex justify-center items-center my-0 mx-1 w-10 h-10"
                  onClick={githubLogin}
                >
                  <FaGithub />
                </a>
              </div>
              <span className="text-xs">
                veya giriş yapmak için email kullanabilirsiniz
              </span>

              <input
                type="email"
                placeholder="Email"
                value={email}
                className={
                  check
                    ? "bg-bgInput border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                    : "bg-bgInput border-red-500 border-2 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                }
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Şifre"
                value={password}
                className={
                  check
                    ? "bg-bgInput border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                    : "bg-bgInput border-red-500 border-2 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                }
                onChange={(e) => setPassword(e.target.value)}
              />
              {!check && (
                <span className="text-xs text-red-500">
                  Lütfen emailinizi veya şifrenizi kontrol ediniz
                </span>
              )}
              <a
                onClick={() => setResetPassword(true)}
                href="#"
                className="mt-3"
              >
                Şifrenizi mi unuttunuz?
              </a>
              <button className="bg-mypurple text-white text-xs py-2 px-10 font-semibold tracking-wider uppercase mt-2.5 cursor-pointer rounded-lg">
                Giriş Yap
              </button>
            </form>
          ) : (
            <form
              className="bg-white flex flex-col items-center justify-center px-10 h-full"
              onSubmit={(e) => resetPasswordWithEmail(e)}
            >
              <h1 className="text-xl font-medium text-offblack">
                Şifreni yenile
              </h1>
              <span className="text-xs">
                şifrenizi yenilemek için emailinizi giriniz
              </span>

              <input
                type="email"
                placeholder="Email"
                value={email}
                className="bg-bgInput border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-mypurple text-white text-xs py-2 px-10 font-semibold tracking-wider uppercase mt-2.5 cursor-pointer rounded-lg">
                Doğrulama maili gönder
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setResetPassword(false);
                }}
                className="bg-mypurple text-white text-xs py-2 px-10 font-semibold tracking-wider uppercase mt-10 cursor-pointer rounded-lg"
              >
                Giriş yap
              </button>
            </form>
          )}
        </>
      )}
      {langs.lang === "eng" && (
        <>
          {!resetPassword ? (
            <form
              className="bg-white flex flex-col items-center justify-center px-10 h-full"
              onSubmit={(e) => handleSubmit(e)}
            >
              <h1 className="text-xl font-medium text-offblack">Sign In</h1>
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
              </div>
              <span className="text-xs">You can also use email to log in</span>

              <input
                type="email"
                placeholder="Email"
                value={email}
                className={
                  check
                    ? "bg-bgInput border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                    : "bg-bgInput border-red-500 border-2 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                }
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                className={
                  check
                    ? "bg-bgInput border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                    : "bg-bgInput border-red-500 border-2 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                }
                onChange={(e) => setPassword(e.target.value)}
              />
              {!check && (
                <span className="text-xs text-red-500">
                  Please check your email or password
                </span>
              )}
              <a
                onClick={() => setResetPassword(true)}
                href="#"
                className="mt-3"
              >
                Did you forget your password?
              </a>
              <button className="bg-mypurple text-white text-xs py-2 px-10 font-semibold tracking-wider uppercase mt-2.5 cursor-pointer rounded-lg">
                Sign In
              </button>
            </form>
          ) : (
            <form
              className="bg-white flex flex-col items-center justify-center px-10 h-full"
              onSubmit={(e) => resetPasswordWithEmail(e)}
            >
              <h1 className="text-xl font-medium text-offblack">
                Reset your password
              </h1>
              <span className="text-xs">
                please enter your email to reset your password
              </span>

              <input
                type="email"
                placeholder="Email"
                value={email}
                className="bg-bgInput border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-mypurple text-white text-xs py-2 px-10 font-semibold tracking-wider uppercase mt-2.5 cursor-pointer rounded-lg">
                Send verification email
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setResetPassword(false);
                }}
                className="bg-mypurple text-white text-xs py-2 px-10 font-semibold tracking-wider uppercase mt-10 cursor-pointer rounded-lg"
              >
                Sign In
              </button>
            </form>
          )}
        </>
      )}
    </>
  );
}

export default SignIn;

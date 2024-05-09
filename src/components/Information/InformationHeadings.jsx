import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeValue } from "../../redux/progressbarSlice";

function InformationHeadings() {
  const state = useSelector((store) => store.progressbar);
  const langs = useSelector((store) => store.language);
  const dispatch = useDispatch();
  console.log(state.value);
  return (
    <div>
      {langs.lang === "tr" && (
        <ul className="justify-around text-gray-400 border-b-2 relative my-4 pb-2 hidden md:flex">
          <li
            className={
              state.value === 0
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(0))}
          >
            Temel Bilgiler
            <hr
              className={
                state.value === 0
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
          <li
            className={
              state.value === 1
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(1))}
          >
            Eğitim Bilgisi
            <hr
              className={
                state.value === 1
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
          <li
            className={
              state.value === 2
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(2))}
          >
            Deneyimler
            <hr
              className={
                state.value === 2
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
          <li
            className={
              state.value === 3
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(3))}
          >
            Projeler
            <hr
              className={
                state.value === 3
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
          <li
            className={
              state.value === 4
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(4))}
          >
            Yetenekler & Diller
            <hr
              className={
                state.value === 4
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
          <li
            className={
              state.value === 5
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(5))}
          >
            Sosyal Medya
            <hr
              className={
                state.value === 5
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
          <li
            className={
              state.value === 6
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(6))}
          >
            İndir
            <hr
              className={
                state.value === 6
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
        </ul>
      )}
      {langs.lang === "eng" && (
        <ul className="justify-around text-gray-400 border-b-2 relative my-4 pb-2 hidden md:flex">
          <li
            className={
              state.value === 0
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(0))}
          >
            Basic Information
            <hr
              className={
                state.value === 0
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
          <li
            className={
              state.value === 1
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(1))}
          >
            Education Information
            <hr
              className={
                state.value === 1
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
          <li
            className={
              state.value === 2
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(2))}
          >
            Experiences
            <hr
              className={
                state.value === 2
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
          <li
            className={
              state.value === 3
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(3))}
          >
            Projects
            <hr
              className={
                state.value === 3
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
          <li
            className={
              state.value === 4
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(4))}
          >
            Skills & Languages
            <hr
              className={
                state.value === 4
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
          <li
            className={
              state.value === 5
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(5))}
          >
            Social Media
            <hr
              className={
                state.value === 5
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
          <li
            className={
              state.value === 6
                ? "group relative cursor-pointer font-extrabold text-sm text-mypurple"
                : "group relative cursor-pointer font-semibold text-sm hover:text-gray-500"
            }
            onClick={() => dispatch(changeValue(6))}
          >
            Download
            <hr
              className={
                state.value === 6
                  ? "absolute border-mypurple border-2 w-full top-7"
                  : "absolute border-transparent border-2 w-full top-7 group-hover:border-gray-300"
              }
            />
          </li>
        </ul>
      )}
    </div>
  );
}

export default InformationHeadings;

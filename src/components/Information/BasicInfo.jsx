import React from "react";

function BasicInfo() {
  return (
    <div className="py-2 px-6">
      <form className="flex flex-row space-x-10">
        <div className="flex flex-col basis-1/2 space-y-4">
          <div className="flex flex-col">
            <label className="font-bold text-offblack text-sm mb-2 ml-1">
              İsim - Soyisim
            </label>
            <input type="text" placeholder="Jack Spear" className="my-input" />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-offblack text-sm mb-2 ml-1">
              Meslek Ünvanı
            </label>
            <input
              type="text"
              placeholder="Frontend Developer"
              className="my-input"
            />
          </div>
          <div className="flex flex-row space-x-6">
            <div className="flex flex-col basis-1/2">
              <label className="font-bold text-offblack text-sm mb-2 ml-1">
                Email
              </label>
              <input
                type="text"
                placeholder="jackspear@resumart.com"
                className="my-input"
              />
            </div>
            <div className="flex flex-col basis-1/2">
              <label className="font-bold text-offblack text-sm mb-2 ml-1">
                Şehir
              </label>
              <input type="text" placeholder="İstanbul" className="my-input" />
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col space-y-12">
          <div className="flex flex-col basis-2/3 justify-center items-center relative">
            <label className="font-medium text-white text-xs absolute text-center  cursor-pointer">
              Resim yükle <br /> (jpg, jpeg, png)
            </label>
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              className=" w-27 h-27 rounded-full cursor-pointer bg-mypurple hover:brightness-125 duration-300 file:hover:cursor-pointer file:opacity-0 text-white"
            />
          </div>
          <div className="flex flex-col basis-1/3">
            <label className="font-bold text-offblack text-sm mb-2 ml-1">
              Telefon
            </label>
            <input
              type="text"
              placeholder="123 321 45 54"
              className="my-input"
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-mypurple py-2 px-10 rounded-md text-white font-semibold tracking-wide text-xl -mt-8 hover:brightness-125 duration-500">
              İleri
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BasicInfo;

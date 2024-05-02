import React from "react";

function ExperienceInfo() {
  return (
    <div className="py-2 px-6">
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-10">
            <div className="flex flex-col basis-1/2">
              <label className="font-bold text-offblack text-sm mb-2 ml-1">
                Şirket Adı
              </label>
              <input type="text" placeholder="" className="my-input" />
            </div>
            <div className="flex flex-col basis-1/2">
              <label className="font-bold text-offblack text-sm mb-2 ml-1">
                İş Ünvanı
              </label>
              <input
                type="text"
                placeholder="Computer Engineering"
                className="my-input"
              />
            </div>
          </div>
          <div className="flex space-x-10">
            <div className="flex flex-col basis-1/2">
              <label className="font-bold text-offblack text-sm mb-2 ml-1">
                Başlangıç Tarihi
              </label>
              <input
                type="date"
                placeholder="Computer Engineering"
                className="my-input"
                min="1970-01-01"
                max="2024-12-31"
              />
            </div>
            <div className="flex flex-col basis-1/2">
              <label className="font-bold text-offblack text-sm mb-2 ml-1">
                Bitiş Tarihi
              </label>
              <input
                type="date"
                placeholder="Computer Engineering"
                className="my-input"
                min="1970-01-01"
                max="2029-12-31"
              />
            </div>
          </div>
        </div>
        <button className="add-button">Ekle</button>
        <div className="flex justify-between">
          <button className="back-button">Geri</button>
          <button className="next-button">İleri</button>
        </div>
      </form>
    </div>
  );
}

export default ExperienceInfo;

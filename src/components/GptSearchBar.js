import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const locale = useSelector((store) => store.config.language);

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[locale].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">
          {language[locale].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
// import i18n from "../utils/i18n";
import { useState } from "react";

export const Translator = () => {
  const [language, setlanguage] = useState("en");
  //   const [bangla, setBangla] = useState("Bangla");
  //   const [english, setEnglish] = useState("English");
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    // if (lang === "en") {
    //     setlanguage('English')
    //   i18n.changeLang(lang);

    // } else {
    //     setlanguage("Bangla")
    //   i18n.changeLang(lang);
    // }
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <button
        className="px-5 py-2 text-base font-semibold text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700 transition-colors"
        onClick={() => changeLang("en")}
      >
        english
      </button>
      <button
        className="px-5 py-2 text-base font-semibold text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700 transition-colors"
        onClick={() => changeLang("bn")}
      >
        Bangla
      </button>
      {t("welcome")} <br />
      {t("header.Headerwelcome")} <br />
      {t("description")} <br />
      {t("items", { count: 0 })} <br />
      {/* {t("richText")} */}
      <Trans i18nKey={"richText"}>
        Click <strong>here</strong> to continue.
      </Trans>
    </div>
  );
};
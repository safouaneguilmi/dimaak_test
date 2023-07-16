import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { CleaningServices } from "@mui/icons-material";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // lng: "en", // if you're using a language detector, do not define the lng option
    // fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    ns: [
      "translations",
      "about",
      "header",
      "hero",
      "services",
      "how_to_use",
      "footer",
      "contact",
      "popup",
    ],
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}/translation.json",
    },
  });

export default i18n;

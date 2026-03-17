import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getDocumentLang, translations } from "../i18n";
import type { Language, TranslationSchema } from "../i18n";

const STORAGE_KEY = "ativa-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: TranslationSchema;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "pt";
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

  return storedLanguage === "en" ? "en" : "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((currentLanguage) =>
      currentLanguage === "pt" ? "en" : "pt",
    );
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }

    if (typeof document !== "undefined") {
      document.documentElement.lang = getDocumentLang(language);
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language, setLanguage, toggleLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

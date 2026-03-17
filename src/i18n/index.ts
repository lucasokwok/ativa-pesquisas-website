import { en } from "./en";
import { pt } from "./pt";
import type { Language, TranslationSchema } from "./types";

export const translations: Record<Language, TranslationSchema> = {
  pt,
  en,
};

export function getDocumentLang(language: Language): "pt-BR" | "en" {
  return language === "pt" ? "pt-BR" : "en";
}

export { en, pt };
export type { Language, TranslationSchema };

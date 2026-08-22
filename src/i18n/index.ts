import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";
import { isLocale, type Locale } from "./locales";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, fr, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localeFromParam(value: string | undefined): Locale {
  return value && isLocale(value) ? value : "en";
}

export { locales, isLocale, localeMeta, cvByLocale, cvFiles } from "./locales";
export type { Locale } from "./locales";
export type { Dictionary } from "./types";

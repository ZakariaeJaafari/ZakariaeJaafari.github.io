export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeMeta: Record<
  Locale,
  { dir: "ltr" | "rtl"; htmlLang: string; ogLocale: string; label: string; short: string }
> = {
  en: { dir: "ltr", htmlLang: "en", ogLocale: "en_GB", label: "English", short: "EN" },
  fr: { dir: "ltr", htmlLang: "fr", ogLocale: "fr_FR", label: "Français", short: "FR" },
  ar: { dir: "rtl", htmlLang: "ar", ogLocale: "ar_MA", label: "العربية", short: "ع" },
};

export const cvByLocale: Record<Locale, { href: string; fileLabel: string }> = {
  en: { href: "/cv/Zakariae_Jaafari_CV_EN.pdf", fileLabel: "EN" },
  fr: { href: "/cv/Zakariae_Jaafari_CV_FR.pdf", fileLabel: "FR" },
  ar: { href: "/cv/Zakariae_Jaafari_CV_EN.pdf", fileLabel: "EN" },
};

export const cvFiles = [
  { href: "/cv/Zakariae_Jaafari_CV_EN.pdf", labelEn: "English", labelFr: "Anglais", labelAr: "الإنجليزية", code: "EN" },
  { href: "/cv/Zakariae_Jaafari_CV_FR.pdf", labelEn: "French", labelFr: "Français", labelAr: "الفرنسية", code: "FR" },
] as const;

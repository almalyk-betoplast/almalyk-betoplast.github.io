import { ui, defaultLang, locales, type Lang } from './ui';

/** Resolve the active language from Astro.currentLocale. */
export function getLang(currentLocale: string | undefined): Lang {
  return (locales as readonly string[]).includes(currentLocale ?? '')
    ? (currentLocale as Lang)
    : defaultLang;
}

/** Translation table for a language. */
export function t(lang: Lang) {
  return ui[lang];
}

/** Remove a leading /ru or /uz prefix, returning the base path ('/', '/about'…). */
export function stripLocale(path: string): string {
  const m = path.match(/^\/(ru|uz)(\/.*)?$/);
  if (m) return m[2] || '/';
  return path || '/';
}

/** Localize a base path for a target language (default = no prefix). */
export function localizePath(path: string, lang: Lang): string {
  const base = stripLocale(path);
  if (lang === defaultLang) return base;
  return base === '/' ? `/${lang}` : `/${lang}${base}`;
}

export const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'products', href: '/products' },
  { key: 'quality', href: '/quality' },
  { key: 'howwework', href: '/how-we-work' },
  { key: 'sustainability', href: '/sustainability' },
  { key: 'contact', href: '/contact' },
] as const;

export { locales, defaultLang };
export type { Lang };

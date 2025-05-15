
import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

type Language = {
  code: string;
  name: string;
  dir: 'ltr' | 'rtl';
};

interface LanguageContextType {
  currentLanguage: Language;
  languages: Language[];
  setLanguage: (code: string) => void;
}

// Available languages
const languages: Language[] = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' }, // Arabic
  { code: 'he', name: 'עִברִית', dir: 'rtl' }, // Hebrew
  // Add more languages as needed
];

const defaultLanguage = languages[0];

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: defaultLanguage,
  languages,
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { i18n } = useTranslation();
  
  // Get current language from i18next
  const getCurrentLanguageFromI18n = (): Language => {
    const code = i18n.language || 'en';
    return languages.find(lang => lang.code === code) || defaultLanguage;
  };
  
  const currentLanguage = getCurrentLanguageFromI18n();

  const setLanguage = (code: string) => {
    const newLanguage = languages.find(lang => lang.code === code) || defaultLanguage;
    i18n.changeLanguage(code); // Change i18next language
    localStorage.setItem('language', newLanguage.code);
    document.documentElement.dir = newLanguage.dir;
    document.documentElement.lang = newLanguage.code;
  };

  // Initialize direction on first load
  useEffect(() => {
    document.documentElement.dir = currentLanguage.dir;
    document.documentElement.lang = currentLanguage.code;
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, languages, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

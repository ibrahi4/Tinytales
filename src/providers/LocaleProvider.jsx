'use client';

import { createContext, useContext, useState, useEffect,React } from 'react';
import { locales, defaultLocale } from '@/i18n/config';

const LocaleContext = createContext();

export function LocaleProvider({ children, initialLocale = defaultLocale }) {
  const [locale, setLocale] = useState(initialLocale);
  const [messages, setMessages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Load messages when locale changes
  useEffect(() => {
    const loadMessages = async () => {
      setIsLoading(true);
      try {
        const messages = await import(`@/i18n/messages/${locale}.json`);
        setMessages(messages.default);
        
        // Set HTML dir and lang
        document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = locale;
        
        // Save to localStorage
        localStorage.setItem('locale', locale);
      } catch (error) {
        console.error('Failed to load messages:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, [locale]);

  // Load saved locale on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && locales.includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale) => {
    if (locales.includes(newLocale)) {
      setLocale(newLocale);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  };

  const value = {
    locale,
    changeLocale,
    t,
    isRTL: locale === 'ar',
    isLoading,
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}
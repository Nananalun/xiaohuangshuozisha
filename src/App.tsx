import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import SellingPoints from './components/SellingPoints';
import FeaturedProducts from './components/FeaturedProducts';
import SocialProof from './components/SocialProof';
import Benefits from './components/Benefits';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LanguageSwitch from './components/LanguageSwitch';
import Persona from './components/Persona';
import { COPY, type Language } from './i18n';

const getPreferredLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage?.getItem('preferredLanguage');
    if (stored === 'zh' || stored === 'vi') {
      return stored;
    }
  }
  if (typeof navigator === 'undefined') {
    return 'zh';
  }
  const languages =
    Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];
  const matched = languages.find(
    (lang) => typeof lang === 'string' && lang.toLowerCase().startsWith('vi')
  );
  return matched ? 'vi' : 'zh';
};

const App = () => {
  const [language, setLanguage] = useState<Language>(() => getPreferredLanguage());
  const copy = COPY[language];

  useEffect(() => {
    document.documentElement.lang = language === 'vi' ? 'vi' : 'zh-Hans';
    document.title = copy.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute('content', copy.meta.description);
    }
    if (typeof window !== 'undefined') {
      window.localStorage?.setItem('preferredLanguage', language);
    }
  }, [copy, language]);

  return (
    <>
      <main className="page-shell" data-lang={language}>
        <LanguageSwitch value={language} onChange={setLanguage} />
        <Hero copy={copy.hero} />
        <Persona copy={copy.persona} />
        <SellingPoints copy={copy.selling} />
        <FeaturedProducts copy={copy.featured} />
        <SocialProof copy={copy.social} />
        <Benefits copy={copy.benefits} />
        <FinalCTA copy={copy.finalCta} />
      </main>
      <Footer copy={copy.footer} />
    </>
  );
};

export default App;


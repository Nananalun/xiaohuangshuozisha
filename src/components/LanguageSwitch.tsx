import type { Language } from '../i18n';

type LanguageSwitchProps = {
  value: Language;
  onChange: (lang: Language) => void;
};

const LABELS: Record<Language, string> = {
  zh: '中文',
  vi: 'Tiếng Việt'
};

const LanguageSwitch = ({ value, onChange }: LanguageSwitchProps) => {
  return (
    <div className="language-switch" role="group" aria-label="Language switcher">
      {(Object.keys(LABELS) as Language[]).map((lang) => (
        <button
          key={lang}
          type="button"
          className={`switch-btn${value === lang ? ' active' : ''}`}
          onClick={() => value !== lang && onChange(lang)}
        >
          {LABELS[lang]}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;


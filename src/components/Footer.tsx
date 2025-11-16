import type { FooterCopy } from '../i18n';

type FooterProps = {
  copy: FooterCopy;
};

const Footer = ({ copy }: FooterProps) => {
  return (
    <footer>
      {copy.text}
    </footer>
  );
};

export default Footer;


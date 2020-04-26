import './Footer.scss';
import { AboutModal, Icon } from 'components';
import React, { useContext, useState } from 'react';
import { ThemeContext, ThemeContextInterface } from 'app/context';

export function Footer() {
  const [ showAbout, toggleAbout ] = useState<boolean>(false);
  const themeContext = useContext<ThemeContextInterface>(ThemeContext);

  if (!themeContext.showFooter) {
    return null;
  }

  function toggleAboutModal(): void {
    toggleAbout(!showAbout);
  }

  return (
    <>
      <footer className="footer-container">
        <div className="footer-social-buttons flex-container flex-horizontal-center">
          <Icon className="fa-2x" type="thunderstorm"  onClick={toggleAboutModal}/>
        </div>
        <div className="footer-copyright">
          <b onClick={toggleAboutModal}>FASHIONKILLA</b> by <b>LeChris</b>
        </div>
      </footer>
      <AboutModal isOpen={showAbout} onToggle={toggleAboutModal}/>
     </>
  );
}

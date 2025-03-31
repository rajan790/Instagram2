import styles from './RightContainer.module.css'
import React from 'react';
const Footer = () => {
  const links = [
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Language",
    "Meta Verified",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <span className={styles.footerLink}>{link}</span>
            {index !== links.length - 1 && <div className={styles.dotContainer}>·</div>}
          </React.Fragment>
        ))}
      </div>
      <p className={styles.footerCopy}>© 2025 INSTAGRAM FROM META</p>
    </footer>
  );
};

export default Footer;

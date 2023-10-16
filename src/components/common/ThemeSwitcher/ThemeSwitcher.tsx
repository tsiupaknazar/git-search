import { useEffect, useState } from 'react';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(getTheme);
  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isDark));
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');

  }, [isDark]);

  function getTheme() {
    if(localStorage["dark"]){
      var savedmode = JSON.parse(localStorage.getItem("dark") || "");
    } 
    return savedmode || false;
  }

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
"use client"

import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import styles from './theme-toggle.module.scss'
import Icon from '@mdi/react';
import {mdiMoonWaningCrescent, mdiWhiteBalanceSunny} from '@mdi/js';


export function ThemeToggle() {
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


  return (
    <div className={styles.switch} data-theme={theme} onClick={toggleSwitch}>
      <Icon path={mdiMoonWaningCrescent} className={`${styles.icon} ${styles.left}`}/>
      <Icon path={mdiWhiteBalanceSunny} className={`${styles.icon} ${styles.right}`}/>
      <motion.div className={styles.handle} layout transition={spring}/>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

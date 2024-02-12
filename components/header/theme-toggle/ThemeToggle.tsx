"use client"

import React, {useCallback, useEffect, useState} from "react";
import {motion} from "framer-motion";
import styles from './theme-toggle.module.scss'
import Icon from '@mdi/react';
import {mdiMoonWaningCrescent, mdiWhiteBalanceSunny} from '@mdi/js';
import {useAtom} from "jotai";
import {themeAtom} from "@/atoms/ui";
import {Moon, Sun} from "lucide-react";
import clsx from "clsx";


export function ThemeToggle() {
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleSwitch = useCallback( () => {
    setIsOn(!isOn);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


  return (
    <motion.div layout layoutRoot className={styles.switch} data-theme={theme} onClick={toggleSwitch}>
      <Moon strokeWidth={2} className={clsx(styles.icon, styles.left)}/>
      <Sun strokeWidth={2} className={clsx(styles.icon, styles.right)}/>
      <motion.div
        className={styles.handle}
        layout
        transition={{
          layout: layoutAnimation
        }}
      />
    </motion.div>
  );
}

const layoutAnimation = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

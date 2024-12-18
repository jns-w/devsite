"use client"

import {mdiMoonWaningCrescent, mdiWhiteBalanceSunny} from '@mdi/js';
import React, {useCallback, useEffect, useState} from "react";
import {Moon, Sun} from "lucide-react";
import {motion} from "framer-motion";
import {themeAtom} from "@/atoms/ui";
import Icon from '@mdi/react';
import {useAtom} from "jotai";
import clsx from "clsx";

import styles from './theme-toggle.module.scss'


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
    <motion.div layout layoutRoot data-theme={theme} onClick={toggleSwitch} className={styles.switch}>
      <Moon strokeWidth={2} className={clsx(styles.icon, styles.left)}/>
      <Sun strokeWidth={2} className={clsx(styles.icon, styles.right)}/>
      <motion.div
        layout
        className={styles.handle}
        transition={{
          layout: layoutAnimation
        }}
      />
    </motion.div>
  );
}

const layoutAnimation = {
  damping: 30,
  stiffness: 700,
  type: "spring"
};

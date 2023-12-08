import React, { useState, useEffect } from 'react';
import { Switch, useColorMode } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [checked, setChecked] = useState(colorMode === 'dark');

  const toggleTheme = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    const newTheme = newChecked ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    toggleColorMode();
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setChecked(storedTheme === 'dark');
    }
  }, []);

  return (
    <Switch
      colorScheme="blue"
      isChecked={checked}
      onChange={toggleTheme}
      aria-label="Toggle theme"
    />
  );
};

export default ThemeToggle;

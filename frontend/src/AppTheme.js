// src/components/ThemeToggle.js
import React, { useState, useEffect } from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        toggleColorMode(); // Опционально, в зависимости от ваших требований
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    return (
        <IconButton
            icon={theme === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleTheme}
            aria-label="Toggle theme"
        />
    );
};

export default ThemeToggle;

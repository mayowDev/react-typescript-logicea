
import { ThemeContext, themes } from '../context/themeContext';
import React from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    
        <ThemeContext.Consumer>
        {({ changeTheme }) => (
            <button
                onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
            }}
            >
            <span className="block">Switch to {darkMode?"Light":"Dark"}</span>
            </button>
        )}
        </ThemeContext.Consumer>
  );
}

export default ThemeToggle;

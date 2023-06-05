import { createContext } from "react";

export const themes = {
  dark: "",
  light: "light",
  currentTheme:''
};

export const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: (theme) => {themes.currentTheme=theme},
});
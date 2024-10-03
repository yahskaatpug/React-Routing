import { createContext, useContext, useLayoutEffect } from "react";

import { useState } from 'react';

export const themeContext  = createContext(null);
export const ThemeProvider = themeContext.Provider;

const ThemeContext = ({children})=>{
   
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useLayoutEffect(() => {
        document.body.style.backgroundColor = theme === 'dark' ? "#000" : "#fff";
        document.body.style.color = theme === 'dark' ? "#fff" : "#000";
        localStorage.setItem("theme", theme);
    }, [theme])

    const toggleTheme = ()=>{
        setTheme((prev) => prev === 'dark'? 'light':'dark');
    }

    return(
        <ThemeProvider value={{theme, toggleTheme}}>
            {children}
        </ThemeProvider>
    )
}

export const useTheme = () => {// what is this?
    return useContext(themeContext);
}

export default ThemeContext;
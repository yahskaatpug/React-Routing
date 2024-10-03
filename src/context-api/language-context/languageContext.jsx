import { useContext } from "react";
import { createContext, useState } from "react";

export const langContext = createContext(null);
export const LangProvider = langContext.Provider;

const LangContext = ({children}) => {
    const [lang, setLang] = useState('Hindi');

    const langList = ['English', 'Hindi', 'French', 'Chinese'];

   

    return(
        <LangProvider value={{lang, langList, setLang}}>{children}</LangProvider>
    )
}

export const useLang = () => {
    return useContext(langContext);
}

export default LangContext;
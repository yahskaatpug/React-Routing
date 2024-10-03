// import { useContext } from "react";
// import { themeContext } from "./themeContext";
import { useLang } from "../language-context/languageContext";
import Header from "./header";
import { useTheme } from "./themeContext";

const Home = ()=>{

    const {toggleTheme} = useTheme();
    const {lang} = useLang();

    return(
        <>
        <Header/>
        <h1>I'm home page</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <p>Selected value: {lang}</p>
        </>
    )
}

export default Home;
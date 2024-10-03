// import { useContext } from "react";
// import { themeContext } from "./themeContext";
import Header from "./header";
import { useTheme } from "./themeContext";

const Home = ()=>{
    //const {toggleTheme } = useContext(themeContext);
    const {toggleTheme} = useTheme();

    return(
        <>
        <Header/>
        <h1>I'm home page</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    )
}

export default Home;
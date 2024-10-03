import { useLang } from "../language-context/languageContext";
import { useProfile } from "../profile-context/profileContext";
import { themeContext, useTheme } from "./themeContext";



const Header = () => {
    // const { theme, toggleTheme } = useContext(themeContext);
    const {theme, toggleTheme} = useTheme();
    const {profile} = useProfile();
    const {lang, langList, setLang} = useLang();
    console.log("profile :", profile);

    const onChangeLang = (event) => {
        setLang(event.target.value);
    }

    return (
        <div>
            <p>profile: {profile.name}</p>
        <select value={lang} onChange={onChangeLang}>
            {langList.map((language, index) => (
                <option key={index} value={language}>
                {language}
                </option>
            ))}
        </select>
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Change to dark':'Change to light'}
        </button>
        </div>
    )
}

export default Header;
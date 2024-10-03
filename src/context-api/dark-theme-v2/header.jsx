import { themeContext, useTheme } from "./themeContext";

const Header = () => {
    // const { theme, toggleTheme } = useContext(themeContext);
    const {theme, toggleTheme} = useTheme();

    return (
        <div>
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Change to dark':'Change to light'}
        </button>
        </div>
    )
}

export default Header;
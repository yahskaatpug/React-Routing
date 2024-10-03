import { useContext } from "react";
import { createContext, useState } from "react";

export const profileContext = createContext(null);
export const ProfileProvider = profileContext.Provider;

const ProfileContext = ({children}) => {
    const [profile, setProfile] = useState({
        name:"Akshay",
        city: "Mandsaur"
    });

    return(
        <ProfileProvider value={{profile}}>{children}</ProfileProvider>
    )
}

export const useProfile = () => {
    return useContext(profileContext);
}

export default ProfileContext;
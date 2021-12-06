import { createContext,useState } from "react";

export const UserContext = createContext(false);

export const UserProvider = ({defaultValue=[],children})=>{
    const [userName,setUserName] = useState(defaultValue);
    const [userLogin,setUserLogin] = useState(false);
    const [email,setEmail] = useState('');

    const clearUser=()=> setUserName([]);
    const loginUser=(user)=> setUserName(user);
    const isLoginUser=(estado)=> setUserLogin(estado);
    const putEmail=(email)=> setEmail(email);



    return(
        <UserContext.Provider value={{userName,clearUser,loginUser,isLoginUser,userLogin,putEmail,email}}>
           {children}
        </UserContext.Provider>
    )

}
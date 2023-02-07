import { createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({children, value}){
    const [user,setUser] = useContext();
    const [token,setToken] = useContext();

    //toda vez que a aplicação for carregada useEffect verifica se o usuario esta logado
    useEffect(()=>{
        const userToken = localStorage.getItem("user_token");
        const user = localStorage.getItem("user");

        if(!!userToken && !!user){
            const hasUser = JSON.parse(user);
            setUser(hasUser);
            setToken(userToken);
        }

    },[]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue(){
    return useContext(AuthContext);
}
import { createContext , useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [userName , setUserName] = useState(null);

  const login = (name) => {
      setUserName(name);
      localStorage.setItem("username",name)
  }
  const logout = () => {
    setUserName(null);
    localStorage.removeItem("username");
  };
    return (
    <AuthContext.Provider value={{userName , login , logout}}>
        {children}
    </AuthContext.Provider>
  )
}
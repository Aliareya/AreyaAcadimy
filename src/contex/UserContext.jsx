import { createContext , useContext , useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user , setUser] = useState(()=>{
    const store = localStorage.getItem("acadimy_user");
    return store || []
  })


  return(
    <UserContext.Provider value={{user , setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext);
}
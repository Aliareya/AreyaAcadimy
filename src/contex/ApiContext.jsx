import { createContext , useContext , useState } from "react";

const ApiContext = createContext();

export const ApiProvider = ({children}) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <ApiContext.Provider value={{apiUrl}}>
      {children}
    </ApiContext.Provider>
  )
}

export const useAPI = ()=>{
  return useContext(ApiContext);
}


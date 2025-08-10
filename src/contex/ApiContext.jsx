import { createContext , useContext , useState } from "react";

const ApiContext = createContext();

export const ApiProvider = ({children}) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const imageurl = import .meta.env.VITE_IMAGE_URL;
  const token = localStorage.getItem("token");

  return (
    <ApiContext.Provider value={{apiUrl , imageurl , token}}>
      {children}
    </ApiContext.Provider>
  )
}

export const useAPI = ()=>{
  return useContext(ApiContext);
}


import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [acdimytoken , setAcadimyToken] = useState(()=>{
    const token = localStorage.getItem("acadimy_token")
    return token || null
  })

  const FectUser = () =>{
    axios.get("http://localhost/acadimy/api/users/singleuser.php",{
      headers:{
        "Authorization" : `Bearer ${acdimytoken}`
      }
    })
    .then((res)=>{
      setUser(res?.data?.user)
    })
    .catch((err)=>{
      console.log("fetch err",err)
    })
  }


  useEffect(()=>{
   setAcadimyToken(localStorage.getItem("acadimy_token"));
   FectUser();
  },[acdimytoken])

  return (
    <UserContext.Provider value={{ user, setUser, FectUser ,acdimytoken , setAcadimyToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

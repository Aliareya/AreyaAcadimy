import axios from "axios";
import { createContext , useContext , useState } from "react";

const ApiContext = createContext();

export const ApiProvider = ({children}) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const imageurl = import .meta.env.VITE_IMAGE_URL;
  const token = localStorage.getItem("token");
  const [isLogin , setLogin] = useState(()=>{
    const store = localStorage.getItem("token");
    return store ? true : false;
  });

  function checkLogin(tok){
    axios.get(`${apiUrl}/auth/checkLogin.php`,{
      headers:{
        "Authorization" : `Bearer ${tok}`
      }
    })
    .then((res)=>{
      setLogin(res.data.islogin);
      console.log("check token res", res.data.islogin);
    })
    .catch((err)=>{
      setLogin(res.data.islogin);
      console.log("check token err",err)
    })
  }

  return (
    <ApiContext.Provider value={{apiUrl , imageurl , token , checkLogin ,isLogin}}>
      {children}
    </ApiContext.Provider>
  )
}

export const useAPI = ()=>{
  return useContext(ApiContext);
}


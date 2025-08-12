import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../contex/UserContext";

function AdminRoute({ children }) {
  const navigate = useNavigate();
  const {user , FectUser , acdimytoken} = useUser();
  const [isAuthorized, setIsAuthorized] = useState(null);

   useEffect(()=>{
      FectUser();
    },[]);


  useEffect(() => {
  if (user && user.role && acdimytoken !== undefined) {
    if (acdimytoken && user.role === "admin") {
      setIsAuthorized(true);
    } else {
      navigate("/notfound");
    }
  }
}, [user, acdimytoken, navigate]);


  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return children;
}

export default AdminRoute;

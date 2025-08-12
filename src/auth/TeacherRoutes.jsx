import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../contex/UserContext";

function TeacherRoutes({ children }) {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const {user} = useUser();
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("acadimy_token");

    if (!token || user.role !== "teacher") {
      navigate("/notfonud")
      return;
    }
    
    // if(user.role !== "teacher"){
    //   return;
    // }
    setIsAuthorized(true)

  }, [navigate]);

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return children;
}

export default TeacherRoutes;

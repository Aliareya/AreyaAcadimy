import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useAPI } from "./ApiContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { apiUrl, token } = useAPI();

  const [user, setUser] = useState(() => {
    const store = JSON.parse(localStorage.getItem("acadimy_user"));
    return store || null; // null is better for no user
  });

  // const fetchUser = () => {
  //   axios.get(`${apiUrl}/users/SingleUser.php`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //     if (res.data.success) {
  //       setUser(res.data.data);
  //       localStorage.setItem("acadimy_user", JSON.stringify(res.data.data));
  //     } else {
  //       // handle token invalid or other errors
  //       setUser(null);
  //       localStorage.removeItem("acadimy_user");
  //     }
  //   })
  //   .catch((err) => {
  //     console.error("Fetch user error:", err);
  //     setUser(null);
  //     localStorage.removeItem("acadimy_user");
  //   });
  // };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

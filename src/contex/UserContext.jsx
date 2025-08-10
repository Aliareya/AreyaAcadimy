import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useAPI } from "./ApiContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { apiUrl } = useAPI();

  // تابع امن برای خواندن و Parse کردن JSON از localStorage
  const safeGetUser = () => {
    try {
      const raw = localStorage.getItem("acadimy_user");
      // اگر چیزی ذخیره نشده یا مقدارش اشتباه باشه
      if (!raw || raw === "undefined" || raw === "null") {
        return {}; // کاربر پیش‌فرض خالی
      }
      return JSON.parse(raw);
    } catch (e) {
      console.error("خطا در parse کردن acadimy_user از localStorage:", e);
      return {};
    }
  };

  const [user, setUser] = useState(safeGetUser);

  const Fetchuser = () => {
    if (!user.id) return;
    console.log(user?.id) // اگر ایمیل نداشت درخواست نفرست

    axios
      .get(`http://localhost/acadimy/api/users/singleuser.php?id=${user?.id}`)
      .then((res) => {
        if (res.data?.user) {
          console.log(res)
          setUser(res.data?.user);
          localStorage.setItem(
            "acadimy_user",
            JSON.stringify(res.data?.user)
          );
        } else {
          console.log("هیچ اطلاعات کاربری از API دریافت نشد");
        }
      })
      .catch((err) => {
        console.log("خطا در گرفتن اطلاعات کاربر:", err);
      });
  };

  return (
    <UserContext.Provider value={{ user, setUser, Fetchuser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

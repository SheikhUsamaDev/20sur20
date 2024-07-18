// import { useState, useEffect } from 'react';

// export function useAuth() {
//     const [isAuthenticated, setIsAuthenticated] = useState(true);
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         // Check if the user is already authenticated
//         let access = sessionStorage.getItem('app-access-token');
//         if (access) access = JSON.parse(access)
//         if (access?.token && access?.expires) {
//             // Extract the expiration date and time for the access token
//             const accessExpiration = new Date(access.expires).getTime();
//             // Get the current date and time
//             const currentDate = new Date().getTime();
//             // Compare the current date and time with the access token expiration
//             if (currentDate > accessExpiration) {
//                 // Token has expired, user is not authenticated
//                 setIsAuthenticated(false);
//                 setUser(null);
//                 sessionStorage.removeItem('app-access-token');
//             } else {
//                 // Token is valid, user is authenticated
//                 setIsAuthenticated(true);
//                 let user = sessionStorage.getItem('user');
//                 if (user) user = JSON.parse(user)
//                 setUser(user);
//             }
//         } else {
//             // No token found, user is not authenticated
//             setIsAuthenticated(false);
//             setUser(null);
//         }
//     }, []);

//     return { isAuthenticated, user };
// }
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authenticateAsyncThunk } from "../store/pagesSlices/authSlice";
import { useDispatch, useSelector } from "react-redux";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const router = useNavigate();

  // const d = useDispatch();

  // useEffect(() => {
  //   d(authenticateAsyncThunk());
  // }, []);
  // const userData = useSelector((s) => s.auth?.user);

  // useEffect(() => {
  //   if (userData) {
  //     if (location.pathname === "/login" || location.pathname === "/signup") {
  //       router("/home");
  //     }
  //     setUser(userData);
  //   } else {
  //     setIsAuthenticated(false);
  //     setUser(null);
  //   }
  // }, [userData]);

  useEffect(() => {
    const access = sessionStorage.getItem("app-access-token");
    const user = sessionStorage.getItem("user");

    if (access && user) {
      try {
        const parsedAccess = JSON.parse(access);
        const { expires } = parsedAccess;
        const accessExpiration = new Date(expires).getTime();
        const currentDate = new Date().getTime();

        if (currentDate < accessExpiration) {
          setIsAuthenticated(true);
          setUser(JSON.parse(user));
          if (
            location.pathname === "/login" ||
            location.pathname === "/signup"
          ) {
            router("/home");
          }
        } else {
          setIsAuthenticated(false);
          setUser(null);
          sessionStorage.removeItem("app-access-token");
          sessionStorage.removeItem("user");
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        sessionStorage.removeItem("app-access-token");
        sessionStorage.removeItem("user");
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  return { isAuthenticated, user };
}

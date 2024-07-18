// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import { useAuth } from './useAuth.jsx'; // Custom hook for authentication

// export function useProtectedRoute() {
//   const router = useRouter();
//   const { isAuthenticated } = useAuth();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push('/login'); // Redirect unauthenticated users to login page
//     }
//   }, [isAuthenticated, router]);
// }

// import { useRouter } from 'next/router';
import { useEffect } from "react";
import { useAuth } from "./useAuth.jsx"; // Custom hook for authentication
import { useNavigate } from "react-router-dom";

export function useProtectedRoute() {
  const router = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router("/login"); // Redirect unauthenticated users to login page
    }
  }, [isAuthenticated, router]);
}

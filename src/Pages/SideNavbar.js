import React from "react";
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LA_COMMUNAUTE from "./La_communaute";
import Feed_personnel from "./Feed_communicate";
import ENTER_THE_MATRIX from "./Enter_The_Matrix";
import COMPTES from "./COMPTES";
import PROFILE_ADMIN from "./PROFILE_ADMIN";
import Coins from "./Coins";
import { useProtectedRoute } from "../hook/protect-route";
import NOTICE_LEGALE from "./NOTICE_LEGALE";
import UTILISATION from "./UTILISATION";
import COOKIES from "./COOKIES";
import { useSelector } from "react-redux";

import Matrix_Image from "./Matrix_image";
import Matrix_chat from "./Matrix_chat";

export default function SideNavbar() {
  useProtectedRoute();
  const { user } = useSelector((s) => s.auth);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="Sidenavbar">
      <div className="row">
        <div className="side_bar">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            {/* <Route path="*" element={<ProtectedRoutes />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/community" element={<LA_COMMUNAUTE />} />
            <Route path="/feeds" element={<Feed_personnel />} />
            <Route path="/text-image" element={<ENTER_THE_MATRIX />} />
            <Route path="/account" element={<COMPTES />} />
            <Route path="/profile-admin" element={<PROFILE_ADMIN />} />
            <Route path="/coins" element={<Coins />} />
            {/* <Route path="/matrix" element={<Matrix_chat />} /> */}
            <Route path="/matrix-image" element={<Matrix_Image />} />
            {user&&<>
            <Route path="/notice-legale" element={<NOTICE_LEGALE />} />
            <Route path="/utilisation" element={<UTILISATION />} />
            <Route path="/cookies" element={<COOKIES />} />
            </>}
          </Routes>
        </div>
      </div>
    </div>
  );
}

// const ProtectedRoutes = () => {
  // useProtectedRoute();
  // return (
  //   <Routes>
  //     <Route path="/home" element={<Home />} />
  //     <Route path="/community" element={<LA_COMMUNAUTE />} />
  //     <Route path="/feeds" element={<Feed_personnel />} />
  //     <Route path="/text-image" element={<ENTER_THE_MATRIX />} />
  //     <Route path="/account" element={<COMPTES />} />
  //     <Route path="/profile-admin" element={<PROFILE_ADMIN />} />
  //     <Route path="/coins" element={<Coins />} />
  //     {/* <Route path="/matrix" element={<Matrix_chat />} /> */}
  //     <Route path="/matrix-image" element={<Matrix_Image />} />
  //   </Routes>
  // );
// };

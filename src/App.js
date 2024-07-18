import "./GlobalStyle.scss";
import "./Responsive.scss";
import "./ENTER_THEMATRIX-MODELresponsive.scss";
import "./ENTER_THEMATRIX-MODEL.scss";
import SideNavbar from "./Pages/SideNavbar";
import Login from "./Pages/auth/Login";
import Signup from "./Pages/auth/Signup";
import Modal_page from "./Pages/Modal_page";
import Actual_page from "./Pages/Actual_page";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import "./ENTER_THEMATRIX-MODEL.scss";
import "./ENTER_THEMATRIX-MODELresponsive.scss";
import Prizingtop from "./Components/prizingtop";
import Annuel from "./Components/Annuel";
import Mensuel from "./Components/Mensuel";
import Matrix_chat from "./Pages/Matrix_chat";
import NOTICE_LEGALE from "./Pages/NOTICE_LEGALE";
import UTILISATION from "./Pages/UTILISATION";
import COOKIES from "./Pages/COOKIES";
import Success from "./Pages/success";
import { useEffect } from "react";
import { authenticateAsyncThunk } from "./store/pagesSlices/authSlice";

function App() {
  const { user } = useSelector((s) => s.auth);
  console.log("🚀 ~ App ~ user>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>:", user)

  const d = useDispatch();
  useEffect(() => {
    d(authenticateAsyncThunk());
  }, []);

  // const users = sessionStorage.getItem("user");
  console.log("Hello",user)
  return (
    <div className="App">
      <ToastContainer />
      {/* <Prizingtop/> */}
      <Routes>
        <Route path="*" element={<SideNavbar />} />
      {!Object?.keys(user)?.length&&<>
        <Route path="/notice-legale" element={<NOTICE_LEGALE />} />
        <Route path="/utilisation" element={<UTILISATION />} />
        <Route path="/cookies" element={<COOKIES />} />
      </>
      }
        <Route path="/" element={<Actual_page />} />
        <Route path="/modal" element={<Modal_page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/annuel" element={<Annuel />} />
        <Route path="/mensuel" element={<Mensuel />} />
        <Route path="/pricing" element={<Prizingtop />} />
        <Route path="/chat" element={<Matrix_chat />} />
        <Route path="/chat/:id" element={<Matrix_chat />} />


        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import defaultImg from "../Images/section6.png";

// reac-bootstrap
import { OverlayTrigger, Tooltip } from "react-bootstrap";

// React Icons
import { FaCoins } from "react-icons/fa";
import { LiaBoxesSolid } from "react-icons/lia";
import { GiArcheryTarget } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaBalanceScaleLeft } from "react-icons/fa";

// MUI
import CookieIcon from "@mui/icons-material/Cookie";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// Router
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAsyncThunk } from "../store/pagesSlices/authSlice";
import { Button } from "react-bootstrap";

const Sidebar = () => {
  const [active, setActive] = useState("/home");
  const [myAvatar, setMyAvatar] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const router = useNavigate();
  const user = useSelector((state) => state?.auth?.user);

  console.log("user--sidebar", user);
  const prfileImg = `${process.env.REACT_APP_basePath}${user?.avatar}`;
  console.log("prfileImg-----", prfileImg);
  // console.log('myAvatar--', myAvatar)

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip " {...props} className="custom-tooltip">
      <p>{user?.userName}</p>
    </Tooltip>
  );
  console.log(location);
  useEffect(() => {
    setActive(location.pathname);
    setMyAvatar(user?.avatar);
  }, []);
  const handleLogout = () => {
    const refreshToken = JSON?.parse(sessionStorage?.getItem("app-refresh-token"));
    dispatch(userLogoutAsyncThunk({ refreshToken, router }));
  };

  
    let userlocal = useSelector((state) => state.auth?.user);
;
  console.log("🚀 ~ Sidebar ~ userlocal:", userlocal)


  return (
    <div className="Sidebar">
      <Link to="/home" className="navbar-brand">
        <img src={"/Images/Ellipse 14.jpg"} className="rounded-pill"></img>
        <p>MORPHEUS.AI</p>
      </Link>

      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/annuel" className="box">
              <span className="me-2">{userlocal?.total_points_earned || 0}</span> <FaCoins size={16} />{" "}
              <span className="ms-2">|</span>{" "}
              <span className="ms-2 me-1">PILULE BLEU </span>
              <BubbleChartIcon fontSize="20px" htmlColor="#375BFF" />
            </Link>
            <div className="scrollbar-box">
              <div className="flex-box">
                <p>Commencer ici:</p>
                <Link
                  to="/home"
                  onClick={() => setActive("/home")}
                  className={active == "/home" ? "active" : "Sidebar_link"}
                >
                  <GiArcheryTarget size={16} />
                  <span className="ms-2">HOME</span>
                </Link>
                <Link
                  to="/community"
                  onClick={() => setActive("/community")}
                  className={active == "/community" ? "active" : "Sidebar_link"}
                >
                  <LuLayoutDashboard size={16} />
                  <span className="ms-2">LA_COMMUNAUTE</span>{" "}
                </Link>
                <Link
                  to="/feeds"
                  onClick={() => setActive("/feeds")}
                  className={active == "/feeds" ? "active" : "Sidebar_link"}
                >
                  <LiaBoxesSolid size={16} />
                  <span className="ms-2">FEED_PERSONNEL</span>
                </Link>
                <Link
                  to="/chat"
                  onClick={() => setActive("/chat")}
                  className={active == "/chat" ? "active" : "Sidebar_link"}
                >
                  {" "}
                  <AutoAwesomeIcon fontSize="16px" />{" "}
                  <span className="ms-2">ENTER_THE_MATRIX</span>
                </Link>
              </div>
              <div className="flex-box">
                <p>Informations Legales</p>
                <Link
                  to="/notice-legale"
                  onClick={() => setActive("/notice-legale")}
                  className={
                    active == "/notice-legale" ? "active" : "Sidebar_link"
                  }
                >
                  <FaBalanceScaleLeft fontSize="16px" />
                  <span className="ms-2">NOTICE_LEGALE</span>
                </Link>
                <Link
                  to="/utilisation"
                  onClick={() => setActive("/utilisation")}
                  className={
                    active == "/utilisation" ? "active" : "Sidebar_link"
                  }
                >
                  <InsertPhotoIcon fontSize="16px" />{" "}
                  <span className="ms-2">UTILISATION</span>
                </Link>
                <Link
                  to="/cookies"
                  onClick={() => setActive(7)}
                  className={active == 7 ? "active" : "Sidebar_link"}
                >
                  <CookieIcon fontSize="16px" />
                  <span className="ms-2">COOKIES</span>
                </Link>
              </div>
              <div className="flex-box">
                <p>Parametres</p>
                <Link
                  to="/account"
                  onClick={() => setActive("/account")}
                  className={active == "/account" ? "active" : "Sidebar_link"}
                >
                  <SettingsIcon fontSize="16px" />{" "}
                  <span className="ms-2">COMPTES</span>
                </Link>
                {user?.role == "admin" && (
                  <Link
                    to="/profile-admin"
                    onClick={() => setActive("/profile-admin")}
                    className={
                      active == "/profile-admin" ? "active" : "Sidebar_link"
                    }
                  >
                    <AdminPanelSettingsIcon fontSize="16px" />{" "}
                    <span className="ms-2">PROFILE_ADMIN</span>
                  </Link>
                )}
              </div>
            </div>
            <div className="bottom_content">
              <Button className="logout_btn" onClick={handleLogout}>
                <ArrowCircleLeftIcon fontSize="16px" className="me-2" />
                <span className="">SE_DECONNECTER</span>{" "}
              </Button>
              <div className="dropdown">
                <button className="dropbtn " style={{ padding: "0" }}>
                  <div className="profile_details">
                    {/* {console.log("myAvator", myAvatar)} */}

                    <img src={prfileImg} className="rounded-pill" />

                    <OverlayTrigger placement="top" overlay={renderTooltip}>
                      <span className="b">@{user?.userName}</span>
                    </OverlayTrigger>
                  </div>
                </button>
                <div className="dropdown-content">
                  <Link
                    to="/comptes"
                    onClick={() => setActive("/comptes")}
                    className={active == "/comptes" ? "active" : "Sidebar_link"}
                  >
                    <SettingsIcon fontSize="16px" />{" "}
                    <span className="ms-2">COMPTES</span>
                  </Link>
                  <Link
                    to="/profile"
                    onClick={() => setActive("/profile")}
                    className={active == "/profile" ? "active" : "Sidebar_link"}
                  >
                    <AdminPanelSettingsIcon fontSize="16px" />{" "}
                    <span className="ms-2">PROFILE_ADMIN</span>
                  </Link>
                  <p>
                    <span className="">Log out</span>
                  </p>
                </div>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;

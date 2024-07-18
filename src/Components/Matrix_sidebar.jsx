import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// ENTER_THEMATRIX-MODEL.scss
import KeyboardBackspaceTwoToneIcon from "@mui/icons-material/KeyboardBackspaceTwoTone";

// reac-bootstrap
import { OverlayTrigger, Tooltip } from "react-bootstrap";

// React Icons
import { FaCoins } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

// MUI
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

// Router
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSingleChatAsyncThunk,
  getAllChatsAsyncThunk,
  resetChatId,
  setChat,
} from "../store/pagesSlices/chatsSlice";
import { useEffect } from "react";
import ConfirmationModal from "./Modal";

const Matrix_sidebar = ({ generateChatLink, id }) => {
  const user = useSelector((state) => state.auth.user);
  const chats = useSelector((state) => state.chat.chats.results);
  const [show, setShow] = useState(false);
  const [id1, setId] = useState("");
  const router = useNavigate();
  console.log(chats);
  const dispatch = useDispatch();
  const newChat = () => {
    dispatch(resetChatId());
    router("/chat");
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip " {...props} className="custom-tooltip">
      <p>{user?.userName}</p>
    </Tooltip>
  );
  const handleRemoveChat = async () => {
    try {
      await dispatch(deleteSingleChatAsyncThunk({ id1 }));
      if (id === id1) {
        dispatch(resetChatId());
        router("/chat");
      }
      setId("");
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const [originalText, setOriginalText] = useState(user?.userName);
  // const [displayText, setDisplayText] = useState(originalText);

  // useEffect(() => {
  //   const words = originalText?.split(" ");
  //   const slicedText = words?.join(" ").slice(0, 8) + " " + "...";
  //   setDisplayText(slicedText);
  // }, [originalText]);

    let userlocal = useSelector((state) => state.auth?.user);
;

  return (
    <div className="matrix_sidebar">
      <ConfirmationModal
        show={show}
        setShow={setShow}
        heading={"Delete Confirmation"}
        btnText={"Accept"}
        text={"Are you sure! you want to delete chat?"}
        handleClick={handleRemoveChat}
      />
      <div className="Back_box d-lg-flex d-none">
        <div className="icon-box">
          <Link to="/home">
            {" "}
            <KeyboardBackspaceTwoToneIcon />
          </Link>
        </div>
        <div>
          <Link to="/home">
            <p>Retour</p>
          </Link>
        </div>
      </div>
      <Link to="/home" className="navbar-brand ">
        <img src={"/Images/Ellipse 14.jpg"} className="rounded-pill"></img>
        <p>MORPHEUS.AI</p>
      </Link>

      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/annuel" className="box">
              <span className="me-1">{userlocal?.total_points_earned || 0}</span> <FaCoins size={16} />{" "}
              <span className="ms-1">|</span>{" "}
              <span className="mx-1">PILULE BLEU </span>
              <BubbleChartIcon fontSize="20px" htmlColor="#375BFF" />
            </Link>
            <div className="">
              <Button
                variant="success"
                to={"/chat"}
                onClick={newChat}
                className="btn9 w-100"
              >
                + Nouveau chat
              </Button>
            </div>
            <div className="scrollbar-box">
              <div className="flex-box">
                <p>Aujourd'hui</p>
                {chats
                  ?.slice()
                  ?.reverse()
                  ?.map((chat) => (
                    <Button className="chat-comu">
                      <Link to={"/chat/" + chat?.id} className="flex-grow-1 text-start">{chat?.title}</Link>
                      <span className="del-icon">
                        <MdDelete
                          size={20}
                          onClick={() => {
                            setId(chat?.id);
                            setShow(true);
                          }}
                          className="delete_icon"
                        />
                      </span>
                    </Button>
                  ))}
              </div>
            </div>

            <div className="bottom_content">
              <Link to="">
                <ArrowCircleLeftIcon fontSize="16px" className="me-2" />
                <span className="">SE_DECONNECTER</span>{" "}
              </Link>
              <div className="dropdown">
                <button className="dropbtn">
                  <div className="profile_details">
                    <img
                      src={
                        `${process.env.REACT_APP_basePath}${user?.avatar}` ||
                        "/Images/Ellipse 14.jpg"
                      }
                      className="rounded-pill"
                    ></img>
                    <OverlayTrigger placement="top" overlay={renderTooltip}>
                        {/* <p>@{displayText}</p> */}
                        <span className="b">@{user?.userName}</span>
                    </OverlayTrigger>
                  </div>
                </button>
                <div className="dropdown-content">
                  <Link to="/comptes">
                    <SettingsIcon fontSize="16px" />{" "}
                    <span className="ms-2">COMPTES</span>
                  </Link>
                  <Link to="/profile">
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

export default Matrix_sidebar;

import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { FaLocationArrow } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import Matrix_top from "../Components/Matrix_top";
import { useSelector, useDispatch } from "react-redux";
// import { useState, useEffect } from "react";

import {
  createChatAsyncThunk,
  getAllChatsAsyncThunk,
  getSingleChatAsyncThunk,
  setLoading,
  updateChatAsyncThunk,
} from "../store/pagesSlices/chatsSlice";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Matrixchat = () => {
  const user = useSelector((state) => state?.auth?.user);

  console.log("user--sidebar", user);
  const prfileImg = `${process.env.REACT_APP_basePath}${user?.avatar}`;
  const [content, setContent] = useState("");
  const [model, setModel] = useState("gpt3");
  const [showButtons, setShowButtons] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat.chat);
  const chats = useSelector((state) => state.chat.chats);
  console.log("Chat data", chat);
  const loading = useSelector((state) => state.chat.isLoading);
  const navigate = useNavigate();
  console.log("loading>>>>>>>>>>>>>>>>>", loading);
  const listRef = useRef();
  // const toggleButtons = () => {
  //   setShowButtons(!showButtons);
  // };
  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView();
  }, [chat?.messages]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      dispatch(setLoading(true));
      if (chat && chat?.id) {
        dispatch(
          updateChatAsyncThunk({ data: { content, model }, id: chat?.id })
        );
        setContent("");
        dispatch(setLoading(false));

      } else {
        dispatch(
          createChatAsyncThunk({
            content,
            model,
            cb: (res) => {
              console.log("res>>>>>>chat>>>>>", res);
              navigate("/chat/" + res?.chat?.id);
            },
          })
        );
        setContent("");
        dispatch(setLoading(false));
      }
    }
    // toggleButtons();
  };

  useEffect(() => {
    if (id) {
      dispatch(getSingleChatAsyncThunk(id));
    }
  }, [id]);


  let userlocal = useSelector((state) => state.auth?.user);
  console.log("🚀 ~ 12312321 ~ userlocal:", userlocal)

  return (
    <div className="Enter_The_MATRIX">
      <div>
        <Matrix_top />
      </div>
      <div className="fixed">
        <div className="chat_section">
          <div className="scroll-down" ref={listRef}>
            {chat && chat?.messages && id
              ? chat?.messages?.map((message) => (
                <>
                  {message?.role === "user" ? (
                    <div className="user_text">
                      <img src={prfileImg} className=""></img>
                      <div className="user_textp">
                        <p>{message?.content}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="AI_text">
                      <img src={"/Images/logo.png"} className=""></img>
                      <div className="user_textp">
                        <p>{message?.content}</p>
                      </div>
                    </div>
                  )}
                </>
              ))
              : null}
          </div>
        </div>

        <div className="Position-box-2">
          <div className="Button-box">
            <div className="Border-box">
              <div>
                <div className="sm-text">Style de response</div>
                <div className="lg-text">Serieux</div>
              </div>
            </div>
            <div className="Border-box">
              <div className="flex-box-9">
                <div>
                  <div className="sm-text">Votre forfait</div>
                  <div className="lg-text">Not Awake</div>
                </div>
                <div>
                  <Link to="/annuel">
                    {" "}
                    <button>Upgrade</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="Border-box">
              <div>
                <div className="sm-text">Mode Avance</div>
                <Form.Select
                  size="sm"
                  onChange={(e) => setModel(e.target.value)}
                >
                  <option value={"gpt3"}>GPT</option>
                  <option value={"lama"}>LAMA</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <Form onSubmit={onSubmit}>
            <div className="Form_box row">
              <div className="col-sm-11">
                <InputGroup className="">
                  <InputGroup.Text id="basic-addon1">
                    <AutoAwesomeIcon fontSize="10px" />{" "}
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="TAPEZ VOTRE PROMPT"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </InputGroup>
              </div>
              <div className="BUTTONS col-sm-1">
                <div className="button_box">
                  {loading ? (
                    <Spinner />
                  ) : (
                    <Button className="btn-7" onClick={onSubmit}>
                      <span className="d-sm-flex d-none">
                        <FaLocationArrow />
                      </span>
                      <span className="d-sm-none d-flex">GÉNÉRER L’IMAGE</span>
                    </Button>
                  )}
                </div>
               {/* <div className="d-sm-flex d-none">
                  <p>
                    {userlocal?.total_points_earned} <FaCoins size={16} />
                  </p>
                </div> */}
              </div>
            </div>
            <div className="Btns d-sm-flex d-none" >
              <Button className="Btn-2 ">bard</Button>
              <Button className="Btn-2">bard</Button>
              <Button className="Btn-2">GPT</Button>
              <Button className="Btn-2 active">LAMA</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Matrixchat;

import React, { useEffect } from "react";
import Matrixchat from "../Components/Matrixchat";
import { useProtectedRoute } from "../hook/protect-route";
import Matrix_sidebar from "../Components/Matrix_sidebar";
import { getAllChatsAsyncThunk } from "../store/pagesSlices/chatsSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function Matrix_chat() {
  useProtectedRoute();
  const dispatch = useDispatch();
  const generateChatLink = (chatId) => {
    // console.log(window.location.origin);
    return `${window.location.origin}/chat/${chatId}`;
  };
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAllChatsAsyncThunk());
  }, [id]);
  return (
    <div className="chat_sidebar" style={{ overflow: "hidden" }}>
      <div className="row">
        <div className="side_bar">
          <Matrix_sidebar id={id} generateChatLink={generateChatLink} />
        </div>
        <div className="content">
          <Matrixchat />
        </div>
      </div>
    </div>
  );
}

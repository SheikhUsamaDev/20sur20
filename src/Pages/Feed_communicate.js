import React from "react";
import { GiArcheryTarget } from "react-icons/gi";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import {
  getImagesAsyncThunk,
  getLikedImagesAsyncThunk,
  getUserImagesAsyncThunk,
  imageLikesAsyncThunk,
} from "../store/pagesSlices/generativeSlice";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Material UI
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// react_icons
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Feed_personnel() {
  const [isCopied, setIsCopied] = useState(-1);
  const [likedView, setLikedView] = useState(false);

  const [input, setinput] = useState("");

  const handleChange = (value) => {
    setinput(value);
  };
  const images = useSelector((s) => s.imageToImage.userImages);
  const likedImages = useSelector((s) => s.imageToImage.likedImages);
  const loading = useSelector(
    (state) => state.imageToImage.loadings.userImages
  );
  const d = useDispatch();
  const user = useSelector((s) => s.auth.user);
  const token = JSON.parse(sessionStorage.getItem("app-access-token")).token;
  console.log(images);
  const getImages = () => {
    d(getUserImagesAsyncThunk({ token }));
  };
  useEffect(() => {
    getImages();
  }, []);

  const getLikedImages = () => {
    d(getLikedImagesAsyncThunk({ token }));
    setLikedView(true);
  };
  const handleLike = async (like, imageId) => {
    console.log(like, token);
    await d(imageLikesAsyncThunk({ token, like, imageId }));
    getLikedImages();
  };
  const handleCopy = (index, prompt) => {
    const promptText = prompt;
    // Create a temporary textarea
    const textarea = document.createElement("textarea");
    textarea.value = promptText;
    document.body.appendChild(textarea);

    // Select and copy the text using the Clipboard API
    textarea.select();
    try {
      document.execCommand("copy");
      setIsCopied(index);
      setTimeout(() => setIsCopied(-1), 1000);
    } catch (err) {
      console.error("Unable to copy text:", err);
      // setIsCopied(false);
    } finally {
      // Remove the temporary textarea
      document.body.removeChild(textarea);
    }
  };
  return (
    <div>
      <div className="FEED_PERSONNEL">
        <div className="Box">
          <h1>FEED_PERSONNEL</h1>
        </div>

        <div>
          <div className="flex-box-5">
            <div>
              <p>
                <Button className="btn-5 active" onClick={() => setLikedView(false)} >
                  MES CREATIONS
                </Button>
              </p>
            </div>
            <div>
              <p>
                <Button className="btn-5">CREATION OF MES FOLLOWERS</Button>
              </p>
            </div>
            <div>
              <p>
                <Button className="btn-5" onClick={getLikedImages}>
                  CREATION LIKES
                </Button>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex-box">
            <div className="flex-grow-1">
              <p className="d-flex align-items-center">
                <GiArcheryTarget size={16} />
                <div className="search_inp">
                  <form action="#">
                    <input type="text" className="form-control" placeholder='RECHERCHER'/>
                    <button className='form-btn'>Rechercher</button>
                  </form>
                </div>
              </p>
            </div>
            {/* <div>
              <Button className="btn-3 d-sm-flex d-none" onClick={getImages}>
                Rechercher
              </Button>
            </div>
            <div className="search-icon" onClick={getImages}>
              <BsSearch />
            </div> */}
          </div>
        </div>
        <div className="spinner-container">
          {loading && images.length == 0 ? (
            <Spinner />
          ) : likedView ? (
            <div className="row">
              {likedImages.length == 0 ? (
                <p>No images are available.</p>
              ) : (
                likedImages.map((obj, index) => (
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="img_icon">
                      {/* <img
                      src={`${process.env.REACT_APP_basePath}${obj?.path}`}
                    /> */}
                      <LazyLoadImage
                        alt="Something Went Wrong"
                        src={`${process.env.REACT_APP_basePath}${obj?.path}`}
                        width={"100%"}
                        effect="blur"
                        placeholderSrc={`${process.env.REACT_APP_basePath}${obj?.path}`}
                      />

                      <a
                        href={`${process.env.REACT_APP_basePath}download/${obj?.path}`}
                        target="_blank"
                        download={"image.png"}
                      >
                        <span className="download_icon">
                          {/* <FileDownloadIcon /> */}
                          <a href="#"> <img src={"/Images/download-down-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>

                        </span>
                      </a>
                      <span className="download_icon like-btn"
                        onClick={() =>
                          handleLike(obj?.likedBy?.includes(user?.id), obj._id)
                        }
                      >
                       {obj?.likedBy.includes(user?.id) ? (
                          // <FaHeart color="red" className="like_icon" />
                          <a href="#"><img src={"/Images/like-heart-white-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>
                        ) : (
                          // <FaRegHeart className="like_icon" />
                          <a href="#"><img src={"/Images/like-heart-white-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>
                        )}
                      </span>
                      <div className="users_data">
                        <div className="user">
                          <span>
                            {/* <FaUser className="user_icon" /> */}
                            <img src={"/Images/home7.jpg"} alt="download-down-icon" className="user_icon"></img>
                            <p className="user_name">
                              @{obj?.userId?.userName || "guest"}
                            </p>
                          </span>
                        </div>
                        <div className="prompt_user">
                          <button
                            onClick={() => handleCopy(index, obj?.prompt)}
                            className="prompt_btn"
                          >
                            {isCopied == index ? "Copied" : "COPIER LE PROMPT"}
                          </button>
                          <p className="prompt">{obj?.prompt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* <div className="col-lg-3">
                <img src={"/Images/Rectangle 5.png"} className=''></img>
                <img src={"/Images/Rectangle 6.png"} className=''></img>
            </div>
            <div className="col-lg-3">
                <img src={"/Images/Rectangle 8.png"} className=''></img>
                <img src={"/Images/Rectangle 9.png"} className=''></img>
            </div> */}
            </div>
          ) : (
            <div className="row">
              {images == 0 ? (
                <div className="creat-img">
                  <p>No Images are available.</p>
                  <Link to="/text-image">
                    <button>Create Images</button>
                  </Link>
                </div>
              ) : (
                images.map((obj) => (
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="img_icon">
                      {/* <img
                      src={`${process.env.REACT_APP_basePath}${obj?.path}`}
                    /> */}
                      <LazyLoadImage
                        alt="Something Went Wrong"
                        src={`${process.env.REACT_APP_basePath}${obj?.path}`}
                        width={"100%"}
                        effect="blur"
                        placeholderSrc={`${process.env.REACT_APP_basePath}${obj?.path}`}
                      />
                      <a
                        href={`${process.env.REACT_APP_basePath}download/${obj?.path}`}
                        target="_blank"
                        download={"image.png"}
                      >
                        <span className="download_icon">
                          {/* <FileDownloadIcon /> */}
                          <a href="#"> <img src={"/Images/download-down-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>

                        </span>
                      </a>
                      <span className="download_icon like-btn"
                        onClick={() =>
                          handleLike(obj?.likedBy?.includes(user?.id), obj._id)
                        }
                      >
                       {obj?.likedBy.includes(user?.id) ? (
                          // <FaHeart color="red" className="like_icon" />
                          <a href="#"><img src={"/Images/like-heart-white-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>
                        ) : (
                          // <FaRegHeart className="like_icon" />
                          <a href="#"><img src={"/Images/like-heart-white-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>
                        )}
                      </span>
                      {/* <span
                onClick={() =>
                  handleLike(obj?.likedBy?.includes(user?.id), obj._id)
                }
              >
                {obj?.likedBy.includes(user?.id) ? (
                  <FaHeart color="red" className="like_icon" />
                  
                ) : (
                  <FaRegHeart className="like_icon" />
                )}
              </span> */}
                    </div>
                  </div>
                ))
              )}

              {/* <div className="col-lg-3">
            <div>
              <img src={"/Images/Rectangle 11.png"} className=""></img>
            </div>
            <div>
              <img src={"/Images/Rectangle 14.png"} className=""></img>
            </div>
          </div> */}
              {/* <div className="col-lg-3">
            <div>
              <img src={"/Images/Rectangle 12.png"} className=""></img>
            </div>
            <div>
              <img src={"/Images/Rectangle 15.png"} className=""></img>
            </div>
          </div> */}
              {/* <div className="col-lg-3">
            <img src={"/Images/Rectangle 13.png"} className=""></img>
            <img src={"/Images/Rectangle 16.png"} className=""></img>
            <img src={"/Images/Rectangle 20.png"} className=""></img>
          </div>
          <div className="col-lg-3">
            <img src={"/Images/Rectangle 17.png"} className=""></img>
            <img src={"/Images/Rectangle 18.png"} className=""></img>
          </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

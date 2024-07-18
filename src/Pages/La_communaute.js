import React, { Suspense, lazy } from "react";
import { GiArcheryTarget } from "react-icons/gi";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import {
  getImagesAsyncThunk,
  imageLikesAsyncThunk,
} from "../store/pagesSlices/generativeSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Material UI
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// react_icons
import { FaHeart, FaRegHeart, FaDownload } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
const Image = lazy(() => import("../Components/Image"));
const La_communaute = () => {
  const [isCopied, setIsCopied] = useState(-1);
  const [sort, setSort] = useState("createdAt");

  const [input, setinput] = useState("");

  const handleChange = (value) => {
    setinput(value);
  };

  const images = useSelector((s) => s.imageToImage.images);
  const d = useDispatch();
  const user = useSelector((state) => state?.auth?.user);
  const prfileImg = `${process.env.REACT_APP_basePath}${user?.avatar}`;
  const loading = useSelector((state) => state.imageToImage.loadings.images);
  const token = JSON.parse(sessionStorage.getItem("app-access-token"))?.token;
  console.log(images);
  const getImages = () => {
    d(getImagesAsyncThunk({ token, text: input.toLocaleLowerCase(), sort }));
  };
  useEffect(() => {
    getImages();
  }, [sort]);

  const handleLike = async (like, imageId) => {
    console.log(like, token);
    await d(imageLikesAsyncThunk({ token, like, imageId }));
    getImages();
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
    <div className="LA_COMMUNAUTE">
      <div className="Box">
        <h1>LA_COMMUNAUTE</h1>
      </div>
      <div className="box-2">
        <div className="flex-box">
          <div className="flex-grow-1">
            <p className="d-flex align-items-center">
              <GiArcheryTarget size={16} />
              <input
                className="search_inp"
                type=""
                placeholder="RECHERCHER"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
            </p>
          </div>
          <div>
            <Button className="btn-3 d-sm-flex d-none" onClick={getImages}>
              Rechercher
            </Button>
          </div>
          <div className="search-icon" onClick={getImages}>
            <BsSearch />
          </div>
        </div>

        <div className="flex-box-2">
          <div>
            <Button className="btn-1" onClick={() => setSort("likes")}>
              TENDANCE
            </Button>
          </div>
          <div>
            <Button className="btn-2" onClick={() => setSort("createdAt")}>
              RECENTS
            </Button>
          </div>
        </div>
      </div>
      <div className="spinner-container">
        {loading && images.length == 0 ? (
          <Spinner />
        ) : (
          <div className="row">
            {images.length == 0 ? (
              <p>No images are available.</p>
            ) : (
              <Suspense fallback={<Spinner />}>
                {images.map((obj, index) => (
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="img_icon">
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
                          <FaDownload color="white" />
                        </span>
                      </a>
                      <span
                        className="download_icon like-btn"
                        onClick={() =>
                          handleLike(obj?.likedBy?.includes(user?.id), obj._id)
                        }
                      >
                        {obj?.likedBy.includes(user?.id) ? (
                          <FaHeart color="red" className="download-down-icon" />
                        ) : (
                          <FaRegHeart
                            color="white"
                            className="download-down-icon"
                          />
                        )}
                      </span>
                      <div className="users_data">
                        <div className="user">
                          <span>
                            <img
                              src={"/Images/home7.jpg"}
                              alt="download-down-icon"
                              className="user_icon"
                            ></img>
                            {/* <FaUser className="user_icon" /> */}
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
                ))}
              </Suspense>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default La_communaute;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { GiArcheryTarget } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Segment } from "@mui/icons-material";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextToImageAsyncThunk } from "../store/pagesSlices/generativeSlice";
import Matrix_top from "../Components/Matrix_top";
import { OverlayTrigger, Spinner, Tooltip } from "react-bootstrap";
import {
  ImageToImageAsyncThunk,
  getImagesAsyncThunk,
} from "../store/pagesSlices/generativeSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

// Material UI
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { setUser } from "../store/pagesSlices/authSlice";

export default function Enter_The_Matrix() {
  const [dimensions, setDimensions] = useState({ width: 1024, height: 1024 });

  const [text1, setText1] = useState("");
  const [text, setText] = useState("");
  const [style, setStyle] = useState("");
  const [imgSrc, setImgSrc] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [model, setModel] = useState("stable-diffusion-xl-1024-v1-0");
  const [file, setFile] = useState(null);
  const styles = [
    { name: "Enhance", value: "enhance" },
    { name: "Anime", value: "anime" },
    { name: "Photographic", value: "photographic" },
    { name: "Digital Art", value: "digital-art" },
    { name: "Comic Book", value: "comic-book" },
    { name: "Fantasy Art", value: "fantasy-art" },
    { name: "Line Art", value: "line-art" },
    { name: "Analog Film", value: "analog-film" },
    { name: "Neon Punk", value: "neon-punk" },
    { name: "Isometric", value: "isometric" },
    { name: "Low Poly", value: "low-poly" },
    { name: "Origami", value: "origami" },
    { name: "Modeling Compound", value: "modeling-compound" },
    { name: "Cinematic", value: "cinematic" },
    { name: "3D Model", value: "3D-model" },
    { name: "Pixel Art", value: "pixel-art" },
    { name: "Tile Texture", value: "tile-texture" },
  ];
  // const [dimensions, setDimensions] = useState({ width: 1024, height: 1024 });
  const qty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const allowedDimensions = [
    { width: 1024, height: 1024 },
    { width: 1152, height: 896 },
    { width: 896, height: 1152 },
    { width: 1216, height: 832 },
    { width: 832, height: 1216 },
    { width: 1344, height: 768 },
    { width: 768, height: 1344 },
    { width: 1536, height: 640 },
    { width: 640, height: 1536 },
  ];
  const dispatch = useDispatch();
  const loading = useSelector((state) => state?.imageToImage.loadings.imageToImageData);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("matrix-image");
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    navigate(`/${selectedValue}`);
  };
  const openFileSelector = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };
  const handleFileChange = (e) => {
    console.log("filessss", e.target.files);
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // const reader = new FileReader();
    // reader.onload = (event) => {
    //   setImagePreview(event.target.result);
    // };
    // reader.readAsDataURL(e.target.files[0]);
  };
  const token = JSON.parse(sessionStorage.getItem("app-access-token")).token;

  const handleSubmit = async () => {
    try {
      if (file && text) {
        const formData = new FormData();
        formData.append("text", text);
        formData.append("file", file);
        formData.append("model", model);
        formData.append("quantity", quantity);
        if (style) {
          formData.append("style", style);
        }
        const response = await dispatch(
          ImageToImageAsyncThunk({ formData, token })
        );
        if (
          response.payload &&
          response.payload.data &&
          response.payload.data.image
        ) {
          setImgSrc(response.payload.data.image);
          // Clear the input field only if the message is successfully sent
          setText1(text);
          setText("");
          dispatch(setUser(response.payload.data.user));
        } else {
          toast.error(response?.response?.error?.message);
          console.error("Error:", "Invalid response data");
        }
      }
    } catch (error) {
      // console.log("Hello");
      console.error("Error:", error.message);
    }
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {allowedDimensions.map((item) => (
        <div>
          {item.width}x{item.height}
        </div>
      ))}
    </Tooltip>
  );


    let userlocal = useSelector((state) => state.auth?.user);
;


  return (
    <div>
      <div className="Enter_The_MATRIX ">
        <Matrix_top />
        <div>
          <div className="flex-box">
            <div>
              <p className="d-flex align-items-center">
                <GiArcheryTarget size={16} />
                <div className="search_inp">RECHERCHER</div>
                {/* <input
                  className="search_inp"
                  type=""
                  placeholder="RECHERCHER"
                /> */}
              </p>
            </div>
            <div>
              <Button className="btn-3 d-sm-flex d-none">Rechercher</Button>
            </div>
          </div>
        </div>
        <div className="Position-box">
          <div className="Button-box">
            <div className="Border-box">
              <div className="flex-box-9">
                <div>
                  <img src={"/Images/Top1.png"} className=""></img>
                </div>
                <div className="text-boxes">
                  <div className="sm-text">Modele Utilise</div>
                  <Form.Select
                    aria-label=""
                    size="sm"
                    className="lg-text"
                    // style={formSelectStyle}
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  >
                    <option value={"stable-diffusion-xl-1024-v1-0"}>
                      Stable Diffusion XL 1.0
                    </option>
                    <option value={"stable-diffusion-xl-1024-v0-9"}>
                      Stable Diffusion XL 0.9
                    </option>
                    {/* <option value={"stable-diffusion-v1-5"}>
                      Stable Diffusion 1.5
                    </option>
                    <option value={"stable-diffusion-512-v2-1"}>
                      Stable Diffusion 2.1
                    </option> */}
                  </Form.Select>
                  {/* <div className="lg-text">Photorealistic V5.3</div> */}
                </div>
              </div>
            </div>
            <div className="Border-box">
              <div>
                <div className="sm-text">Style Rechercher</div>
                {/* <div className="lg-text">Realisme Cinematic</div> */}
                <Form.Select
                  aria-label=""
                  // size="sm"
                  className="lg-text"
                  // style={formSelectStyle}
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                >
                  <option value={""}>None</option>
                  {styles?.map((item) => (
                    <option value={item?.value}>{item?.name}</option>
                  ))}
                </Form.Select>
              </div>
            </div>
            {/* <div className="Border-box">
              <div>
                <div className="sm-text">Dimensions de II'image</div>
                <Form.Select
                  onChange={(e) => setDimensions(JSON.parse(e.target.value))}
                  className="lg-text"
                  value={JSON.stringify(dimensions)}
                >
                  {allowedDimensions.map((item) => {
                    return (
                      <option value={JSON.stringify(item)}>
                        {item.width} x {item.height}
                      </option>
                    );
                  })}
                </Form.Select>
                <div className="lg-text">512 x 768</div>
              </div>
            </div> */}
            <div className="Border-box">
              <div>
                <div className="sm-text">Nombre d'image </div>
                <Form.Select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="lg-text"
                  value={quantity}
                >
                  {qty.map((item) => {
                    return <option value={item}>{item} images</option>;
                  })}
                </Form.Select>
                {/* <div className="lg-text">3 images</div> */}
              </div>
            </div>
            <div className="Border-box">
              <div>
                <div className="d-flex align-items-center">
                  <div className="sm-text">Image de reference</div>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button variant="" className="Tooltip_icon">
                      <HelpOutlineIcon fontSize="12px" />
                    </Button>
                  </OverlayTrigger>
                  {file && (
                    <svg
                      onClick={() => setFile(null)}
                      className="cross-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M15.2656 6.29102L6.73438 14.8223M6.73438 6.29102L15.2656 14.8223"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </div>

                <div className="lg-text pointer" onClick={openFileSelector}>
                  {file ? "Image" : "select image"}
                </div>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="Border-box">
              <div className="flex-box-9">
                <div>
                  <div className="sm-text">Votre forfait</div>
                  <div className="lg-text">Awake</div>
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
                <div className="lg-text">Active</div>
              </div>
            </div>
            <div className="Border-box">
              <div>
                <div className="sm-text">Pages</div>
                <Form.Select
                  aria-label=""
                  className="lg-text"
                  onChange={handleSelectChange}
                  value={selectedOption}
                >
                  <option value="text-image">Txt to Image</option>
                  <option value="matrix-image">Img to Img</option>
                </Form.Select>
                {/* <div className="lg-text">3 images</div> */}
              </div>
            </div>
          </div>

          <div className="Form_box row">
            <div className="col-sm-10">
              <InputGroup className="">
                <InputGroup.Text id="basic-addon1">
                  <AutoAwesomeIcon fontSize="10px" />{" "}
                </InputGroup.Text>
                <Form.Control
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                  placeholder="TAPEZ VOTRE PROMPT"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="BUTTONS col-sm-2">
              <div>
                {loading ? (
                  <Spinner />
                ) : (
                  <Button onClick={handleSubmit} className="btn-7">
                    <span className="d-sm-flex d-none">
                      <FaLocationArrow />
                    </span>
                    <span className="d-sm-none d-flex">GÉNÉRER L’IMAGEaaa</span>
                  </Button>
                )}
              </div>
              <div className="d-sm-flex d-none">
                <p>
                  {userlocal?.total_points_earned || 0} <FaCoins size={16} />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-box-2">
          <div className="hr">
            <hr />
          </div>
          <div className="text">AUJOURD'HUI</div>
          <div className="hr">
            <hr />
          </div>
        </div>

        <div className="text-box">
          <p>
            <span>Prompt utilisé</span> :{text1 || "robot in the matrix"}
          </p>
        </div>

        <div className="img-scroll">
          <div className="row">
            {imgSrc.length !== 0 ? (
              imgSrc?.map((path) => (
                <div className="col-sm-6">
                  <div className="img_icon">
                    <img src={`${process.env.REACT_APP_basePath}${path}`} />
                    <a
                      href={`${process.env.REACT_APP_basePath}download/${path}`}
                      target="_blank"
                      download={"image.png"}
                    >
                      <span className="download_icon">
                        <FileDownloadIcon />
                      </span>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="col-sm-6">
                  <div>
                    <img src={"/Images/Rectangle 27.jpg"} className=""></img>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div>
                    <img src={"/Images/Rectangle 27.jpg"} className=""></img>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* <div className="text-box">
          <p>
            <span>Prompt utilisé</span> :robot in the matrix
          </p>
        </div> */}
      </div>
    </div>
  );
}

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
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextToImageAsyncThunk } from "../store/pagesSlices/generativeSlice";
import Matrix_top from "../Components/Matrix_top";
import { Spinner } from "react-bootstrap";

// Material UI
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Box } from "@mui/material";
import { setUser } from "../store/pagesSlices/authSlice";

export default function Enter_The_Matrix() {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("Enter", searchParams.getAll);
  const [text1, setText1] = useState("");
  const [text, setText] = useState("");
  const [style, setStyle] = useState(searchParams.get("style") || "");
  const [imgSrc, setImgSrc] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [model, setModel] = useState(searchParams.get("model") || "dalle");
  const [dimensions, setDimensions] = useState({ width: 1024, height: 1024 });
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
  const loading = useSelector((state) => state.imageToImage.loadings.textToImageData);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("text-image");
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    navigate(`/${selectedValue}`);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (text) {
        const data = {
          text,
          model,
          quantity,
          dimensions,
        };
        if (style) {
          data.style = style;
        }
        const headers = {
          Authorization: JSON.parse(sessionStorage.getItem("app-access-token"))
            ?.token,
        };
        // Dispatch the TextToImage async thunk with the content
        const response = await dispatch(TextToImageAsyncThunk(data, headers));
        if (response.payload.data) {
          setImgSrc(response?.payload?.data?.imagePaths);
          // Clear the input field only if the message is successfully sent

          setText1(text);
          setText("");
          dispatch(setUser(response.payload.data.user));

        }
        // Handle the response as needed
        console.log("Response:", response);
      } else {
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


    let userlocal = useSelector((state) => state.auth?.user);
;



  return (
    <div>
      <div className="Enter_The_MATRIX">
        <Matrix_top />
        <div className='flex-box-search'>
          <div className="flex-box">
            <div>
              <p className="d-flex align-items-center">
                <GiArcheryTarget size={16} />
                <input
                  className="search_inp"
                  type=""
                  placeholder="RECHERCHER"
                />
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
                    <option value={"dalle"}>Dalle</option>
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
            <div className="Border-box">
              <div>
                <div className="sm-text">Dimensions de II'image</div>
                <Form.Select
                  onChange={(e) => setDimensions(JSON.parse(e.target.value))}
                  className="lg-text"
                  value={JSON.stringify(dimensions)}
                >
                  {allowedDimensions.map((item) => {
                    return (
                      <option value={`${item.width}x${item.height}`}>
                        {item.width} x {item.height}
                      </option>
                    );
                  })}
                </Form.Select>
                {/* <div className="lg-text">512 x 768</div> */}
              </div>
            </div>
            {model !== 'dalle'&&
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
            }
            <div className="Border-box">
              <div>
                <div className="sm-text">Image de reference</div>
                <div className="lg-text">Img_434_</div>
              </div>
            </div>
            <div className="Border-box">
              <div className="flex-box-9 w-100">
                <div>
                  <div className="sm-text" style={{}}>
                    Votre forfait
                  </div>
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
                  <option value="text-image">Txt to Img</option>
                  <option value="matrix-image">Img to Img</option>
                </Form.Select>
                {/* <div className="lg-text">3 images</div> */}
              </div>
            </div>
          </div>

     
              <Form className="Form_box row" onSubmit={handleSubmit}>
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
                  <Button className="btn-7" onClick={handleSubmit}>
                    <span className="d-sm-flex d-none">
                      <FaLocationArrow />
                    </span>
                    <span className="d-sm-none d-flex">GÉNÉRER L’IMAGE</span>
                  </Button>
                )}
              </div>
              <div className="d-sm-flex d-none">
                <p>
                  {userlocal?.total_points_earned || 0} <FaCoins size={16} />
                </p>
              </div>
            </div>
            </Form>
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
            <span>Prompt utilisé</span> : robot in the matrix
          </p>
        </div> */}
      </div>
    </div>
  );
}

import React from "react";
import "react-multi-carousel/lib/styles.css";
import { GiArcheryTarget } from "react-icons/gi";
import Slide from "../Components/Home/Carousel";



export default function Home() {
  return (
    <div>
      <div className="Home">
        <div className="box">
          <h1>Les_modèles_disponibles</h1>
          <div>
            <Slide />
          </div>
        </div>

        <div className="flex-box">
          <div className="hr">
            <hr />
          </div>
          <div className="text">Mr. Andre roux, bon retour_</div>
          <div className="hr">
            <hr />
          </div>
        </div>

        <div className="box-2">
          <div>
            <p>
              <GiArcheryTarget size={16} />
              <div className="search_inp">RECHERCHER</div>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="img_icon">
              <img src={"/Images/home2.jpg"} className=""></img>
              <a
                href={"/Images/home2.jpg"}
                target="_blank" 
                download={"image.png"}
                 >
              </a>
              <div className="download-icon">
                <a href="#"> <img src={"/Images/download-down-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>
              </div>
              <div className="copier-text">
                <a href="#" className="copier-btn">copier le prompt</a>
                <span>/babygirl, blue eyes, photorealistic, face cam, cute face, young face</span>
              </div>
            </div>
            <div className="img_icon">
              <img src={"/Images/home3.jpg"} className=""></img>
              <a
                href={"/Images/home3.jpg"} target="_blank"
                download={"image.png"}
                >
              </a>
              <div className="download-icon">
                <a href="#"> <img src={"/Images/download-down-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>
              </div>
              <div className="copier-text">
                <a href="#" className="copier-btn">copier le prompt</a>
                <span>/babygirl, blue eyes, photorealistic, face cam, cute face, young face</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="img_icon">
              <img src={"/Images/home4.jpg"} className=""></img>
              <a
                href={"/Images/home4.jpg"} target="_blank"
                download={"image.png"}
                >
              </a>
              <div className="download-icon">
                <a href="#"> <img src={"/Images/download-down-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>
              </div>
              <div className="copier-text">
                <a href="#" className="copier-btn">copier le prompt</a>
                <span>/babygirl, blue eyes, photorealistic, face cam, cute face, young face</span>
              </div>
            </div>
            <div className="img_icon">
              <img src={"/Images/home1.jpg"} className=""></img>
              <a
                href={"/Images/home1.jpg"} target="_blank"
                download={"image.png"}
                >
              </a>
              <div className="download-icon">
                <a href="#"> <img src={"/Images/download-down-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>
              </div>
              <div className="copier-text">
                <a href="#" className="copier-btn">copier le prompt</a>
                <span>/babygirl, blue eyes, photorealistic, face cam, cute face, young face</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="img_icon">
              <img src={"/Images/home5.jpg"} className=""></img>
              <a href={"/Images/home5.jpg"} target="_blank"
              download={"image.png"}
              >
              </a>
              <div className="download-icon">
                <a href="#"> <img src={"/Images/download-down-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>
              </div>
              <div className="copier-text">
                <a href="#" className="copier-btn">copier le prompt</a>
                <span>/babygirl, blue eyes, photorealistic, face cam, cute face, young face</span>
              </div>
            </div>
            <div className="img_icon">
              <img src={"/Images/home6.jpg"} className=""></img>
              <a href={"/Images/home6.jpg"} target="_blank"
              download={"image.png"}
              >
              </a>
              <div className="download-icon">
                <a href="#"> <img src={"/Images/download-down-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>
              </div>
              <div className="copier-text">
                <a href="#" className="copier-btn">copier le prompt</a>
                <span>/babygirl, blue eyes, photorealistic, face cam, cute face, young face</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="img_icon">
              <img src={"/Images/home7.jpg"} className=""></img>
              <a href={"/Images/home7.jpg"} target="_blank"  
              download={"image.png"}
              >
              </a>
              <div className="download-icon">
                <a href="#"> <img src={"/Images/download-down-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>
              </div>
              <div className="copier-text">
                <a href="#" className="copier-btn">copier le prompt</a>
                <span>/babygirl, blue eyes, photorealistic, face cam, cute face, young face</span>
              </div>
            </div>
            <div className="img_icon">
              <img src={"/Images/home8.jpg"} className=""></img>
              <a href={"/Images/home8.jpg"} target="_blank"
              download={"image.png"}
              >
              </a>
              <div className="download-icon">
                <a href="#"> <img src={"/Images/download-down-icon.png"} alt="download-down-icon" className="download-down-icon"></img></a>
              </div>
              <div className="copier-text">
                <a href="#" className="copier-btn">copier le prompt</a>
                <span>/babygirl, blue eyes, photorealistic, face cam, cute face, young face</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

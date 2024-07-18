import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useSearchParams } from "react-router-dom";

const Slide = () => {
  const router = useNavigate();
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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1200 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1199, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 500 },
      items: 2,
    },
  };
  return (
    <div>
      <div>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          autoPlaySpeed={8000}
        >
          {styles.map((style, i) => {
            return (
              <div>
                <Card>
                  <Card.Img variant="top" src={`/Images/Top${i + 1}.png`} />
                  <Card.Body>
                    <Card.Title>{style.name}</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur. Non elementum enim
                      sagittis pellentesque semper. Ipsum mattis ornare
                      ullamcorper id volutpat nulla. Est ullamcorper ullamcorper
                      libero lorem nunc consectetur platea mauris. Integer
                      commodo laoreet viverra lacus mi.
                    </Card.Text>
                    <Button
                      className="carasol_btn"
                      variant="primary"
                      onClick={() => {
                        router(
                          `/text-image?style=${style.value}&model=stable-diffusion-xl-1024-v1-0`
                        );
                      }}
                    >
                      Télécharger le modèle
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}

          {/* <div>
            <Card>
              <Card.Img variant="top" src={"/Images/Top2.png"} />
              <Card.Body>
                <Card.Title>Digital Art</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur. Non elementum enim
                  sagittis pellentesque semper. Ipsum mattis ornare ullamcorper
                  id volutpat nulla. Est ullamcorper ullamcorper libero lorem
                  nunc consectetur platea mauris. Integer commodo laoreet
                  viverra lacus mi.
                </Card.Text>
                <Button
                  className="carasol_btn"
                  variant="primary"
                  onClick={() => {
                    router(
                      "/text-image?style=digital-art&model=stable-diffusion-xl-1024-v0-9"
                    );
                  }}
                >
                  Télécharger le modèle
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={"/Images/Top3.png"} />
              <Card.Body>
                <Card.Title>Comic Book</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur. Non elementum enim
                  sagittis pellentesque semper. Ipsum mattis ornare ullamcorper
                  id volutpat nulla. Est ullamcorper ullamcorper libero lorem
                  nunc consectetur platea mauris. Integer commodo laoreet
                  viverra lacus mi.
                </Card.Text>
                <Button
                  className="carasol_btn"
                  variant="primary"
                  onClick={() => {
                    router(
                      "/text-image?style=comic-book&model=stable-diffusion-v1-5"
                    );
                  }}
                >
                  Télécharger le modèle
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={"/Images/Top4.png"} />
              <Card.Body>
                <Card.Title>Fantasy Art</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur. Non elementum enim
                  sagittis pellentesque semper. Ipsum mattis ornare ullamcorper
                  id volutpat nulla. Est ullamcorper ullamcorper libero lorem
                  nunc consectetur platea mauris. Integer commodo laoreet
                  viverra lacus mi.
                </Card.Text>
                <Button
                  className="carasol_btn"
                  variant="primary"
                  onClick={() => {
                    router(
                      "/text-image?style=fantasy-art&model=stable-diffusion-v1-5"
                    );
                  }}
                >
                  Télécharger le modèle
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={"/Images/Top5.png"} />
              <Card.Body>
                <Card.Title>Line Art</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur. Non elementum enim
                  sagittis pellentesque semper. Ipsum mattis ornare ullamcorper
                  id volutpat nulla. Est ullamcorper ullamcorper libero lorem
                  nunc.
                </Card.Text>
                <Button
                  className="carasol_btn"
                  variant="primary"
                  onClick={() => {
                    router(
                      "/text-image?style=line-art&model=stable-diffusion-512-v2-1"
                    );
                  }}
                >
                  Télécharger le modèle
                </Button>
              </Card.Body>
            </Card>
          </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Slide;

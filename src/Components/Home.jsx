import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { GiArcheryTarget } from "react-icons/gi";

const HOME = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1200 },
      items: 4,
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
    <div className="Home">
      <div className="box">
        <h1>Les_modèles_disponibles</h1>
        <div>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            autoPlaySpeed={8000}
            centerMode={true}
          >
            <div>
              <Card>
                <Card.Img variant="top" src={require("../Images/Top1.png")} />
                <Card.Body>
                  <Card.Title>Photorealistic</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur. Non elementum enim
                    sagittis pellentesque semper. Ipsum mattis ornare
                    ullamcorper id volutpat nulla. Est ullamcorper ullamcorper
                    libero lorem nunc consectetur platea mauris. Integer commodo
                    laoreet viverra lacus mi.
                  </Card.Text>
                  <Button variant="primary">Télécharger le modèle</Button>
                </Card.Body>
              </Card>
            </div>

            <div>
              <Card>
                <Card.Img variant="top" src={require("../Images/Top2.png")} />
                <Card.Body>
                  <Card.Title>Artistic</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur. Non elementum enim
                    sagittis pellentesque semper. Ipsum mattis ornare
                    ullamcorper id volutpat nulla. Est ullamcorper ullamcorper
                    libero lorem nunc consectetur platea mauris. Integer commodo
                    laoreet viverra lacus mi.
                  </Card.Text>
                  <Button variant="primary">Télécharger le modèle</Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card>
                <Card.Img variant="top" src={require("../Images/Top3.png")} />
                <Card.Body>
                  <Card.Title>3D isometric</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur. Non elementum enim
                    sagittis pellentesque semper. Ipsum mattis ornare
                    ullamcorper id volutpat nulla. Est ullamcorper ullamcorper
                    libero lorem nunc consectetur platea mauris. Integer commodo
                    laoreet viverra lacus mi.
                  </Card.Text>
                  <Button variant="primary">Télécharger le modèle</Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card>
                <Card.Img variant="top" src={require("../Images/Top4.png")} />
                <Card.Body>
                  <Card.Title>MangasMiyasaki</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur. Non elementum enim
                    sagittis pellentesque semper. Ipsum mattis ornare
                    ullamcorper id volutpat nulla. Est ullamcorper ullamcorper
                    libero lorem nunc consectetur platea mauris. Integer commodo
                    laoreet viverra lacus mi.
                  </Card.Text>
                  <Button variant="primary">Télécharger le modèle</Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card>
                <Card.Img variant="top" src={require("../Images/Top5.png")} />
                <Card.Body>
                  <Card.Title>Artistic</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur. Non elementum enim
                    sagittis pellentesque semper. Ipsum mattis ornare
                    ullamcorper id volutpat nulla. Est ullamcorper ullamcorper
                    libero lorem nunc.
                  </Card.Text>
                  <Button variant="primary">Télécharger le modèle</Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel>
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
            <span className="ms-1">RECHERCHER</span>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3">
          <div>
            <img  src={require("../Images/Rectangle 1.png")} className="" />
          </div>
          <div>
            <img src={require("../Images/Rectangle 2.png")} className="" />
          </div>
        </div>
        <div className="col-lg-3">
          <div>
            <img src={require("../Images/Rectangle 3.png")} className=""/>
          </div>
        </div>
        <div className="col-lg-3">
          <img src={require("../Images/Rectangle 5.png")} className="" />
          <img src={require("../Images/Rectangle 6.png")} className="" />
        </div>
        <div className="col-lg-3">
          <img src={require("../Images/Rectangle 8.png")} className="" />
          <img src={require("../Images/Rectangle 9.png")} className="" />
        </div>
      </div>
    </div>
  );
};

export default HOME;

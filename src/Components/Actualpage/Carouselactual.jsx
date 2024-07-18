// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const Slidercarousel = () => {
//   const router = useNavigate();
//   const styles = [
//     { name: "Enhance", value: "enhance" },
//     { name: "Anime", value: "anime" },
//     { name: "Photographic", value: "photographic" },
//     { name: "Digital Art", value: "digital-art" },
//     { name: "Comic Book", value: "comic-book" },
//     { name: "Fantasy Art", value: "fantasy-art" },
//     { name: "Line Art", value: "line-art" },
//     { name: "Analog Film", value: "analog-film" },
//     { name: "Neon Punk", value: "neon-punk" },
//     { name: "Isometric", value: "isometric" },
//     { name: "Low Poly", value: "low-poly" },
//     { name: "Origami", value: "origami" },
//     { name: "Modeling Compound", value: "modeling-compound" },
//     { name: "Cinematic", value: "cinematic" },
//     { name: "3D Model", value: "3D-model" },
//     { name: "Pixel Art", value: "pixel-art" },
//     { name: "Tile Texture", value: "tile-texture" },
//   ];
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 2000, min: 1200 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 1199, min: 992 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 991, min: 768 },
//       items: 3,
//     },
//     mobile: {
//       breakpoint: { max: 767, min: 500 },
//       items: 2,
//     },
//   };
//   return (
//     <div>
//       <div>
//         <Carousel
//           responsive={responsive}
//           swipeable={true}
//           draggable={true}
//           showDots={false}
//           autoPlaySpeed={8000}
//         >
//           {styles.map((style, i) => {
//             return (
//               <div>
//                 <Card>
//                   <Card.Img variant="top" src={`/Images/Top${i + 1}.png`} />
//                   <Card.Body>
//                     <Card.Title>{style.name}</Card.Title>
//                     <Card.Text>
//                       Lorem ipsum dolor sit amet consectetur. Non elementum enim
//                       sagittis pellentesque semper. Ipsum mattis ornare
//                       ullamcorper id volutpat nulla. Est ullamcorper ullamcorper
//                       libero lorem nunc consectetur platea mauris. Integer
//                       commodo laoreet viverra lacus mi.
//                     </Card.Text>
//                     <Button
//                       className="carasol_btn"
//                       variant="primary"
//                       onClick={() => {
//                         router(
//                           `/text-image?style=${style.value}&model=stable-diffusion-xl-1024-v1-0`
//                         );
//                       }}
//                     >
//                       Télécharger le modèle
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             );
//           })}

//           {/* <div>
//             <Card>
//               <Card.Img variant="top" src={"/Images/Top2.png"} />
//               <Card.Body>
//                 <Card.Title>Digital Art</Card.Title>
//                 <Card.Text>
//                   Lorem ipsum dolor sit amet consectetur. Non elementum enim
//                   sagittis pellentesque semper. Ipsum mattis ornare ullamcorper
//                   id volutpat nulla. Est ullamcorper ullamcorper libero lorem
//                   nunc consectetur platea mauris. Integer commodo laoreet
//                   viverra lacus mi.
//                 </Card.Text>
//                 <Button
//                   className="carasol_btn"
//                   variant="primary"
//                   onClick={() => {
//                     router(
//                       "/text-image?style=digital-art&model=stable-diffusion-xl-1024-v0-9"
//                     );
//                   }}
//                 >
//                   Télécharger le modèle
//                 </Button>
//               </Card.Body>
//             </Card>
//           </div>
//           <div>
//             <Card>
//               <Card.Img variant="top" src={"/Images/Top3.png"} />
//               <Card.Body>
//                 <Card.Title>Comic Book</Card.Title>
//                 <Card.Text>
//                   Lorem ipsum dolor sit amet consectetur. Non elementum enim
//                   sagittis pellentesque semper. Ipsum mattis ornare ullamcorper
//                   id volutpat nulla. Est ullamcorper ullamcorper libero lorem
//                   nunc consectetur platea mauris. Integer commodo laoreet
//                   viverra lacus mi.
//                 </Card.Text>
//                 <Button
//                   className="carasol_btn"
//                   variant="primary"
//                   onClick={() => {
//                     router(
//                       "/text-image?style=comic-book&model=stable-diffusion-v1-5"
//                     );
//                   }}
//                 >
//                   Télécharger le modèle
//                 </Button>
//               </Card.Body>
//             </Card>
//           </div>
//           <div>
//             <Card>
//               <Card.Img variant="top" src={"/Images/Top4.png"} />
//               <Card.Body>
//                 <Card.Title>Fantasy Art</Card.Title>
//                 <Card.Text>
//                   Lorem ipsum dolor sit amet consectetur. Non elementum enim
//                   sagittis pellentesque semper. Ipsum mattis ornare ullamcorper
//                   id volutpat nulla. Est ullamcorper ullamcorper libero lorem
//                   nunc consectetur platea mauris. Integer commodo laoreet
//                   viverra lacus mi.
//                 </Card.Text>
//                 <Button
//                   className="carasol_btn"
//                   variant="primary"
//                   onClick={() => {
//                     router(
//                       "/text-image?style=fantasy-art&model=stable-diffusion-v1-5"
//                     );
//                   }}
//                 >
//                   Télécharger le modèle
//                 </Button>
//               </Card.Body>
//             </Card>
//           </div>
//           <div>
//             <Card>
//               <Card.Img variant="top" src={"/Images/Top5.png"} />
//               <Card.Body>
//                 <Card.Title>Line Art</Card.Title>
//                 <Card.Text>
//                   Lorem ipsum dolor sit amet consectetur. Non elementum enim
//                   sagittis pellentesque semper. Ipsum mattis ornare ullamcorper
//                   id volutpat nulla. Est ullamcorper ullamcorper libero lorem
//                   nunc.
//                 </Card.Text>
//                 <Button
//                   className="carasol_btn"
//                   variant="primary"
//                   onClick={() => {
//                     router(
//                       "/text-image?style=line-art&model=stable-diffusion-512-v2-1"
//                     );
//                   }}
//                 >
//                   Télécharger le modèle
//                 </Button>
//               </Card.Body>
//             </Card>
//           </div> */}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Slidercarousel;

import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card } from 'react-bootstrap';

const Slidercarousel = () => {
    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          }

        // superLargeDesktop: {
        //     // the naming can be any, depends on you.
        //     breakpoint: { max: 2000, min: 1200 },
        //     items: 5
        // },
        // desktop: {
        //     breakpoint: { max: 1199, min: 992 },
        //     items: 4
        // },
        // tablet: {
        //     breakpoint: { max: 991, min: 768 },
        //     items: 3
        // },
        // mobile: {
        //     breakpoint: { max: 767, min: 500 },
        //     items: 1
        // }
    };
    return (
        <div className='section5_card'>

            <Carousel
                // responsive={responsive}
                // autoPlay={true}
                // swipeable={true}
                // draggable={true}
                // showDots={false}
                // autoPlaySpeed={4000}

                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                centerMode={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"

            >
                <div className='mb-3'>
                    <Card>
                        <div className="section_card">
                            <div className="card_heading">
                                <img src={"/Images/Top21.png"} className='' ></img>
                                <h5>@CLEqsds</h5>
                            </div>
                            <div className="card_botm">
                                <p>Le meilleur site web d’IA à ce jour.</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='mb-3'>
                    <Card>
                        <div className="section_card">
                            <div className="card_heading">
                                <img src={"/Images/Top21.png"} className='' ></img>
                                <h5>@REZE_eze</h5>
                            </div>
                            <div className="card_botm">
                                <p>Morpheus m'a permis de m'exprimer d'une manière totalement nouvelle et différente. Sans l'IA, je n'étais qu'un consommateur. Maintenant, je peux créer.</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='mb-3'>
                    <Card>
                        <div className="section_card">
                            <div className="card_heading">
                                <img src={"/Images/Top22.png"} className='' ></img>
                                <h5>@laurent_T</h5>
                            </div>
                            <div className="card_botm">
                                <p>Morpheus convient à ceux qui débutent dans le monde des images d'IA, ainsi qu'aux professionnels, qui disposent d'un large éventail d'outils pour travailler..</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='mb-3'>
                    <Card>
                        <div className="section_card">
                            <div className="card_heading">
                                <img src={"/Images/Top23.png"} className='' ></img>
                                <h5>@Pieorro54</h5>
                            </div>
                            <div className="card_botm">
                                <p>Excellent outils !</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='mb-3'>
                    <Card>
                        <div className="section_card">
                            <div className="card_heading">
                                <img src={"/Images/Top21.png"} className='' ></img>
                                <h5>@cleqsds</h5>
                            </div>
                            <div className="card_botm">
                                <p>Grâce à Morpheus, j’ai découvert un large panel d’IA.</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='mb-3'>
                    <Card>
                        <div className="section_card">
                            <div className="card_heading">
                                <img src={"/Images/Top25.png"} className='' ></img>
                                <h5>@Fredo_23</h5>
                            </div>
                            <div className="card_botm">
                                <p>Avec ses modèles puissants, Morpheus fait de l'art de l'I.A. un jeu d'enfant. La communauté est également la meilleure que j'ai trouvée à ce jour !"</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className='mb-3'>
                    <Card>
                        <div className="section_card">
                            <div className="card_heading">
                                <img src={"/Images/Top26.png"} className='' ></img>
                                <h5>@Mathi43</h5>
                            </div>
                            <div className="card_botm">
                                <p>La qualité du rendu est vraiment incroyable, je recommande d’utiliser cet outil.</p>
                            </div>
                        </div>
                    </Card>
                </div>


            </Carousel>

        </div>
    )
}

export default Slidercarousel;

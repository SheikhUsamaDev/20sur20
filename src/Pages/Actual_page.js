import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "react-multi-carousel/lib/styles.css";


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { MdEmail } from "react-icons/md"
import { Link } from 'react-router-dom';
import Slidercarousel from '../Components/Actualpage/Carouselactual';
import Slidercarouse2 from '../Components/Actualpage/Carouselactual2';
import Carousel from "react-multi-carousel";

export default function Actual_page() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2000, min: 1200 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 1199, min: 992 },
            items: 4,
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
        <div className='actual_page'>
            <Navbar expand="lg" className="bg-body-transparent">
                <Container>
                    <Navbar.Brand href="#home" className='Navbar_brand'>
                        <img src={"/Images/logo.png"} className=''></img>
                        <h5>Morpheus.ai</h5>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
                        background: 'grey'
                    }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='Navbar_links' to="/utilisation">CONDITIONS D’UTILISATION</Link>
                            <Link className='Navbar_links ms-lg-3' to="/cookies">COOKIES</Link>
                            <a className='Navbar_links ms-lg-3' href="#contact-us">NOUS_CONTACTER</a>
                        </Nav>
                        <Link to={"/login"} className='Navbar_btn'>accéder à la matrice</Link>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <div className="ActualPage_content">
                <div className="container">
                    <div className="actual_heading">
                        <div className="main-wrapper">
                            <h4 className='large'>Bienvenue_dans la_matrice </h4>
                            <div className="text-wrapper">
                                <p>Lorem ipsum dolor sit amet consectetur. Condimentum iaculis semper sit sit feugiat egestas purus arcu. Donec tristique purus aliquet morbi. Semper mauris id suspendisse pellentesque.</p>
                                <div><Link to={"/login"} className='Navbar_btn'>accéder à la matrice</Link></div>
                            </div>
                        </div>
                        <div className="img-wrapper">
                            <img src={"/Images/actual1.png"} className='' ></img>
                        </div>
                    </div>
                </div>
                <div className="col_sectiom">
                    <Container className='small'>
                        <Row>
                            <Col lg='4' md='6'>
                                <div className="col_content">
                                    <div className="col_numb">
                                        <h5>1</h5>
                                    </div>
                                    <div className="col_head">
                                        <h5>Cultivez l'originalité</h5>
                                        <p>Votre imagination, notre technologie. Générez des œuvres d'art distinctives grâce à des modèles d'IA préformés ou formez les vôtres.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className="col_content">
                                    <div className="col_numb">
                                        <h5>2</h5>
                                    </div>
                                    <div className="col_head">
                                        <h5>La maîtrise simplifiée</h5>
                                        <p>Facile à comprendre, gratifiant à perfectionner. Maîtrisez la production rapide et efficace d'un contenu de qualité.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className="col_content">
                                    <div className="col_numb">
                                        <h5>3</h5>
                                    </div>
                                    <div className="col_head">
                                        <h5>Accélérez l’innovation</h5>
                                        <p>Accélérez votre processus d'idéation. Conceptualisez, répétez et expérimentez à la vitesse de la lumière.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className="col_content">
                                    <div className="col_numb">
                                        <h5>4</h5>
                                    </div>
                                    <div className="col_head">
                                        <h5>La puissance de 7 IA réunies</h5>
                                        <p>Vous pouvez intéragir avec une multitude d’IA, générer des images, des vidéos, du chat et bientôt de l’audio.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className="col_content">
                                    <div className="col_numb">
                                        <h5>5</h5>
                                    </div>
                                    <div className="col_head">
                                        <h5>Interface simple et intuitive</h5>
                                        <p>Une interface simple d’utilisation, user-friendly.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className="col_content">
                                    <div className="col_numb">
                                        <h5>6</h5>
                                    </div>
                                    <div className="col_head">
                                        <h5>La révolution de l’IA</h5>
                                        <p>Le multivers de l’IA s’ouvre à vous, avec des interconnexions entre les IAs.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="utilize_section">
                    <div className="utilize_head">
                        <h5>Utilise <br/> Morpheus pour :</h5>
                    </div>
                    <div className="utilize_img">
                        <div className="uti_img">
                            <img src={"/Images/utilize.png"} className='' ></img>
                        </div>
                    </div>
                </div>
                <div className="actual_section3">
                    <div className="container">
                        <div className="actual_h3">
                            <h4>Débloquez votre créativité
                                <br />avec nos modèles
                            </h4>
                        </div>

                    <div className="section3_img">
                        {/*<img src={"/Images/section3.png"} className='' ></img>*/}
                        <div>
                            <Carousel
                                responsive={responsive}
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                autoPlaySpeed={8000}
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
                            </Carousel>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="actual_section4">
                    <div className="container">
                        <div className="section4_head">
                            <h4>Les réalisations <br /> de nos membres</h4>
                        </div>
                        <div className="section4_img">
                            <img src={"/Images/change.png"} className='' ></img>
                        </div>
                    </div>
                </div>
                <div className="actual_section5">
                    <div className="section5_head">
                        <h4>CE qu’en pense nos utilisateurs </h4>
                        <p>Toute chose commence par un choix.</p>
                    </div>
                   <Slidercarousel/>
                   <Slidercarouse2/>
                </div>
                <div className="actual_section6">
                    <div className="footer_section1">
                        <Container>
                            <Row>
                                <Col lg='5'>
                                    <div className="footer1_head">
                                        <h5>votre chef  -<br />d’ oeuvre avec <br /> Morpheus.AI</h5>
                                    </div>
                                    <div className="footer1_btn">
                                        <Link to={"/login"} className='Navbar_btn'>accéder à la matrice</Link>
                                    </div>
                                </Col>
                                <Col lg='7'>
                                    <img src={"/Images/section6.png"} width="100%" className='' ></img>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>

            <div className="actual_section7">
                <div className="footer_section2">
                    <Container>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3'>
                                <div className='image-box'>
                                    <img
                                        src={"/Images/logo.png"}
                                        className="rounded-pill"></img>
                                    <p><a href="#">MORPHEUS.AI</a></p>
                                </div>

                            </div>
                            <div className='col-lg-2 col-6 col-md-2'>
                                <div>
                                    <h4>A PROPOS</h4>
                                    <ul class='footer-links'>
                                        <li><a href='#' id='contact-us'>Contact</a></li>
                                        <li><a href='#'>FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-2 col-6 col-md-2'>
                                <div>
                                    <h4>RESTONS CONNECTE</h4>
                                    <ul class='footer-links'>
                                        <li><a href='#' id='contact-us'>Discordt</a></li>
                                        <li><a href='#'>Facebook</a></li>
                                        <li><a href='#'>Linkedin</a></li>
                                        <li><a href='#'>Twitter</a></li>
                                        <li><a href='#'>Youtube</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-5'>
                                <div className='newsLetter'>
                                    <h4>NE RATEZ AUCUNE ACTUALITES</h4>
                                    <div className='border-box'>
                                        <p>
                                            <InputGroup className="border-0">
                                                <InputGroup.Text id="basic-addon2"><MdEmail /></InputGroup.Text>
                                                <Form.Control
                                                    placeholder="Votre e-mail"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                            </InputGroup>
                                        </p>
                                        <p>
                                            <Button>Recher</Button>
                                        </p>
                                    </div>
                                    <p>*en renseignant votre email,vous acceptez de recevoir des mails de la part de morpheues.ai</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            <div className='footer_3'>
                <div className="container">
                    <div className="links">
                        <Link to='./cookies'><p>COOKIES</p></Link>
                        <Link to='/utilisation'><p>TERMS D'UTILISATION</p></Link>
                        <Link to='/notice-legale'><p>NOTICE LEGALE</p></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

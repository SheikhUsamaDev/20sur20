import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import {MdEmail} from "react-icons/md"
import { Link } from 'react-router-dom';

export default function Actualpage() {
    return (
        <div className='actual_page'>
            <Navbar expand="lg" className="bg-body-transparent">
                <Container>
                    <Navbar.Brand href="#home" className='Navbar_brand'>
                        <img src={require("../Images/logo.png")} className=''></img>
                        <h5>Morpheus.ai</h5>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
                        background:'grey'
                    }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='Navbar_links' to="/utilisation">CONDITIONS D’UTILISATION</Link>
                            <Link className='Navbar_links' to="/cookies">COOKIES</Link>
                            <Link className='Navbar_links' href="#home">NOUS_CONTACTER</Link>
                        </Nav>
                        <button className='Navbar_btn'>accéder à la matrice</button>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <div className="ActualPage_content">
                <div className="actual_heading">
                    <h4>Bienvenue_dans la_matrice </h4>

                    <p>Lorem ipsum dolor sit amet consectetur. Condimentum iaculis semper sit sit feugiat egestas purus arcu. Donec tristique purus aliquet morbi. Semper mauris id suspendisse pellentesque.</p>
                    <div><button className='heading_btn'>accéder à la matrice</button></div>
                    <img src={require("../Images/actual1.png")} className='' ></img>
                </div>
                <div className="col_sectiom">
                    <Container>
                        <Row>
                            <Col lg='4' md='6'>
                                <div className="col_content">
                                    <div className="col_numb">
                                        <h5>1</h5>
                                    </div>
                                    <div className="col_head">
                                        <h5>la puissance de 12 I.A en 1</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ex minima id maxime inventore sint?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className="col_content">
                                    <div className="col_numb">
                                        <h5>2</h5>
                                    </div>
                                    <div className="col_head">
                                        <h5>la puissance de 12 I.A en 1</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ex minima id maxime inventore sint?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className="col_content">
                                    <div className="col_numb">
                                        <h5>3</h5>
                                    </div>
                                    <div className="col_head">
                                        <h5>la puissance de 12 I.A en 1</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ex minima id maxime inventore sint?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className="col_content">
                                    <div className="col_numb">
                                        <h5>4</h5>
                                    </div>
                                    <div className="col_head">
                                        <h5>la puissance de 12 I.A en 1</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ex minima id maxime inventore sint?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className="col_content">
                                    <div className="col_numb">
                                        <h5>5</h5>
                                    </div>
                                    <div className="col_head">
                                        <h5>la puissance de 12 I.A en 1</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ex minima id maxime inventore sint?</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className="col_content">
                                    <div className="col_numb">
                                        <h5>6</h5>
                                    </div>
                                    <div className="col_head">
                                        <h5>la puissance de 12 I.A en 1</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ex minima id maxime inventore sint?</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="utilize_section">
                    <div className="utilize_head">
                        <h5>Utilise </h5>
                        <h4>Morpheus pour :</h4>
                    </div>
                    <div className="utilize_img">
                        <div className="uti_img">
                            <img src={require("../Images/utilize.png")} className='' ></img>
                        </div>
                    </div>
                </div>
                <div className="actual_section3">
                    <div className="actual_h3">
                        <h4>Débloquez votre créativité
                            <br />avec nos modèles
                        </h4>
                    </div>
                    <div className="section3_img">
                        <img src={require("../Images/section3.png")} className='' ></img>
                    </div>
                </div>
                <div className="actual_section4">
                    <div className="section4_head">
                        <h4>Les réalisations <br /> de nos membres</h4>
                    </div>
                    <div className="section4_img">
                        <img src={require("../Images/section4.png")} className='' ></img>
                    </div>
                </div>
                <div className="actual_section5">
                    <div className="section5_head">
                        <h4>Bienvenue_dans </h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Condimentum iaculis semper sit sit feugiat egestas purus arcu. Donec tristique purus aliquet morbi. Semper mauris id suspendisse pellentesque.</p>
                    </div>
                    <div className="section5_card">
                        <Container>
                            <Row>
                                <Col lg='4' md='6'>
                                    <Card>
                                        <div className="section_card">
                                            <div className="card_heading">
                                                <img src={require("../Images/logo.png")} className='' ></img>
                                                <h5>@cleqsds</h5>
                                            </div>
                                            <div className="card_botm">
                                                <p>Lorem  Cumque, ab accusantium quo provident nisi ea natus sapiente reiciendis reprehenderit veritatis fuga veniam.</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg='4' md='6'>
                                    <Card>
                                        <div className="section_card">
                                            <div className="card_heading">
                                                <img src={require("../Images/logo.png")} className='' ></img>
                                                <h5>@cleqsds</h5>
                                            </div>
                                            <div className="card_botm">
                                                <p>Lorem  Cumque, ab accusantium quo provident nisi ea natus sapiente reiciendis reprehenderit veritatis fuga veniam.</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg='4' md='6'>
                                    <Card>
                                        <div className="section_card">
                                            <div className="card_heading">
                                                <img src={require("../Images/logo.png")} className='' ></img>
                                                <h5>@cleqsds</h5>
                                            </div>
                                            <div className="card_botm">
                                                <p>Lorem  Cumque, ab accusantium quo provident nisi ea natus sapiente reiciendis reprehenderit veritatis fuga veniam.</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg='4' md='6'>
                                    <Card>
                                        <div className="section_card">
                                            <div className="card_heading">
                                                <img src={require("../Images/logo.png")} className='' ></img>
                                                <h5>@cleqsds</h5>
                                            </div>
                                            <div className="card_botm">
                                                <p>Lorem  Cumque, ab accusantium quo provident nisi ea natus sapiente reiciendis reprehenderit veritatis fuga veniam.</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg='4' md='6'>
                                    <Card>
                                        <div className="section_card">
                                            <div className="card_heading">
                                                <img src={require("../Images/logo.png")} className='' ></img>
                                                <h5>@cleqsds</h5>
                                            </div>
                                            <div className="card_botm">
                                                <p>Lorem  Cumque, ab accusantium quo provident nisi ea natus sapiente reiciendis reprehenderit veritatis fuga veniam.</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg='4' md='6'>
                                    <Card className='card'>
                                        <div className="section_card">
                                            <div className="card_heading">
                                                <img src={require("../Images/logo.png")} className='' ></img>
                                                <h5>@cleqsds</h5>
                                            </div>
                                            <div className="card_botm">
                                                <p>Lorem  Cumque, ab accusantium quo provident nisi ea natus sapiente reiciendis reprehenderit veritatis fuga veniam.</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="actual_section6">
                    <div className="footer_section1">
                        <Container>
                            <Row>
                                <Col lg='6'>
                                    <div className="footer1_head">
                                        <h5>votre chef <br /> -d’ oeuvre avec <br /> Morpheus.AI</h5>
                                    </div>
                                    <div className="footer1_btn">
                                        <button>accéder à la matrice</button>
                                    </div>
                                </Col>
                                <Col lg='6'>
                                <img src={require("../Images/section6.png")} width="100%" className='' ></img>
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
                                
                                <div className='col-lg-2'>
                                    <div className='image-box'>
                                        <img
                                            src={require("../Images/Ellipse 14.jpg")}
                                            className="rounded-pill"></img>
                                        <p>MORPHEUS.AI</p>
                                    </div>
                                        
                                </div>
                                <div className='col-lg-2'>
                                        <div>
                                            <h4>A PROPOS</h4>
                                            <p>Contact</p>
                                            <p>FAQ</p>
                                        </div>
                                </div>
                                <div className='col-lg-3'>
                                        <div>
                                            <h4>RESTONS CONNECTE</h4>
                                            <p>Discordt</p>
                                            <p>Facebook</p>
                                            <p>Linkedin</p>
                                            <p>Twitter</p>
                                            <p>Youtube</p>
                                        </div>
                                </div>
                                <div className='col-lg-5'>
                                        <div>
                                            <h4>NE RATEZ AUCUNE ACTUALITES</h4>
                                                <div className='border-box'>
                                                <p>
                                                    <InputGroup className="border-0">
                                                    <InputGroup.Text id="basic-addon2"><MdEmail/></InputGroup.Text>
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
                    <p>COOKIES</p>
                    <p>TERMS D'UTILISATION</p>
                    <p>NOTICE LEGALE</p>
                </div>

        </div>
    )
}

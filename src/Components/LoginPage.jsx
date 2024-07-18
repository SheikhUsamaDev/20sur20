import React from "react";
import * as Yup from "yup";
import "../../src/GlobalStyle.scss";
import { Apple, Google } from "@mui/icons-material";
import { Col, Container, Row } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { userLoginAsyncThunk } from "../store/pagesSlices/authSlice";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    dispatch(
      userLoginAsyncThunk({
        email: values.email,
        password: values.password,
        cb: () => {
          router("/home");
        },
      })
    );
    console.log(values);
    console.log(Event);
  };
  return (
    <div className="Login_page">
      <div className="login">
        <div className="Container">
          <Container>
            <Row>
              <Col lg="6">
                <div
                  style={{
                    boxShadow: "0px 0px 140px 60px #02AF28",
                    position: "absolute",
                    top: "50%",
                    left: "30%",
                  }}
                ></div>
                <div className="main_login">
                  <div className="main_logo">
                    <img src={"/Images/logo.png"} className="logo_input"></img>
                    <h6>MORPHEUS.AI</h6>
                  </div>
                  <div className="Login_form">
                    <h6>se connecter AVEC :</h6>
                    <div className="buttons">
                      <button className="btn_input">
                        <Google /> <span className="ms-2">| GOOGLE </span>
                      </button>
                      <button className="btn_input">
                        <Apple /> <span className="ms-2">| APPLE </span>
                      </button>
                    </div>
                    <div className="lines">
                      <div className="hr">
                        <hr />
                      </div>
                      <div className="or">
                        <h6>or</h6>
                      </div>
                      <div className="hr">
                        <hr />
                      </div>
                    </div>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      <Form>
                        <div className="Email_inp">
                          <div className="mail">Email</div>
                          <Field
                            type="email"
                            name="email"
                            className="inp"
                            placeholder="pillulerouge@gmail.com"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {/* <input className='inp' type="text" placeholder='pillulerouge@gmail.com' /> */}
                        </div>
                        <div className="Email_inp">
                          <div className="mail">Mot de passe</div>
                          <Field
                            type="password"
                            name="password"
                            className="inp"
                            placeholder="Mot de passe"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {/* <input className='inp' type="text" placeholder='Mot de passe' /> */}
                        </div>
                        <div className="border_text">Mot de passe oublié</div>
                        {/* <div className="login_btn"> */}
                        <button type="submit" className="login_btn btn_1">
                          Se connecter
                        </button>
                        {/* </div> */}
                      </Form>
                    </Formik>
                    <div className="b_heading">
                      <div className="div-26">Besoin de créer un compte ?</div>
                      <Link to={"/signup"} className="div-27">
                        Inscrivez-vous
                      </Link>
                    </div>
                    <div className="cookie_sec">
                      <Link to={"/cookies"} className="cookie">
                        Cookies
                      </Link>
                      <Link to={"/notice_legale"} className="legale">
                        Légale
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="6" className="d-lg-flex d-none">
                <img src={"/Images/login.png"} className="login_img"></img>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
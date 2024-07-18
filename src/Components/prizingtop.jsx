import React, { useEffect } from "react";
// ENTER_THEMATRIX-MODEL.scss
import { Link } from "react-router-dom";
import KeyboardBackspaceTwoToneIcon from "@mui/icons-material/KeyboardBackspaceTwoTone";

export default function Prizingtop() {


  return (
    <div className="Prizingtop">
      <div className="Back_box ms-md-3 ms-1">
        <div className="icon-box">
          <Link to="/home">
            {" "}
            <KeyboardBackspaceTwoToneIcon />
          </Link>
        </div>
        <div className="icon-box">
          <Link to="/home">
            <p>Retour dans la matrice</p>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="Header-box">
          <div className="Heading">
            <h1 className='large'>DEBLOQUEZ LA PUISSANCE DE MORPHEUS</h1>
          </div>


          <div className="simple-text">
            <p>Choisissez le plan qui vous convient le plus</p>
          </div>
          <div className="button-box">
            <div>
              <Link to={"/mensuel"} className="btn-5 active">
                ANNUEL (-20%)
              </Link>
            </div>
            <div>
              <Link to={"/annuel"} className="btn-5">
                MENSUEL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

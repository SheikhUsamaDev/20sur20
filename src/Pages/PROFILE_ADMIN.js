import React from "react";
import { PieHole } from "../Components/PieHoleChart";
import { Charts } from "../Components/Chart";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PROFILE_ADMIN = () => {
  const user = useSelector((state) => state.auth.user);
  if (!user || user?.role != "admin") return <Navigate to="/login" />;
  return (
    <div className="PROFILE_ADMINISTRATOR">
      <div className="Box">
        <h1>PROFILE_ADMINISTRATOR</h1>
      </div>

      <div className="Graph-box">
        <div>
          <div className="flex-box-5">
            <div>
              <p>
                <Button className="btn-5">AUJOURD'HI</Button>
              </p>
            </div>
            <div>
              <p>
                <Button className="btn-5">CETTE SEMAINE</Button>
              </p>
            </div>
            <div>
              <p>
                <Button className="btn-5">CE MOIS-CI</Button>
              </p>
            </div>
            <div>
              <p>
                <Button className="btn-5">CE TRIMESTRE</Button>
              </p>
            </div>
            <div>
              <p>
                <Button className="btn-5">CETTE ANNEE</Button>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <div className="text-box_2">
              <div>
                <p className="md-text">UTILISATEURS INSCRIPTS</p>
                <p className="lg-text">5 987,34</p>
                <p className="sm-text">montant de ce mois-ci</p>
              </div>
            </div>
            <div className="Graph">
              <Charts />
            </div>
          </div>

          <div className="col-xl-4">
            <div className="text-box_2">
              <div>
                <p className="md-text">UTILISATEURS INSCRIPTS</p>
                <p className="lg-text">5 987,34</p>
                <p className="sm-text">montant de ce mois-ci</p>
              </div>
            </div>
            <div className="Graph">
              <Charts />
            </div>
          </div>

          <div className="col-xl-4">
            <div className="text-box_2">
              <div>
                <p className="md-text">PILLULE BLEU/PILLULE ROUGE</p>
                <p className="lg-text">5.533</p>
              </div>
            </div>
            <div className="Piehole">
              <PieHole />
            </div>
          </div>
        </div>
      </div>

      <div className="Graph-box mt-5">
        <div className="row">
          <div className="col-xl-6">
            <div className="text-box_2">
              <div>
                <p className="md-text">UTILISATEURS INSCRIPTS</p>
                <p className="lg-text">5 987,34</p>
                <p className="sm-text">montant de ce mois-ci</p>
              </div>
            </div>
            <div className="Graph">
              <Charts />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="text-box_2">
              <div>
                <p className="md-text">UTILISATEURS INSCRIPTS</p>
                <p className="lg-text">5 987,34</p>
                <p className="sm-text">montant de ce mois-ci</p>
              </div>
            </div>
            <div className="Graph">
              <Charts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PROFILE_ADMIN;

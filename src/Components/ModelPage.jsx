import React from "react";
import Togglebtn from "./ToggleBtn";
import ModalRanges from "./ModelRanges";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModelPage(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <div className="Model_page">
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            
          </Modal.Header>
          <Modal.Title>paramètres avancés</Modal.Title>

          <Modal.Body>
            <div className="box">
              <div className="flex">
                <div>
                  <div className="lg-text">Haute Résolution</div>
                  <div className="sm-text">
                    Résolution en sortie : 1236 x 768
                  </div>
                </div>

                <div>
                  <Togglebtn />
                </div>
              </div>
            </div>

            <div className="box">
              <div className="flex">
                <div>
                  <div className="lg-text">Boost du Contraste</div>
                  <div className="sm-text">Niveau du boost : 0.5</div>
                </div>

                <div>
                  <Togglebtn />
                </div>
              </div>

              <div>
                <ModalRanges />
              </div>
            </div>

            <div className="box border-none">
              <div className="flex">
                <div>
                  <div className="lg-text">Raisonnance</div>
                  <div className="sm-text">Niveau de la raisonnance : 0.5</div>
                </div>

                <div>
                  <Togglebtn />
                </div>
              </div>

              <div>
                <ModalRanges />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="mx-auto">
            <Button className="btn-1" onClick={handleClose}>
              ANNULER
            </Button>
            <Button className="btn-2" onClick={handleClose}>
              SAUVEGARDER
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

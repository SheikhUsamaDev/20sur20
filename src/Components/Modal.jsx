import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmationModal({show,setShow, heading,text,handleClick,btnText}) {
//   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:"white"}}>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Reject
          </Button>
          <Button variant="success" onClick={handleClick}>
            {btnText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmationModal;
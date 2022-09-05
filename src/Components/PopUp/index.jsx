import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function PopUp(props) {
    console.log("props", props);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

  return (
    <div onClick={toggle}>PopUp <Modal>hi</Modal> </div>
  )
}

export default PopUp
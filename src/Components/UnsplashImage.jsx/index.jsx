import React, { useState } from "react";
import styled from "styled-components";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UnsplashImage = ({ url, key }) => {
   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);
  return (
    <>
      <Img
        key={key}
        src={url}
        alt=""
        className="galleryChildren"
        // onClick={(e) => console.log("e", e.target.currentSrc)}
        // onClick={() => {toggle()}}
      />
      <Modal isOpen={modal} toggle={toggle} ><ModalBody>Test </ModalBody></Modal>
    </>
  );
};

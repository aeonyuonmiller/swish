"use client"

import { motion } from "motion/react";
import styled from "@emotion/styled";

const Overlay = styled(motion.div)`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  margin: 0;
  align-items: center;
  justify-content: center;
  background: #000000a4;
  backdrop-filter: blur(4px);
  z-index: 9999;
`;

const ModalCard = styled(motion.div)`
    background: whitesmoke;
    color: #000;
    width: 600px;
    min-height: 33vh;
    border-radius: 32px;

  & h2,h3,h4,h5 {
    text-align: center;
  }
`;

const CloseWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    top: 2rem;
    transform: translate3d(0, -200%, 0);
    /* margin: 0; */
`;

const CloseButton = styled(motion.button)`
    /* position: relative; */
    /* top: 30px; */
    /* left: calc(100% - 45px); */
    margin: 0;
    /* margin-left: auto; */
    /* left: 100px; */
    background: #333;
    color: white;
    border: none;
    border-radius: .5rem;
    padding: 1.5rem;
    width: fit-content;
    height: 60px;
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease .4s;

  &:focus-visible {
    outline: 4px solid tomato;
    outline-offset: 4px;
  }

  &:hover {
    background: #ccc;
    color: #000;
  }
`;

const Modal = ({ onClose, children }) => {
  return <Overlay
    onClick={onClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { delay: .2, duration: .5 } }}
  >
    <ModalCard
      onClick={(e) => e.stopPropagation()}
      initial={{ scaleY: 0.1, scale: 0, y: "100%" }}
      animate={{ scaleY: 1, scale: 1, y: 0 }}
      exit={{ y: "300%", scale: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <CloseWrapper>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </CloseWrapper>

      {children}
    </ModalCard >
  </Overlay >
}
export default Modal;
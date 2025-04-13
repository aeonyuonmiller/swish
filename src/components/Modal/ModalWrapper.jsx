"use client"
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Modal from "../Modal/Modal"

const ModalWrapper = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="modal-wrapper">
            {/* <button className="open-button" onClick={() => setIsOpen(true)}> */}
            <button style={{ marginTop: "1em" }} className="toggle-button" layoutId="modal" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close ©" : "Open ♥️"}
            </button>
            <AnimatePresence>
                {isOpen && <Modal layoutId="modal" onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
        </div >
    );
}
export default ModalWrapper;
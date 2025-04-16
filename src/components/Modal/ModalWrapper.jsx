"use client"
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Modal from "../Modal/Modal"

const ModalWrapper = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="modal-wrapper">
            {/* <button className="open-button" onClick={() => setIsOpen(true)}> */}
            <button className="toggle-button" layoutId="modal" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Opened" : "Open ♥️"}
            </button>
            <AnimatePresence>
                {isOpen && <Modal children={children} layoutId="modal" onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
        </div >
    );
}
export default ModalWrapper;
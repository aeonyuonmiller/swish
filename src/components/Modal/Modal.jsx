"use client"

import { motion } from "motion/react";

const Modal = ({ onClose }) => {
    return <motion.div
        className="overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <motion.div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}>
            <h5>Exclusive Offer Just for You!</h5>
            <p>Get 20% off your next purchase!</p>
            <button className="close-button" onClick={onClose}>
                Close
            </button >
        </motion.div >
    </motion.div >
}
export default Modal;
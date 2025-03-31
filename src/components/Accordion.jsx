"use client";

import React from "react";
import { motion } from "framer-motion";

const accordionVariants = {
    open: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const Accordion = ({ title, children }) => {
    const id = `accordion-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div style={styles.accordion}>
            <input type="checkbox" id={id} style={styles.checkbox} />
            <label htmlFor={id} style={styles.label}>{title}</label>
            <motion.div
                className="content"
                style={styles.content}
                variants={accordionVariants}
                initial="closed"
                animate="closed"
            >
                {children}
            </motion.div>
        </div>
    );
};

// Inline styles
const styles = {
    accordion: {
        width: "100%",
        maxWidth: "400px",
        margin: "10px auto",
        borderBottom: "1px solid #ccc",
        paddingBottom: "5px",
    },
    checkbox: {
        display: "none",
    },
    label: {
        display: "block",
        padding: "10px",
        backgroundColor: "#333",
        color: "#fff",
        cursor: "pointer",
        borderRadius: "5px",
    },
    content: {
        overflow: "hidden",
        padding: "10px",
        backgroundColor: "#f8f8f8",
        borderRadius: "5px",
    },
};

export default Accordion;

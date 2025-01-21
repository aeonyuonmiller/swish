import { useRef, useState } from 'react'
import { motion } from 'motion/react';

export default function Magnetic({ children }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX, y: middleY })
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onTouchMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            // transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            // transition={{ type: "spring", stiffness: 150, damping: 10, mass: 1 }}
            transition={{ type: "spring", bounce: .6, duration: .8 }}
        >
            {children}
        </motion.div>
    )
}
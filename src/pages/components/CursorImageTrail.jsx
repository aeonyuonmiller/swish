import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const CursorImageTrail = ({ children }) => {
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newTrail = [...trail, { x: e.clientX, y: e.clientY }];
            if (newTrail.length > 10) newTrail.shift(); // Limit trail length
            setTrail(newTrail);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [trail]);

    return (
        <>
            {trail.map((pos, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: 'fixed',
                        left: pos.x,
                        top: pos.y,
                        pointerEvents: 'none',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {children}
                </motion.div>
            ))}
        </>
    );
};

export default CursorImageTrail;

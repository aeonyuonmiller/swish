import { motion } from "motion/react";
import { useState, useEffect } from "react";

const MagneticLogo = ({ color = "#C6FF6A" }) => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [isClient, setIsClient] = useState(false); // Ensure client-side execution

    useEffect(() => {
        setIsClient(true); // Runs only on the client

        const handleMouseMove = (e) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Avoid window-related calculations on the server
    const magnetize = (x, y) => {
        if (!isClient) return { x: 0, y: 0 }; // Prevents "window is not defined" error

        const dx = mouse.x - (window.innerWidth / 2 + x);
        const dy = mouse.y - (window.innerHeight / 2 + y);
        const dist = Math.sqrt(dx ** 2 + dy ** 2);
        const maxDist = 150;

        if (dist < maxDist) {
            const strength = (maxDist - dist) / maxDist;
            return { x: dx * strength * 0.2, y: dy * strength * 0.2 };
        }
        return { x: 0, y: 0 };
    };

    const transition = { type: "spring", stiffness: 150, damping: 15 };

    return (
        <motion.svg
            width="100%"
            // height="200"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
            <motion.g animate={magnetize(0, 0)} transition={transition}>
                <rect x="50" y="97" width="11" height="11" rx="5.5" fill={color} />
            </motion.g>

            <motion.g animate={magnetize(-10, -10)} transition={transition}>
                <rect x="63" y="86" width="22" height="11" rx="5.5" transform="rotate(45 63 86)" fill={color} />
            </motion.g>

            <motion.g animate={magnetize(-20, -20)} transition={transition}>
                <rect x="79" y="84" width="22" height="11" rx="5.5" transform="rotate(45 79 84)" fill={color} />
            </motion.g>

            <motion.g animate={magnetize(-30, -30)} transition={transition}>
                <rect width="22" height="11" rx="5.5" transform="matrix(-0.707 0.707 0.707 0.707 97 97)" fill={color} />
            </motion.g>

            <motion.g animate={magnetize(-40, -40)} transition={transition}>
                <rect x="104" y="86" width="22" height="11" rx="5.5" transform="rotate(45 104 86)" fill={color} />
            </motion.g>

            <motion.g animate={magnetize(-50, -50)} transition={transition}>
                <rect x="120" y="86" width="22" height="11" rx="5.5" transform="rotate(45 120 86)" fill={color} />
            </motion.g>

            <motion.g animate={magnetize(-60, -60)} transition={transition}>
                <rect x="136" y="86" width="22" height="11" rx="5.5" transform="rotate(45 136 86)" fill={color} />
            </motion.g>
        </motion.svg>
    );
};

export default MagneticLogo;
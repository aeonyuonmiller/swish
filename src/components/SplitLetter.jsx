"use client"
import { motion } from 'motion/react';

export function SplitLetter({ children, ...rest }) {
    let letters = children.split('');
    return (
        <span style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
            {letters.map((letter, i) => (
                <span
                    key={children + i}
                    style={{ display: 'inline-block', overflow: 'visible' }}
                >
                    <motion.span
                        {...rest}
                        // initial={{ scale: 0.5, opacity: 0, y: "50%", rotate: "16deg", filter: "blur(16px)" }}
                        initial={{
                            y: "200%",
                            scale: .9,
                            opacity: 0,
                            rotateX: 90,
                            transformStyle: "preserve-3d",
                            perspective: 9999,
                            transformOrigin: "50% 50%",
                            margin: "0 auto"
                        }}
                        animate={{
                            y: "0%",
                            scale: 1,
                            opacity: 1,
                            rotateX: 0,
                            transformStyle: "preserve-3d",
                            perspective: 9999,
                            transformOrigin: "50% 50%",
                            margin: "0 auto"
                        }}
                        exit={{
                            y: "-10%",
                            scale: 0,
                            opacity: 0,
                            rotateX: -10,
                            transition: {
                                delay: i * 0.05,
                                type: "spring",
                                duration: .4,
                                bounce: 0.1 // (0 = no bounce, 1 = full bounce)
                            }
                        }}
                        transition={{
                            delay: i * 0.05,
                            type: "spring",
                            stiffness: 40, // controls speed (higher = faster)
                            damping: 10, // controls bounce resistance (higher = less bounce)
                            bounce: 0.3 // (0 = no bounce, 1 = full bounce)
                        }}
                        style={{ display: 'inline-block', willChange: 'transform' }}
                        custom={i}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

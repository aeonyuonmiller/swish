// "use client"

import { useRef } from "react";
import { useScroll, useTransform, motion } from 'motion/react';
import { SplitLetter } from "./SplitLetter";

export default function Hero({ title, image }) {

    // Scroll Anim
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        // 'element container' 
        offset: ['start start', 'end start']
    })
    const parallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const o = useTransform(scrollYProgress, [0, 1], [1, 0.4])
    const fade = useTransform(scrollYProgress, [0, .3], [1, 0])

    return (
        <>
            <motion.div ref={container} className="hero-wrapper">
                {image &&
                    <motion.img
                        style={{ y: parallax, transformOrigin: "50% 50%", left: 0 }}
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.02, opacity: 0, transition: { delay: .2 } }}
                        src={image}
                        alt="whatever"
                        className="bg-image"
                    />
                }

                <motion.h1 style={{ opacity: fade }}>
                    <SplitLetter>
                        {title}
                    </SplitLetter>
                </motion.h1>

                <motion.div
                    className="details"
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    viewport={{ once: false }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                                delay: .2
                            }
                        }
                    }}
                >
                    {detailsData.map(({ icon, title, text }, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                            }}
                        >
                            <img src={icon} alt="file icon" />
                            <h6>{title}</h6>
                            <p>{text}</p>
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
            <StyleSheet />
        </>
    );
}

const detailsData = [
    { icon: "file.svg", title: "Client", text: "Bundeszentralamt für Steuern (BZSt)" },
    { icon: "globe.svg", title: "Services", text: "Branding, Design, Webdevelopment" },
    { icon: "window.svg", title: "Technology", text: "Nextjs, Motion, Prismic, Shopify" },
    { icon: "file.svg", title: "Details", text: "okeofke ekfe f e fef e fwf efw ef ew" },
    { icon: "vercel.svg", title: "Year", text: "2024" }
];

function StyleSheet() {
    return (
        <style>{`
        .hero-wrapper{
            position: relative;
            display: grid;
            place-items: start center;
            padding: 39vh 0 4vh 0;
            height: 150vh;
            width: 100vw;
            background-color: whitesmoke;
            color: whitesmoke;
            overflow: hidden;
        }
        
        .details {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80%;
            bottom: 10%;
            padding: 2em 0 0 2em;
            border-radius: 30px; 
            gap: 2em;
            color: black;
        }
        
        .details span{
            min-width: 8em;
            display: grid;
            place-items: center;
            background: white;
            border-radius: 30px;
            padding: 2rem;
        }
        .details span img{
            fill: black;
            mix-blend-mode: difference;
        }

        h6 {
            margin-top: 1em;
        }

        span img{
            height: 16px;
            width: 16px;
            margin-bottom: .6em;
        }

        .bg-image{
            position: absolute;
            top: 0;
            height: 100%;
            object-fit: cover;
            opacity: 0.8; 
        }

        @media (max-width: 1000px) {
            .details{
                flex-direction: column;
            }

            span img{
                display: none;
            }
        }
    `}</style>
    );
}

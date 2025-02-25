"use client"

import { motion } from "motion/react";

export default function Hero({ children, title }) {
    return (
        <>
            <motion.div className="hero-wrapper" exit>
                <h1>{title}</h1>

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
                                delay: .5
                            }
                        }
                    }}
                >
                    {detailsData.map(({ title, text }, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                        >
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
    { title: "Client", text: "Bundeszentralamt für Steuern (BZSt)" },
    { title: "Services", text: "Branding, Design, Webdevelopment" },
    { title: "Technology", text: "Nextjs, Motion, Prismic, Shopify" },
    { title: "Details", text: "okeofke ekfe f e fef e fwf efw ef ew" },
    { title: "Year", text: "2024" }
];

function StyleSheet() {
    return (
        <style>{`
        .hero-wrapper{
            display: grid;
            place-items: end center;
            padding: 15vh 0;
            height: 150svh;
            width: 100vw;
            background-color: #845252;
            color: whitesmoke;
        }
        
        .details {
            display: flex;
            justify-content: space-around;
            width: 80%;
            padding-top: 0px;
            gap: 2em;
            color: whitesmoke;
            border-bottom: 4px solid #ffffff19;
        }
        
        .details span{
            min-width: 8em;
            display: grid;
            place-items: center;
        }

        h6 {
            margin-top: 1em;
        }

        @media (max-width: 1000px) {
            .details{
                flex-direction: column;
            }

            .hero-wrapper{
                background-color: #579b82;
            }
        }
    `}</style>
    );
}

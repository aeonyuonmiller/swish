import { useRef } from "react";
import { useScroll, useTransform, motion } from 'motion/react';
import Head from "next/head";
import Link from "next/link";
import Transition from "../components/Transition";
import Hero from "../components/Hero";

export default function IndexLayout({ title, children }) {

    // Scroll Anim
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        // 'element container' 
        offset: ['start start', 'end start']
    })
    const parallax = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

    return (

        <>
            <Head>
                <title>swish</title>
                <meta name="description" content="Starter template" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero title={title} image="files/out-there.jpg" />

            <Transition ref={container}>
                <motion.div style={{ y: parallax, transformOrigin: "0% 50%", marginTop: "20vh" }}>
                    <h2>Let's Explore</h2>
                </motion.div>
                {children}
            </Transition>
        </>
    );
}

// export default IndexLayout;

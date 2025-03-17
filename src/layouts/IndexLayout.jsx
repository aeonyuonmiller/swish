import { useRef } from "react";
import { useScroll, useTransform, motion } from 'motion/react';
import Head from "next/head";
import Link from "next/link";
import Transition from "../components/Transition";
import Hero from "../components/Hero";

export default function IndexLayout({ title, date, color, children }) {

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
                <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>
                <Link href="/services">Services</Link>

                <h2>Headline 2</h2>
                <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>

                <div>
                    <h4>Works</h4>
                </div>
                <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>
                <Link href="/services">Services</Link>

                <h2>Headline 2</h2>
                <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>
            </Transition>
        </>
    );
}

// export default IndexLayout;

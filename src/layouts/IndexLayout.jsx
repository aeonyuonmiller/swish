import { useRef } from "react";
import { useScroll, useTransform, motion } from 'motion/react';
import Head from "next/head";
import Link from "next/link";
import Transition from "../components/Transition";
import Hero from "../components/Hero";

export default function IndexLayout({ title, children }) {

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
                {children}
            </Transition>
        </>
    );
}

// export default IndexLayout;

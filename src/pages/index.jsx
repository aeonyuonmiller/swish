import { useRef } from "react";
import { useScroll, useTransform, motion } from 'motion/react';
import Head from "next/head";
import Link from "next/link";
import Transition from "./components/Transition";
import HorizonSlider from "./components/HorizonSlider/HorizonSlider";

export default function Home() {
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

      <Transition ref={container}>
        <motion.div style={{ y: parallax, transformOrigin: "0% 50%", marginTop: "45vh" }}>
          <h1>Welcome</h1>
        </motion.div>
        <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>
        <Link href="/about">About</Link>

        <h2>Headline 2</h2>
        <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>
      </Transition>

      <HorizonSlider />

      <Transition>
        <div>
          <h4>Welcome</h4>
        </div>
        <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>
        <Link href="/about">About</Link>

        <h2>Headline 2</h2>
        <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>
      </Transition>

      {/* <section className="sticky">
        <div className="slider">
          <div className="slides">
            <div className="slide">
              <div className="img"><img src="space.png" alt="" /></div>
              <div className="copy">
                <h2>Title</h2>
              </div>
            </div>

            <div className="slide">
              <div className="img"><img src="space.png" alt="" /></div>
              <div className="copy">
                <h2>Title</h2>
              </div>
            </div>

            <div className="slide">
              <div className="img"><img src="space.png" alt="" /></div>
              <div className="copy">
                <h2>Title</h2>
              </div>
            </div>

            <div className="slide">
              <div className="img"><img src="space.png" alt="" /></div>
              <div className="copy">
                <h2>Title</h2>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

import "../styles/globals.css"
import Link from 'next/link';
import Layout from '../components/layout'
import { AnimatePresence, MotionConfig } from "motion/react"
import useLenis from "./hooks/useLenis";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Logo from "../components/Logo";

export default function App({ Component, pageProps, router }) {
  useLenis();

  return (
    <MotionConfig reducedMotion="user">
      
        <Link className="logo" href="/">
          <Logo />
          {/* <Logo color="#C6FF6A" /> */}
        </ Link>
        {/* <PrismicPreview repositoryName={repositoryName}> */}
      <Layout>
        <Nav />
            <AnimatePresence mode='wait' onExitComplete={() => window.scrollTo(0, 0)}>
              <Component key={router.route} {...pageProps} />
            </AnimatePresence>
          <Footer />
          </Layout>
        {/* </PrismicPreview> */}
        {/* <Cookies /> */}
      </MotionConfig>
  )
}

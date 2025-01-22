import "../styles/globals.css"

import Layout from './components/layout'
import { AnimatePresence, MotionConfig } from "motion/react"
import useLenis from "./hooks/useLenis";
import Footer from "./components/Footer/Footer";
// import Logo from "./components/Logo";

export default function App({ Component, pageProps, router }) {
  useLenis();

  return (
    <MotionConfig reducedMotion="user">
        <div className="logo">
          {/* <Logo color="#C6FF6A" /> */}
        </div>
        {/* <PrismicPreview repositoryName={repositoryName}> */}
          <Layout>
            {/* <div className="half"></div> */}
            <AnimatePresence mode='wait' onExitComplete={() => window.scrollTo(0, 0)}>
              <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        <Footer />
          </Layout>
        {/* </PrismicPreview> */}
      
        {/* <Navi /> */}
        {/* <Cookies /> */}
      </MotionConfig>
  )
}

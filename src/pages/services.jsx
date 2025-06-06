import Head from "next/head";
import Link from "next/link";
import Transition from "../components/Transition";

// import Magnetic from "./components/Magnetic";
// import Image from "next/image";
import Hero from "../components/Hero";
import HorizontalScrollGallery from "../components/Carousel";
import Carousel from "../components/Carousel";
import AccordionDos from "../components/AccordionDos";
import AccordionTres from "../components/AccordionTres";
import SlidingImageCursorTrail from "../components/SlidingImageCursorTrail";

const items = [
    {
        header: 'Section 1',
        content: 'Content for section 1',
    },
    {
        header: 'Section 2',
        content: 'Content for section 2',
    },
    {
        header: 'Section 3',
        content: 'Content for section 3 schreib mir so einen rictig langen text damit ich sehen kann wie es hier umbricht. Content for section 3 schreib mir so einen rictig langen text damit ich sehen kann wie es hier umbricht. Content for section 3 schreib mir so einen rictig langen text damit ich sehen kann wie es hier umbricht. Content for section 3 schreib mir so einen rictig langen text damit ich sehen kann wie es hier umbricht. Content for section 3 schreib mir so einen rictig langen text damit ich sehen kann wie es hier umbricht.',
    },
];

export default function Services() {

    return (
        <>
            <Head>
                <title>services</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero title="Work" image="files/manuel-weber-min.jpg" />

            <Transition>

                <h1>Whitelabel</h1>
                <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>
                <Link href="/">Go to index</Link>

                <AccordionDos items={items} />

                <h2>Headline 2</h2>
                <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>

                {/* <AccordionTres
                    items={[
                        { header: 'First', content: 'First content' },
                        { header: 'Second', content: 'Second content' },
                        { header: 'Third', content: 'Third content' },
                    ]}
                    mode="radio" // or "checkbox"
                /> */}

                <h3>Headline 3</h3>
                <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>

                <h6>Headline 6</h6>
                <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>

            </Transition>

            <SlidingImageCursorTrail />


            <Carousel>
                {/* <img src="files/out-there.jpg" alt="Image 1" style={{ width: "300px", height: "400px", borderRadius: "15px" }} />*/}
                <img src="files/out-there.jpg" alt="Image 1" style={{ width: "300px", height: "400px", borderRadius: "15px" }} />
                <img src="files/out-there.jpg" alt="Image 1" style={{ width: "300px", height: "400px", borderRadius: "15px" }} />
                <img src="files/out-there.jpg" alt="Image 1" style={{ width: "300px", height: "400px", borderRadius: "15px" }} />
                <img src="files/out-there.jpg" alt="Image 1" style={{ width: "300px", height: "400px", borderRadius: "15px" }} />
                <img src="files/out-there.jpg" alt="Image 1" style={{ width: "300px", height: "400px", borderRadius: "15px" }} />
                <img src="files/out-there.jpg" alt="Image 1" style={{ width: "300px", height: "400px", borderRadius: "15px" }} />
            </Carousel>
        </>
    );
}

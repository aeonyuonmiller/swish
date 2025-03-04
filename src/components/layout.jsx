// import Navbar from './navbar'
// import Footer from './footer'
// import { motion } from "motion/react"
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Layout({ children }) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable}`}>
            {/* <Navbar /> */}
            {children}
            {/* <Footer /> */}
        </div>
    )
}
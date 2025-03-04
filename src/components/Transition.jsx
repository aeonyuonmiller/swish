import { motion } from "motion/react"

export default function Transition({ children }) {
    return (
        <motion.div
            className="transition-container"
            initial={{ y: 80, opacity: 0 }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    // ease: [.89, .01, .44, 1],
                    duration: .5,
                    bounce: .2
                }
            }}
            exit={{
                y: -20,
                opacity: 0,
                transition: {
                    type: "spring",
                    // ease: [.89, .01, .44, 1],
                    duration: .25,
                    bounce: .2
                }
            }}
        >
            {children}
        </motion.div >
    )
}
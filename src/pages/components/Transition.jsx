import { motion } from "motion/react"

export default function Transition({ children }) {
    return (
        <motion.div
            className="transition-container"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{
                type: "spring",
                // ease: [.89, .01, .44, 1],
                duration: .6,
                bounce: .2
            }}
        >
            {children}
        </motion.div>
    )
}
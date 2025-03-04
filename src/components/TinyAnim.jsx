import { motion } from "motion/react"

const TinyAnim = ({ children }
) => (
    <motion.div
        initial={{ x: 40, y: 40, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -40, y: -40, opacity: 0 }}
        transition={{
            type: "spring",
            duration: .6,
            bounce: .1
        }}>
        {children}
    </motion.div>
);

export default TinyAnim;
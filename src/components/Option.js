import { motion } from 'framer-motion';

export default function Option({ number }) {
    return (
        <motion.button
        className={`Option Option-${number}`}
        >
            Option {number}
        </motion.button>
    )
}
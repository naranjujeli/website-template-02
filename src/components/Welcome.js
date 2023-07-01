import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Welcome() {
    const animationControls = useAnimation();
    useEffect(() => {
        setTimeout(() => {
            animationControls.start({
                y: [0, -80, 0, 0],
                transition: {
                    times: [0, 0.2, 0.5, 1],
                    ease: "easeOut",
                    duration: 4,
                    repeat: Infinity
                }
            });
        }, 2000);
    });
    
    return (
        <div className="Welcome">
            <motion.h1
            className="Welcome-h1"
            animate={animationControls}
            >
            Please, buy my product, thank you very much
            </motion.h1>
        </div>
    );
}
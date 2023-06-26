import { motion } from 'framer-motion';

function Logo() {
    return (
        <>
            <motion.svg
            transition={{
                duration: .2, 
                damping: 10, 
                stiffness: 200, 
                type: "spring"
            }} 
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.8 }} 
            className="Logo" 
            viewBox="0 0 100 100"
            >
                <motion.path
                className="Logo-path"
                transition={{ 
                    pathLength: {
                        duration: 2,
                        ease: "circOut" 
                    },
                    fillOpacity: {
                        duration: 2,
                    },
                    fill: {
                        duration: 2,
                        ease: "easeIn"
                    }
                }} 
                initial={{ fillOpacity: "0%", pathLength: 0 }} 
                animate={{ fill: ["rgb(0, 0, 0)", "rgb(255, 0, 0)", "rgb(0, 0, 0)"], fillOpacity: ["0%", "100%", "100%"], pathLength: 1 }} 
                d="M 50 80 C 0 50 20 5 50 35 C 80 5 100 50 50 80" 
                stroke="white" 
                strokeWidth="2px"
                />
            </motion.svg>
        </>
    );
}

export default Logo;
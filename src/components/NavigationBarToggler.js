import { motion } from 'framer-motion';

function NavigationBarToggler({ navbarIsExpanded, setNavbarIsExpanded }) {
    const transitionOptions = { duration: .2, type: "tween", ease: "easeOut" };
    
    return (
        <>
            <svg
            className="NavigationBarToggler"
            onClick={() => setNavbarIsExpanded(!navbarIsExpanded)}
            viewBox="0 0 100 100"
            >
                <motion.path
                variants={{
                    "hide": {
                        y: [20, 20, 0],
                        rotate: [45, 0, 0]
                    },
                    "show": {
                        y: [0, 20, 20],
                        rotate: [0, 0, 45]
                    }
                }}
                transition={transitionOptions}
                d="M 20 30 h 60"
                />
                <motion.path
                variants={{
                    "hide": {
                        opacity: [0, 1, 1]
                    },
                    "show": {
                        opacity: [1, 0, 0]
                    }
                }}
                initial="hide"
                animate={navbarIsExpanded ? "show" : "hide"}
                transition={transitionOptions}
                d="M 20 50 h 60"
                />
                <motion.path
                variants={{
                    "hide": {
                        y: [-20, -20, 0],
                        rotate: [-45, 0, 0]
                    },
                    "show": {
                        y: [0, -20, -20],
                        rotate: [0, 0, -45]
                    }
                }}
                initial="hide"
                animate={navbarIsExpanded ? "show" : "hide"}
                transition={transitionOptions}
                d="M 20 70 h 60"
                />
            </svg>
        </>
    );
}

export default NavigationBarToggler;
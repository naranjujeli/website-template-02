import { useState } from 'react';
import { motion } from 'framer-motion';

import NavigationBarToggler from  './NavigationBarToggler';
import Logo from './Logo';
import SearchBar from './SearchBar';
import useDeviceIsSmall from '../hooks/useDeviceIsSmall';

import '../styles/NavigationBar.css';
import '../styles/small/NavigationBar-sm.css';
import '../styles/medium/NavigationBar-md.css';
import '../styles/large/NavigationBar-lg.css';

function NavigationBar() {
    const [ navbarIsExpanded, setNavbarIsExpanded ] = useState(false);
    const deviceIsSmall = useDeviceIsSmall();

    return (
        <>
            <motion.nav 
            className="NavigationBar"
            variants={{
                "hide": {
                    clipPath: "polygon(0 0, 100% 0, 100% 80px, 0 80px)"
                },
                "show": {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                }
            }}
            initial="hide"
            animate={navbarIsExpanded ? "show" : "hide"}
            >
                { deviceIsSmall &&
                <NavigationBarToggler 
                navbarIsExpanded={navbarIsExpanded} 
                setNavbarIsExpanded={setNavbarIsExpanded} 
                /> }
                <Logo />
                <SearchBar />
            </motion.nav>
        </>
    );
}

export default NavigationBar;
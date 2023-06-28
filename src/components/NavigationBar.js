import { useState } from 'react';

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
            <nav className="NavigationBar">
                { deviceIsSmall &&
                <NavigationBarToggler 
                navbarIsExpanded={navbarIsExpanded} 
                setNavbarIsExpanded={setNavbarIsExpanded} 
                /> }
                <Logo />
                <SearchBar />
            </nav>
        </>
    );
}

export default NavigationBar;
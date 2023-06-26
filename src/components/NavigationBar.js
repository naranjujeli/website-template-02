import NavigationBarToggler from  './NavigationBarToggler';
import Logo from './Logo';
import SearchBar from './SearchBar';

import '../styles/NavigationBar.css';
import '../styles/small/NavigationBar-sm.css';
import '../styles/medium/NavigationBar-md.css';
import '../styles/large/NavigationBar-lg.css';

function NavigationBar() {
    return (
        <>
            <nav className="NavigationBar">
                <Logo />
                <SearchBar />
            </nav>
        </>
    );
}

export default NavigationBar;
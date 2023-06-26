import NavigationBarToggler from  './NavigationBarToggler';
import Logo from './Logo';
import SearchBar from './SearchBar';

import '../styles/NavigationBar.css';

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
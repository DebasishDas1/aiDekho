import logo from '../../assets/aiDekho.jpg'
import PageOption from './PageOption';
import NavBarProfile from './NavBarProfile';

import { useState, useEffect } from "react";

import styles from './navBar.module.css'

const NavBar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navbarClass = isSticky ? "navbar sticky" : "navbar";

    return (
        <div className={styles.navBar} >
            {/* logo */}
            <div className={styles.navBar__logo} >
                <img src={logo} alt='app logo' />
                <h3>aiDekho</h3>
            </div>
            {/* header option */}
            <div className={styles.navBar__option_list} >
                <PageOption title='Ai libary' link='/' />
                <PageOption title='Submit' link='/submit' />
                <PageOption title='Blog' link='/blog' />
                <PageOption title='About' link='/about' />
                <PageOption title='Contact us' link='/contact' />
            </div>
            {/* profile */}
            <NavBarProfile />
        </div>
    );
};

export default NavBar;
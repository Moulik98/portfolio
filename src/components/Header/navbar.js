import React, { useEffect } from 'react'
// import styles from './navbar.module.css'

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })


    return (
        <div className={scrolled ? styles.scrolled : styles.navbar}>
            <ul className={styles.ul}>
                Something
            </ul>
            Navbar
        </div>
    )

};

export default Navbar;
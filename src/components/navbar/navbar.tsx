'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    Dance<span>Studio</span>
                </Link>

                <button 
                    className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/classes" className={styles.navLink}>Classes</Link>
                    <Link href="/schedule" className={styles.navLink}>Schedule</Link>
                    <Link href="/instructors" className={styles.navLink}>Instructors</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </div>

                <div className={styles.cta}>
                    <Link href="/join" className={styles.ctaButton}>
                        Join Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

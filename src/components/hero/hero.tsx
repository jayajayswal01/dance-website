'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './hero.module.css';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const phrases = ['Ballet', 'Hip Hop', 'Contemporary', 'Jazz'];
    const [currentPhrase, setCurrentPhrase] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.heroSection}>
            <div className={styles.backgroundAnimation}></div>
            <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>
                        Discover Your Rhythm<br />
                        Express Through <span className={styles.highlight}>{phrases[currentPhrase]}</span>
                    </h1>
                    <p className={styles.description}>
                        Unleash your potential through the art of dance. Join our vibrant community
                        of dancers and experience the joy of movement in a supportive environment.
                    </p>
                    <div className={styles.cta}>
                        <Link href="/classes" className={styles.primaryButton}>
                            Explore Classes
                        </Link>
                        <Link href="/schedule" className={styles.secondaryButton}>
                            View Schedule
                        </Link>
                    </div>
                </div>

                <div className={styles.statsContainer}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>10+</span>
                        <span className={styles.statLabel}>Dance Styles</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>15+</span>
                        <span className={styles.statLabel}>Expert Instructors</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>1000+</span>
                        <span className={styles.statLabel}>Happy Students</span>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <div className={styles.scrollText}>Scroll to explore</div>
            </div>
        </section>
    );
};

export default Hero;

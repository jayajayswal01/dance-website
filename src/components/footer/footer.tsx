'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription here
        setIsSubscribed(true);
        setTimeout(() => setIsSubscribed(false), 3000);
        setEmail('');
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerGlow}></div>
            
            <div className={styles.container}>
                {/* Top Section */}
                <div className={styles.topSection}>
                    <div className={styles.brandSection}>
                        <h2 className={styles.logo}>Dance<span>Studio</span></h2>
                        <p className={styles.tagline}>
                            Where passion meets performance and dreams take flight through dance.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="TikTok">
                                <i className="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksGrid}>
                        <div className={styles.linkColumn}>
                            <h3>Quick Links</h3>
                            <Link href="/">Home</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/classes">Classes</Link>
                            <Link href="/schedule">Schedule</Link>
                            <Link href="/contact">Contact</Link>
                        </div>

                        <div className={styles.linkColumn}>
                            <h3>Classes</h3>
                            <Link href="/classes/ballet">Ballet</Link>
                            <Link href="/classes/hip-hop">Hip Hop</Link>
                            <Link href="/classes/contemporary">Contemporary</Link>
                            <Link href="/classes/jazz">Jazz</Link>
                            <Link href="/classes/kids">Kids Dance</Link>
                        </div>

                        <div className={styles.linkColumn}>
                            <h3>Support</h3>
                            <Link href="/faq">FAQ</Link>
                            <Link href="/policies">Policies</Link>
                            <Link href="/terms">Terms of Service</Link>
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/contact">Support</Link>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className={styles.newsletterSection}>
                        <h3>Join Our Newsletter</h3>
                        <p>Stay updated with our latest news and special offers!</p>
                        
                        <form onSubmit={handleSubmit} className={styles.newsletterForm}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                                <button type="submit">Subscribe</button>
                            </div>
                            {isSubscribed && (
                                <div className={styles.successMessage}>
                                    Thank you for subscribing!
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Bottom Section */}
                <div className={styles.bottomSection}>
                    <div className={styles.contactInfo}>
                        <p><i className="fas fa-location-dot"></i> 123 Dance Avenue, New York, NY 10001</p>
                        <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
                        <p><i className="fas fa-envelope"></i> info@dancestudio.com</p>
                    </div>

                    <div className={styles.copyright}>
                        <p>&copy; {new Date().getFullYear()} DanceStudio. All rights reserved.</p>
                    </div>

                    <div className={styles.paymentMethods}>
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-mastercard"></i>
                        <i className="fab fa-cc-amex"></i>
                        <i className="fab fa-cc-paypal"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

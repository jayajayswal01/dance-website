'use client';
import { useState, FormEvent } from 'react';
import styles from './contact.module.css';

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [activeInput, setActiveInput] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <div className={styles.contactGrid}>
                    {/* Info Section */}
                    <div className={styles.infoSection}>
                        <h2 className={styles.title}>Get in Touch</h2>
                        <p className={styles.subtitle}>
                            Have questions? We&apos;d love to hear from you. Send us a message
                            and we&apos;ll respond as soon as possible.
                        </p>

                        <div className={styles.contactInfo}>
                            <div className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <i className="fas fa-location-dot"></i>
                                </div>
                                <h3>Visit Us</h3>
                                <p>123 Dance Avenue</p>
                                <p>New York, NY 10001</p>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <i className="fas fa-phone"></i>
                                </div>
                                <h3>Call Us</h3>
                                <p>+1 (555) 123-4567</p>
                                <p>Mon-Fri: 9am-8pm</p>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <h3>Email Us</h3>
                                <p>info@dancestudio.com</p>
                                <p>support@dancestudio.com</p>
                            </div>
                        </div>

                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className={styles.formSection}>
                        <div className={styles.formWrapper}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        onFocus={() => setActiveInput('name')}
                                        onBlur={() => setActiveInput('')}
                                        className={`${styles.input} ${activeInput === 'name' ? styles.active : ''}`}
                                    />
                                    <label className={`${styles.label} ${formData.name ? styles.filled : ''}`}>
                                        Your Name
                                    </label>
                                </div>

                                <div className={styles.formGroup}>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        onFocus={() => setActiveInput('email')}
                                        onBlur={() => setActiveInput('')}
                                        className={`${styles.input} ${activeInput === 'email' ? styles.active : ''}`}
                                    />
                                    <label className={`${styles.label} ${formData.email ? styles.filled : ''}`}>
                                        Your Email
                                    </label>
                                </div>

                                <div className={styles.formGroup}>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        onFocus={() => setActiveInput('phone')}
                                        onBlur={() => setActiveInput('')}
                                        className={`${styles.input} ${activeInput === 'phone' ? styles.active : ''}`}
                                    />
                                    <label className={`${styles.label} ${formData.phone ? styles.filled : ''}`}>
                                        Phone Number
                                    </label>
                                </div>

                                <div className={styles.formGroup}>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => handleInputChange('subject', e.target.value)}
                                        onFocus={() => setActiveInput('subject')}
                                        onBlur={() => setActiveInput('')}
                                        className={`${styles.input} ${activeInput === 'subject' ? styles.active : ''}`}
                                    />
                                    <label className={`${styles.label} ${formData.subject ? styles.filled : ''}`}>
                                        Subject
                                    </label>
                                </div>

                                <div className={styles.formGroup}>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => handleInputChange('message', e.target.value)}
                                        onFocus={() => setActiveInput('message')}
                                        onBlur={() => setActiveInput('')}
                                        className={`${styles.textarea} ${activeInput === 'message' ? styles.active : ''}`}
                                        rows={4}
                                    />
                                    <label className={`${styles.label} ${formData.message ? styles.filled : ''}`}>
                                        Your Message
                                    </label>
                                </div>

                                <button type="submit" className={styles.submitButton}>
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {isSubmitted && (
                            <div className={styles.successMessage}>
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                    </div>
                </div>

                {/* Map Section */}
                <div className={styles.mapSection}>
                    <div className={styles.mapPlaceholder}>
                        {/* Replace with your actual map integration */}
                        <div className={styles.mapOverlay}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.747489512204!2d72.83775047602073!3d19.4233132409759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4121a8960f0971d%3A0x4dc86d5e2721ed6a!2sSharma%20Interiors!5e0!3m2!1sen!2sin!4v1756206592483!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

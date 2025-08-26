'use client';
import { useState } from 'react';
import styles from './about.module.css';

interface Achievement {
    count: string;
    label: string;
}

interface Story {
    year: string;
    title: string;
    description: string;
}

const achievements: Achievement[] = [
    { count: "10+", label: "Years of Excellence" },
    { count: "1000+", label: "Students Trained" },
    { count: "20+", label: "Dance Styles" },
    { count: "50+", label: "Annual Performances" }
];

const milestones: Story[] = [
    {
        year: "2015",
        title: "Our Beginning",
        description: "Started with a small studio and big dreams to create a vibrant dance community."
    },
    {
        year: "2017",
        title: "Expanding Horizons",
        description: "Introduced new dance styles and expanded to a larger facility to accommodate growing demand."
    },
    {
        year: "2019",
        title: "Competition Success",
        description: "Our students began winning national and international dance competitions."
    },
    {
        year: "2021",
        title: "Community Growth",
        description: "Launched online classes and reached students worldwide during challenging times."
    },
    {
        year: "2023",
        title: "Excellence Center",
        description: "Established our state-of-the-art dance complex with multiple studios."
    }
];

const About = () => {
    const [activeStory, setActiveStory] = useState<number>(0);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                {/* Hero Section */}
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>About Our Dance Studio</h1>
                    <p className={styles.subtitle}>Where Passion Meets Performance</p>
                </div>

                {/* Main Content */}
                <div className={styles.mainContent}>
                    <div className={styles.aboutGrid}>
                        <div className={styles.textContent}>
                            <h2 className={styles.sectionTitle}>Our Story</h2>
                            <p className={styles.description}>
                                Welcome to Dance Studio, where we&apos;ve been inspiring and nurturing dancers 
                                for over a decade. Our journey began with a simple vision: to create a 
                                space where anyone can discover the joy of dance.
                            </p>
                            <p className={styles.description}>
                                Today, we&apos;re proud to be one of the leading dance institutions, offering 
                                comprehensive training in various dance styles. Our commitment to excellence 
                                and passion for dance continues to shape the next generation of dancers.
                            </p>
                        </div>
                        <div className={styles.imageContainer}>
                            <div className={styles.imagePlaceholder}>
                                {/* Replace with actual image */}
                                <div className={styles.imageOverlay} />
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className={styles.achievementsSection}>
                        <div className={styles.achievementsGrid}>
                            {achievements.map((achievement, index) => (
                                <div key={index} className={styles.achievementCard}>
                                    <span className={styles.achievementCount}>{achievement.count}</span>
                                    <span className={styles.achievementLabel}>{achievement.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className={styles.timelineSection}>
                        <h2 className={styles.sectionTitle}>Our Journey</h2>
                        <div className={styles.timeline}>
                            <div className={styles.timelineTrack}>
                                {milestones.map((milestone, index) => (
                                    <div 
                                        key={index}
                                        className={`${styles.timelineItem} ${activeStory === index ? styles.active : ''}`}
                                        onClick={() => setActiveStory(index)}
                                    >
                                        <div className={styles.timelinePoint}>
                                            <span className={styles.timelineYear}>{milestone.year}</span>
                                        </div>
                                        <div className={styles.timelineContent}>
                                            <h3 className={styles.timelineTitle}>{milestone.title}</h3>
                                            <p className={styles.timelineDescription}>{milestone.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mission & Values */}
                    <div className={styles.missionSection}>
                        <div className={styles.missionGrid}>
                            <div className={styles.missionCard}>
                                <h3 className={styles.cardTitle}>Our Mission</h3>
                                <p className={styles.cardText}>
                                    To inspire and empower individuals through the art of dance, 
                                    fostering creativity, confidence, and personal growth in a 
                                    supportive and professional environment.
                                </p>
                            </div>
                            <div className={styles.missionCard}>
                                <h3 className={styles.cardTitle}>Our Vision</h3>
                                <p className={styles.cardText}>
                                    To be the leading dance institution that shapes the future of dance 
                                    education while nurturing talented individuals and promoting artistic excellence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>Start Your Dance Journey Today</h2>
                        <p className={styles.ctaText}>
                            Join our vibrant community and discover the dancer within you
                        </p>
                        <button className={styles.ctaButton}>
                            Schedule a Free Class
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

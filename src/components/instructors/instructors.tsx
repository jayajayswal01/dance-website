'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './instructors.module.css';

interface SocialLinks {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
}

interface Instructor {
    id: number;
    name: string;
    role: string;
    specialties: string[];
    experience: string;
    bio: string;
    image: string;
    socialLinks: SocialLinks;
}

const instructors: Instructor[] = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "Senior Dance Instructor",
        specialties: ["Ballet", "Contemporary", "Modern Dance"],
        experience: "15+ years",
        bio: "Former principal dancer with the National Ballet, Sarah brings grace and precision to every class. Her teaching philosophy emphasizes proper technique and artistic expression.",
        image: "/images/instructors/sarah.jpg",
        socialLinks: {
            instagram: "#",
            youtube: "#",
            tiktok: "#"
        }
    },
    {
        id: 2,
        name: "Mike Rodriguez",
        role: "Hip Hop Specialist",
        specialties: ["Hip Hop", "Break Dance", "Street Jazz"],
        experience: "12+ years",
        bio: "International hip hop champion and choreographer, Mike's dynamic teaching style brings out the best in his students while keeping classes high-energy and fun.",
        image: "/images/instructors/mike.jpg",
        socialLinks: {
            instagram: "#",
            tiktok: "#"
        }
    },
    {
        id: 3,
        name: "Emma White",
        role: "Contemporary Dance Expert",
        specialties: ["Contemporary", "Modern", "Improvisation"],
        experience: "10+ years",
        bio: "Known for her innovative choreography, Emma specializes in contemporary dance and emotional expression through movement.",
        image: "/images/instructors/emma.jpg",
        socialLinks: {
            instagram: "#",
            youtube: "#"
        }
    },
    {
        id: 4,
        name: "Carlos Mendez",
        role: "Latin Dance Instructor",
        specialties: ["Salsa", "Bachata", "Latin Jazz"],
        experience: "13+ years",
        bio: "International Latin dance champion, Carlos brings authentic Latin dance techniques and infectious energy to every class.",
        image: "/images/instructors/carlos.jpg",
        socialLinks: {
            instagram: "#",
            tiktok: "#"
        }
    }
];

const Instructors = () => {
    const [activeInstructor, setActiveInstructor] = useState<number | null>(null);

    return (
        <section className={styles.instructorsSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Meet Our Instructors</h2>
                <p className={styles.subtitle}>Learn from the best in the industry</p>

                <div className={styles.instructorsGrid}>
                    {instructors.map((instructor) => (
                        <div 
                            key={instructor.id}
                            className={`${styles.instructorCard} ${activeInstructor === instructor.id ? styles.active : ''}`}
                            onMouseEnter={() => setActiveInstructor(instructor.id)}
                            onMouseLeave={() => setActiveInstructor(null)}
                        >
                            <div className={styles.imageContainer}>
                                <div className={styles.imagePlaceholder} />
                                <div className={styles.socialLinks}>
                                    {instructor.socialLinks.instagram && (
                                        <a href={instructor.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    )}
                                    {instructor.socialLinks.youtube && (
                                        <a href={instructor.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    )}
                                    {instructor.socialLinks.tiktok && (
                                        <a href={instructor.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                            <i className="fab fa-tiktok"></i>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.name}>{instructor.name}</h3>
                                <p className={styles.role}>{instructor.role}</p>
                                
                                <div className={styles.specialties}>
                                    {instructor.specialties.map((specialty, index) => (
                                        <span key={index} className={styles.specialty}>
                                            {specialty}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.experience}>
                                    <span className={styles.experienceLabel}>Experience:</span>
                                    <span className={styles.experienceValue}>{instructor.experience}</span>
                                </div>

                                <p className={styles.bio}>{instructor.bio}</p>

                                <button className={styles.scheduleButton}>
                                    View Schedule
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.joinTeam}>
                    <h3 className={styles.joinTitle}>Want to Join Our Team?</h3>
                    <p className={styles.joinText}>
                        We're always looking for talented and passionate dance instructors to join our family.
                    </p>
                    <button className={styles.applyButton}>
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Instructors;

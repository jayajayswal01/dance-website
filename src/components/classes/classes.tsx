'use client';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './classes.module.css';
import ClassImage1 from "../../assets/classes/ballet.jpg"
import ClassImage2 from "../../assets/classes/hiphop.jpg"
import ClassImage3 from "../../assets/classes/jazz.jpg"
import ClassImage4 from "../../assets/classes/latindance.jpg"
import ClassImage5 from "../../assets/classes/contemprory.jpg"
import ClassImage6 from "../../assets/classes/powerdance.jpg"

interface DanceClass {
    id: number;
    name: string;
    level: string;
    description: string;
    instructor: string;
    duration: string;
    image: string | StaticImageData;
    category: 'beginner' | 'intermediate' | 'advanced';
}

const danceClasses: DanceClass[] = [
    {
        id: 1,
        name: "Contemporary Ballet",
        level: "Intermediate",
        description: "Blend classical ballet techniques with modern dance elements in this expressive class.",
        instructor: "Sarah Mitchell",
        duration: "90 mins",
        image: ClassImage1,
        category: "intermediate"
    },
    {
        id: 2,
        name: "Hip Hop Fundamentals",
        level: "Beginner",
        description: "Learn the basics of hip hop dance, including popping, locking, and breakdance moves.",
        instructor: "Mike Rodriguez",
        duration: "60 mins",
        image: ClassImage2,
        category: "beginner"
    },
    {
        id: 3,
        name: "Jazz Advanced",
        level: "Advanced",
        description: "Master complex jazz combinations and performance techniques in this advanced class.",
        instructor: "Lisa Johnson",
        duration: "90 mins",
        image: ClassImage3,
        category: "advanced"
    },
    {
        id: 4,
        name: "Latin Dance",
        level: "Beginner",
        description: "Experience the passion of Latin dance styles including Salsa, Bachata, and Merengue.",
        instructor: "Carlos Mendez",
        duration: "60 mins",
        image: ClassImage4,
        category: "beginner"
    },
    {
        id: 5,
        name: "Modern Contemporary",
        level: "Intermediate",
        description: "Explore fluid movements and emotional expression through contemporary dance.",
        instructor: "Emma White",
        duration: "75 mins",
        image: ClassImage5,
        category: "intermediate"
    },
    {
        id: 6,
        name: "Power Dance",
        level: "Advanced",
        description: "High-energy choreography combining multiple dance styles for experienced dancers.",
        instructor: "James Wilson",
        duration: "90 mins",
        image: ClassImage6,
        category: "advanced"
    }
];

const Classes = () => {
    const [filter, setFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
    const [hoveredClass, setHoveredClass] = useState<number | null>(null);

    const filteredClasses = filter === 'all' 
        ? danceClasses 
        : danceClasses.filter(c => c.category === filter);

    return (
        <section className={styles.classesSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Dance Classes</h2>
                <p className={styles.subtitle}>
                    Discover your perfect dance style with our diverse range of classes
                </p>

                <div className={styles.filters}>
                    <button 
                        className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All Classes
                    </button>
                    <button 
                        className={`${styles.filterButton} ${filter === 'beginner' ? styles.active : ''}`}
                        onClick={() => setFilter('beginner')}
                    >
                        Beginner
                    </button>
                    <button 
                        className={`${styles.filterButton} ${filter === 'intermediate' ? styles.active : ''}`}
                        onClick={() => setFilter('intermediate')}
                    >
                        Intermediate
                    </button>
                    <button 
                        className={`${styles.filterButton} ${filter === 'advanced' ? styles.active : ''}`}
                        onClick={() => setFilter('advanced')}
                    >
                        Advanced
                    </button>
                </div>

                <div className={styles.classGrid}>
                    {filteredClasses.map((danceClass) => (
                        <div 
                            key={danceClass.id}
                            className={`${styles.classCard} ${hoveredClass === danceClass.id ? styles.hovered : ''}`}
                            onMouseEnter={() => setHoveredClass(danceClass.id)}
                            onMouseLeave={() => setHoveredClass(null)}
                        >
                            <div className={styles.cardImageContainer}>
                                <div className={styles.cardImage}>
                                 <Image src={danceClass.image} alt={danceClass.name} layout="fill" objectFit="cover" />
                                </div>
                                <div className={styles.level}>{danceClass.level}</div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.className}>{danceClass.name}</h3>
                                <p className={styles.classDescription}>{danceClass.description}</p>
                                <div className={styles.classDetails}>
                                    <div className={styles.detail}>
                                        <span className={styles.detailLabel}>Instructor:</span>
                                        <span>{danceClass.instructor}</span>
                                    </div>
                                    <div className={styles.detail}>
                                        <span className={styles.detailLabel}>Duration:</span>
                                        <span>{danceClass.duration}</span>
                                    </div>
                                </div>
                                <Link href={`/classes/${danceClass.id}`} className={styles.learnMore}>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Classes;

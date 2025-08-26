'use client';
import { useState } from 'react';
import styles from './schedule.module.css';

interface DanceClass {
    id: string;
    name: string;
    instructor: string;
    time: string;
    duration: string;
    level: string;
    room: string;
}

interface ScheduleData {
    [key: string]: DanceClass[];
}

const scheduleData: ScheduleData = {
    Monday: [
        { id: 'm1', name: 'Hip Hop Basics', instructor: 'Mike Rodriguez', time: '09:00', duration: '60 min', level: 'Beginner', room: 'Studio A' },
        { id: 'm2', name: 'Ballet', instructor: 'Sarah Mitchell', time: '11:00', duration: '90 min', level: 'Intermediate', room: 'Studio B' },
        { id: 'm3', name: 'Contemporary', instructor: 'Emma White', time: '14:00', duration: '75 min', level: 'Advanced', room: 'Studio A' },
        { id: 'm4', name: 'Jazz Funk', instructor: 'James Wilson', time: '16:00', duration: '60 min', level: 'All Levels', room: 'Studio C' },
    ],
    Tuesday: [
        { id: 't1', name: 'Latin Dance', instructor: 'Carlos Mendez', time: '10:00', duration: '60 min', level: 'Beginner', room: 'Studio B' },
        { id: 't2', name: 'Modern Dance', instructor: 'Lisa Johnson', time: '12:00', duration: '75 min', level: 'Intermediate', room: 'Studio A' },
        { id: 't3', name: 'Power Dance', instructor: 'James Wilson', time: '15:00', duration: '90 min', level: 'Advanced', room: 'Studio C' },
        { id: 't4', name: 'Street Dance', instructor: 'Mike Rodriguez', time: '17:00', duration: '60 min', level: 'All Levels', room: 'Studio B' },
    ],
    Wednesday: [
        { id: 'w1', name: 'Contemporary Ballet', instructor: 'Sarah Mitchell', time: '09:30', duration: '90 min', level: 'Intermediate', room: 'Studio A' },
        { id: 'w2', name: 'Break Dance', instructor: 'Mike Rodriguez', time: '11:30', duration: '60 min', level: 'Beginner', room: 'Studio C' },
        { id: 'w3', name: 'Jazz Advanced', instructor: 'Lisa Johnson', time: '14:30', duration: '75 min', level: 'Advanced', room: 'Studio B' },
        { id: 'w4', name: 'Salsa', instructor: 'Carlos Mendez', time: '16:30', duration: '60 min', level: 'All Levels', room: 'Studio A' },
    ],
    Thursday: [
        { id: 'th1', name: 'Hip Hop Advanced', instructor: 'James Wilson', time: '10:00', duration: '75 min', level: 'Advanced', room: 'Studio C' },
        { id: 'th2', name: 'Ballet Basics', instructor: 'Sarah Mitchell', time: '12:00', duration: '60 min', level: 'Beginner', room: 'Studio A' },
        { id: 'th3', name: 'Modern Flow', instructor: 'Emma White', time: '14:00', duration: '90 min', level: 'Intermediate', room: 'Studio B' },
        { id: 'th4', name: 'Urban Dance', instructor: 'Mike Rodriguez', time: '16:00', duration: '60 min', level: 'All Levels', room: 'Studio C' },
    ],
    Friday: [
        { id: 'f1', name: 'Jazz Fusion', instructor: 'Lisa Johnson', time: '09:00', duration: '75 min', level: 'Intermediate', room: 'Studio B' },
        { id: 'f2', name: 'Contemporary Flow', instructor: 'Emma White', time: '11:00', duration: '90 min', level: 'Advanced', room: 'Studio A' },
        { id: 'f3', name: 'Latin Rhythms', instructor: 'Carlos Mendez', time: '14:00', duration: '60 min', level: 'Beginner', room: 'Studio C' },
        { id: 'f4', name: 'Freestyle Friday', instructor: 'James Wilson', time: '16:00', duration: '90 min', level: 'All Levels', room: 'Studio A' },
    ],
};

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState<string>('Monday');
    const [selectedClass, setSelectedClass] = useState<string | null>(null);

    const days = Object.keys(scheduleData);

    return (
        <section className={styles.scheduleSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Class Schedule</h2>
                <p className={styles.subtitle}>Find your perfect time to dance with us</p>

                <div className={styles.scheduleWrapper}>
                    <div className={styles.daysNav}>
                        {days.map((day) => (
                            <button
                                key={day}
                                className={`${styles.dayButton} ${selectedDay === day ? styles.active : ''}`}
                                onClick={() => setSelectedDay(day)}
                            >
                                {day}
                            </button>
                        ))}
                    </div>

                    <div className={styles.scheduleGrid}>
                        <div className={styles.gridHeader}>
                            <span>Time</span>
                            <span>Class</span>
                            <span className={styles.hideOnMobile}>Instructor</span>
                            <span className={styles.hideOnMobile}>Level</span>
                            <span className={styles.hideOnMobile}>Room</span>
                            <span>Book</span>
                        </div>

                        {scheduleData[selectedDay].map((classItem) => (
                            <div 
                                key={classItem.id}
                                className={`${styles.classRow} ${selectedClass === classItem.id ? styles.selected : ''}`}
                                onClick={() => setSelectedClass(classItem.id)}
                            >
                                <div className={styles.classTime}>
                                    <span className={styles.time}>{classItem.time}</span>
                                    <span className={styles.duration}>{classItem.duration}</span>
                                </div>
                                <div className={styles.className}>{classItem.name}</div>
                                <div className={`${styles.instructor} ${styles.hideOnMobile}`}>{classItem.instructor}</div>
                                <div className={`${styles.level} ${styles.hideOnMobile}`}>
                                    <span className={`${styles.levelBadge} ${styles[classItem.level.toLowerCase().replace(' ', '')]}`}>
                                        {classItem.level}
                                    </span>
                                </div>
                                <div className={`${styles.room} ${styles.hideOnMobile}`}>{classItem.room}</div>
                                <button className={styles.bookButton}>Book Now</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.legend}>
                    <div className={styles.legendItem}>
                        <span className={`${styles.levelBadge} ${styles.beginner}`}>Beginner</span>
                    </div>
                    <div className={styles.legendItem}>
                        <span className={`${styles.levelBadge} ${styles.intermediate}`}>Intermediate</span>
                    </div>
                    <div className={styles.legendItem}>
                        <span className={`${styles.levelBadge} ${styles.advanced}`}>Advanced</span>
                    </div>
                    <div className={styles.legendItem}>
                        <span className={`${styles.levelBadge} ${styles.alllevels}`}>All Levels</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;

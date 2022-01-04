import React from 'react';
import styles from './Timeline.module.scss';

interface TimelineProps {
    entries: {
        time: string;
        title: string;
        content: React.ReactNode;
    }[];
}

const Timeline = (props: TimelineProps) => {
    return (
        <div className={styles.Timeline}>
            {props.entries.map((entry) => (
                <div className={styles.Item} key={entry.time}>
                    <div className={styles.Label}>{entry.time}</div>

                    <div className={styles.Content}>
                        <div>
                            <h6 className="subtitle">{entry.title}</h6>
                            {entry.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;

import React from 'react';
import styles from './AbilityScore.module.scss';

interface AbilityScoreProps {
    label: string;
    score: number;
    years: number;
}

const AbilityScore = (props: AbilityScoreProps) => {
    return (
        <div className={styles.AbilityScore}>
            <div className={styles.ScoreBox}>
                <span className={styles.Label}>{props.label}</span>
                <span className={styles.Score}>{props.score}</span>
            </div>

            <div className={styles.YearBox}>
                <span className={styles.Label}>{props.years}</span>
            </div>
        </div>
    );
};

export default AbilityScore;

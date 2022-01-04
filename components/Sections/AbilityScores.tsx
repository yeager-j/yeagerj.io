import React from 'react';
import Section from '../Section';
import styles from './AbilityScores.module.scss';
import AbilityScore from '../AbilityScore';

const AbilityScores = () => {
    return (
        <Section color="white" id="scores">
            <h2>Ability Scores</h2>
            <p>
                An Ability Score is a number ranging from 0 to 30, with 20 being the highest a typical developer will
                achieve. The small number on the bottom is the years of experience I have with that technology.
            </p>

            <div className={styles.AbilityScores}>
                <AbilityScore label="React.js" score={17} years={3} />
                <AbilityScore label="TypeScript" score={18} years={4} />
                <AbilityScore label="Node.js" score={16} years={5} />
                <AbilityScore label="HTML5" score={18} years={5} />
                <AbilityScore label="SASS/CSS" score={16} years={4} />
                <AbilityScore label="Figma" score={14} years={1} />
            </div>
        </Section>
    );
};

export default AbilityScores;

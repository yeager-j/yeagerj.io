import React from 'react';
import Image from 'next/image';
import Section from '../Section';
import styles from './ClassFeatures.module.scss';
import sorcerer from '../../public/sorcerer.png';
import wizard from '../../public/wizard.png';
import rogue from '../../public/rogue.png';

const ClassFeatures = () => {
    return (
        <Section color="black">
            <h2>Class Features</h2>
            <p>A Class Feature is a skill or ability that makes you stand out against everyone else.</p>

            <div className={styles.Cards}>
                <div className={styles.Card}>
                    <div className={styles.ImageWrapper}>
                        <Image src={sorcerer} width={80} height={80} />
                    </div>

                    <h6>Raw Magic</h6>
                    <p>I taught myself how to code in High School. I loved it so much, I made a career out of it.</p>
                    <br />
                    <p>
                        Instead of going to college, I attended DigitalCrafts, a 3 month crash course on web
                        development.
                    </p>
                </div>

                <div className={styles.Card}>
                    <div className={styles.ImageWrapper}>
                        <Image src={wizard} width={80} height={80} />
                    </div>

                    <h6>The Lure of Knowledge</h6>
                    <p>
                        Programming isn’t simply a career choice for me. It is a passion and a hobby. I always have a
                        personal project in the works.
                    </p>
                    <br />
                    <p>I’m always exploring bleeding-edge technologies in my own time.</p>
                </div>

                <div className={styles.Card}>
                    <div className={styles.ImageWrapper}>
                        <Image src={rogue} width={80} height={80} />
                    </div>

                    <h6>Skill and Precision</h6>
                    <p>I am a Full-Stack Engineer, but I am also passionate about design.</p>
                    <br />
                    <p>
                        Whether I’m creating a design from scratch or working with a Design team, the application I
                        build will look great and function flawlessly.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default ClassFeatures;

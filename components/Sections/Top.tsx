import React from 'react';
import Section from '../Section';
import styles from './Top.module.scss';
import Image from 'next/image';
import { Button } from '@diceforge/components';
import { Link } from 'react-scroll';

import d20 from '../../public/d20.svg';
import arrow from '../../public/arrow.svg';

const Top = () => {
    return (
        <Section color="black">
            <div className={styles.Top}>
                <div className={styles.Content}>
                    <Image src={d20} />
                    <h1>Hi, I’m Jackson</h1>
                    <h6>You just rolled a Natural 20 on your Investigation check.</h6>

                    <div className={styles.Buttons}>
                        <a href="https://github.com/yeager-j" target="_blank" rel="noreferrer">
                            <Button type="solid" color="accent" large>
                                GitHub
                            </Button>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jackson-yeager-90408a12b/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button type="solid" large>
                                LinkedIn
                            </Button>
                        </a>
                    </div>
                </div>

                <Link to="scores" smooth offset={50} duration={500}>
                    <div className={styles.WhyWrapper} onClick={() => console.log('whats up')}>
                        <p>Find Out Why</p>

                        <Image src={arrow} />
                    </div>
                </Link>
            </div>
        </Section>
    );
};

export default Top;

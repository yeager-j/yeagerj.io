import React from 'react';
import Section from '../Section';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <Section color="white" bottom>
            <div className={styles.Me}>
                <h4>Jackson Yeager</h4>
                <h6 className="subtitle">Software Engineer</h6>
            </div>

            <div className={styles.Links}>
                <a href="https://github.com/yeager-j" target="_blank" rel="noreferrer">
                    GitHub
                </a>

                <a href="https://www.linkedin.com/in/jackson-yeager-90408a12b/" target="_blank" rel="noreferrer">
                    LinkedIn
                </a>

                <a href="" target="_blank" rel="noreferrer">
                    Resume
                </a>
            </div>
        </Section>
    );
};

export default Footer;

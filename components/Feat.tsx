import React from 'react';
import styles from './Feat.module.scss';
import { Button } from '@diceforge/components';

interface FeatProps {
    previewSrc: StaticImageData;
    contain?: boolean;
    dark?: boolean;
    title: string;
    date: string;
    description: React.ReactNode;
    github: string;
    url?: string;
}

const Feat = (props: FeatProps) => {
    return (
        <div className={styles.Feat}>
            <div
                className={styles.PreviewWrapper}
                style={{
                    backgroundImage: `url(${props.previewSrc.src})`,
                    backgroundSize: props.contain ? 'contain' : 'cover',
                    padding: props.contain ? '10px' : 0,
                    backgroundColor: props.dark ? '#161618' : 'white'
                }}
            />

            <div className={styles.Content}>
                <div className={styles.Title}>
                    <h6>{props.title}</h6>
                    <p>{props.date}</p>
                </div>

                {props.description}
            </div>

            <div className={styles.Links}>
                <a href={props.github} target="_blank" rel="noreferrer">
                    <Button type="solid" large>
                        GitHub
                    </Button>
                </a>

                {props.url && (
                    <a href={props.url} target="_blank" rel="noreferrer">
                        <Button color="accent" large>
                            Website
                        </Button>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Feat;

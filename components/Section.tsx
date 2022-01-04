import React from 'react';
import { classnames } from 'tailwindcss-classnames';
import styles from './Section.module.scss';

interface SectionProps {
    color: 'black' | 'white';
    bottom?: boolean;
}

const Section = (props: SectionProps & React.HTMLProps<HTMLDivElement>) => {
    const { color, bottom, ...rest } = props;

    const sectionStyles = classnames({
        [styles.WhiteSection]: color === 'white',
        [styles.BlackSection]: color === 'black',
        [styles.Bottom]: bottom
    });

    return (
        <div className={sectionStyles} {...rest}>
            {bottom && props.children}
            {!bottom && <div className={styles.Content}>{props.children}</div>}
        </div>
    );
};

export default Section;

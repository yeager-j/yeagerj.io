import React from 'react';
import Section from '../Section';
import styles from './Feats.module.scss';
import Feat from '../Feat';

import discord from '../../public/discord.png';
import dnd from '../../public/dnd.png';
import vallurx from '../../public/vallurx.png';

const Feats = () => {
    return (
        <Section color="white">
            <h2>Feats</h2>
            <p>
                Feats are my major accomplishments. They include work-related or personal projects. Anything I’m proud
                of is listed here.
            </p>

            <div className={styles.Feats}>
                <Feat
                    previewSrc={discord}
                    title="WatchDog"
                    date="July 2018"
                    description={
                        <>
                            <p>
                                WatchDog is a Discord bot I built for one of my best friends. Her Discord server was
                                being harassed by an individual, so I built the bot specifically to counter his
                                strategies.
                            </p>
                            <br />
                            <p>
                                The Bot can detect ban evasion, prevent @mention spam, rate-limit a user, archive
                                messages for law enforcement purposes, and maintain a global banlist across a number of
                                different servers.
                            </p>
                        </>
                    }
                    github="https://github.com/yeager-j/watchdog"
                />

                <Feat
                    previewSrc={dnd}
                    contain
                    dark
                    title="Traveler"
                    date="September 2020"
                    description={
                        <>
                            <p>
                                I began playing Dungeons & Dragons over the Internet with my friend group when the
                                pandemic started. I eventually ran into an issue; nobody had an application that allowed
                                the DM to track player travel between points of interest.
                            </p>
                            <br />
                            <p>
                                I wrote this app within a weekend and used it a few times during our D&D sessions. Some
                                major features include time and weather tracking, randomly generated encounters, combat
                                tracking, and automatic dice rolling. It can pull Monster stats from the D&D API and
                                display them to the DM.
                            </p>
                        </>
                    }
                    github="https://github.com/dnd-traveler/traveler"
                    url="https://dndtraveler.com/"
                />

                <Feat
                    previewSrc={vallurx}
                    contain
                    dark
                    title="VallurX"
                    date="January 2021"
                    description={
                        <>
                            <p>
                                VallurX was started by a friend of mine who wanted to improve the vaccine distribution
                                system in Ohio. VallurX has two components to it. There is a Patient Portal where
                                regular Ohioans can schedule appointments and input their health information. We also
                                have a Nurse Portal, where healthcare workers can view the schedule, check patient
                                information, and manage vaccine data such as doses and manufacturer.
                            </p>
                            <br />
                            <p>
                                Unfortunately we were too late to the market, but I’m proud of what we built in such a
                                short period of time (2 weeks!)
                            </p>
                        </>
                    }
                    github="https://github.com/vallurx"
                />
            </div>
        </Section>
    );
};

export default Feats;

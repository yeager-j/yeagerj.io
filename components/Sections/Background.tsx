import React from 'react';
import Section from '../Section';
import Timeline from '../Timeline';

const Background = () => {
    const timeline = [
        {
            time: 'August 2016',
            title: 'DigitalCrafts Coding Bootcamp',
            content: (
                <>
                    <p>
                        During the 3 month web development course at DigitalCrafts, we learned all aspects of the modern
                        web. We started with basic HTML, CSS, and JavaScript and then moved on to frameworks such as
                        Angular and Express. I also participated in a UI/UX Elective, which taught me the fundamentals
                        of user experience and design as well as tools such as Sketch.
                    </p>
                </>
            )
        },
        {
            time: 'April 2017',
            title: 'Software Intern - Traxion',
            content: (
                <>
                    <p>
                        Worked as a full-stack developer for Traxion, a SaaS tool to help manage companies using EOS.
                        While I worked there, I gained experience with AGILE methodology.
                    </p>
                </>
            )
        },
        {
            time: 'October 2017',
            title: 'Software Engineer - Apago',
            content: (
                <>
                    <p>
                        Apago is a software contracting firm. We build solutions for a variety of different customers of
                        all sizes.
                    </p>
                    <br />
                    <p>As a software engineer at Apago, I:</p>

                    <p>• Worked with the customer and my boss to plan and design the end product.</p>
                    <p>• Managed my own time and process.</p>
                    <p>
                        • Implemented the product using my choice of technology (I have worked with Angular, React, and
                        Vue)
                    </p>
                </>
            )
        },
        {
            time: 'May 2021',
            title: 'Software Engineer - Aleo',
            content: (
                <>
                    <p>Aleo is a startup creating Zero-Knowledge Applications using Blockchain technologies.</p>
                    <br />
                    <p>As a software engineer at Aleo, I:</p>

                    <p>• Work closely with the Design team to implement the frontend using React.js and/or Next.js.</p>

                    <p>• Was responsible for creating and maintaining our component library.</p>

                    <p>
                        • Successfully launched the Setup Ceremony for the Browser, which took advantage of WebAssembly.
                    </p>
                </>
            )
        }
    ];

    return (
        <Section color="black">
            <h2>Background</h2>
            <p>My Background includes my education and my work history.</p>

            <Timeline entries={timeline} />
        </Section>
    );
};

export default Background;

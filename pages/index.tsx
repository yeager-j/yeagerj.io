import type { NextPage } from 'next';
import Top from '../components/Sections/Top';
import AbilityScores from '../components/Sections/AbilityScores';
import ClassFeatures from '../components/Sections/ClassFeatures';
import Feats from '../components/Sections/Feats';
import Background from '../components/Sections/Background';
import Footer from '../components/Sections/Footer';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Jackson Yeager</title>
                <meta name="description" content="You just rolled a Natural 20 on your Investigation check." />

                <meta property="og:url" content="https://yeagerj.io/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Jackson Yeager" />
                <meta property="og:description" content="You just rolled a Natural 20 on your Investigation check." />
                <meta property="og:image" content="https://yeagerj.io/ogimage.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="yeagerj.io" />
                <meta property="twitter:url" content="https://yeagerj.io/" />
                <meta name="twitter:title" content="Jackson Yeager" />
                <meta name="twitter:description" content="You just rolled a Natural 20 on your Investigation check." />
                <meta name="twitter:image" content="https://yeagerj.io/ogimage.png" />
            </Head>

            <Top />

            <AbilityScores />

            <ClassFeatures />

            <Feats />

            <Background />

            <Footer />
        </div>
    );
};

export default Home;

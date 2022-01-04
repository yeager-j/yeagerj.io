import type { NextPage } from 'next';
import Top from '../components/Sections/Top';
import AbilityScores from '../components/Sections/AbilityScores';
import ClassFeatures from '../components/Sections/ClassFeatures';
import Feats from '../components/Sections/Feats';
import Background from '../components/Sections/Background';
import Footer from '../components/Sections/Footer';

const Home: NextPage = () => {
    return (
        <div>
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

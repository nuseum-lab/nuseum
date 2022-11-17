import Image from '../../atom/Image/Image';
import Header from '../../organism/Header/Header';
import Layout from '../Layout';
import main from '../../../lib/assets/MAIN.png';
import Section from '../../atom/Section/Section';
import { colorPalette } from '../../../lib/styles/colorPalette';

const Home = () => {
    return (
        <Layout>
            <Header />
            <Image type='main' imgObject={main} />
            <Section
                style={{ position: 'absolute', left: 0 }}
                bgColor={colorPalette.lightPink}
            ></Section>
        </Layout>
    );
};
export default Home;

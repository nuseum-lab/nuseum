import Image from '../../atom/Image/Image';
import Header from '../../organism/Header/Header';
import Layout from '../Layout';
import main from '../../../lib/assets/MAIN.png';

const Home = () => {
    return (
        <Layout>
            <Header />
            <Image type='main' imgObject={main} />
        </Layout>
    );
};
export default Home;

import Layout from '../Layout';
import background from '../../../lib/assets/background.png';
import woman from '../../../lib/assets/woman.png';
import Header from '../../organism/Header/Header';
import { Img } from './Question.styled';

const Question = () => {
    return (
        <Layout style={{ height: '100vh', width: '100vw', padding: 0 }}>
            <Header />
            <div
                style={{
                    boxSizing: 'border-box',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        width: '50%',
                        height: '100%',
                    }}
                ></div>
                <div
                    style={{
                        width: '50%',
                        height: '100%',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'flex-end',
                    }}
                >
                    <img
                        src={background}
                        alt='background'
                        style={{
                            display: 'block',
                            boxSizing: 'border-box',
                            objectFit: 'cover',
                            width: '50%',
                            height: '100%',
                            zIndex: -1,
                            position: 'absolute',
                        }}
                    />

                    <Img src={woman} alt='' />
                </div>
            </div>
        </Layout>
    );
};

export default Question;

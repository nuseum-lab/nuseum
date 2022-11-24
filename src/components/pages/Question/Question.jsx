import Layout from '../Layout';
import background from '../../../lib/assets/background.png';
import man from '../../../lib/assets/man.png';
import woman from '../../../lib/assets/woman.png';
import Header from '../../organism/Header/Header';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
const Question = () => {
    const [photo, setPhoto] = useState(true);
    useEffect(() => {
        let id = setInterval(() => {
            setPhoto((prev) => !prev);
        }, 4000);

        return () => {
            clearInterval(id);
        };
    }, []);
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
                    <motion.img
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
                        init={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <AnimatePresence>
                        {photo ? (
                            <motion.img
                                src={woman}
                                alt='woman'
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '80%',
                                    objectPosition: '-30rem 0',
                                }}
                                init={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            />
                        ) : (
                            <motion.img
                                src={man}
                                alt='man'
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '80%',
                                    objectPosition: '-30rem 0',
                                }}
                                init={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </Layout>
    );
};

export default Question;

import { fontSize } from '../../../lib/styles/fontSize';
import Button from '../Button';
import Text from '../Text/Text';
import { Img, ImgTitle } from './Image.styled';
import { useNavigate } from 'react-router-dom';

const Image = ({ imgObject, type }) => {
    const navigate = useNavigate();
    let style = {};

    if (type === 'main') {
        style.objectFit = 'cover';
        style.width = '100%';
        style.position = 'fixed';
        style.height = '100%';
        style.zIndex = 0;
    }

    return type === 'main' ? (
        <div style={{ height: '100vh' }}>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    right: 0,
                    overflow: 'hidden',
                }}
            >
                <img style={{ ...style }} src={imgObject} alt='' />
            </div>
            <ImgTitle
                style={{ backdropFilter : 'blur(1px)'}}
            >
                <Text
                    fontStyle={{
                        fontSize: 'main_title',
                        fontWeight: 'primary',
                        color: 'white',
                    }}
                    style={{ textShadow: '0 0 40px #5a280a', textAlign: 'center'}}
                >
                    Your Museum of
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'main_title',
                        fontWeight: 'primary',
                        color: 'white',
                    }}
                    style={{ textShadow: '0 0 40px #5a280a', textAlign: 'center'}}
                >
                    Nutrient Physiology & Pharmacology
                </Text>
                <Button
                    onClick={() => navigate('/question')}
                    style={{ marginTop: 30, fontSize: fontSize.button, background: '#5f4339', color: 'white',boxShadow: '0 0 10px #be9c91' }}
                >
                    EXPLORE NUSEUM
                </Button>
            </ImgTitle>
        </div>
    ) : null;
};

export default Image;

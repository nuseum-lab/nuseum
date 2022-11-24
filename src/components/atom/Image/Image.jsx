import { fontSize } from '../../../lib/styles/fontSize';
import Button from '../Button';
import Text from '../Text/Text';
import woman from '../../../lib/assets/woman.png';
import { Img, ImgTitle } from './Image.styled';

const Image = ({ imgObject, type }) => {
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

                <Img src={woman} alt='' />
            </div>
            <ImgTitle>
                <Text
                    fontStyle={{
                        fontSize: 'main_title',
                        fontWeight: 'normal',
                        color: 'white',
                    }}
                    style={{ textShadow: '0 0 10px black', lineHeight: 1.1 }}
                >
                    Your Museum of
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'main_title',
                        fontWeight: 'normal',
                        color: 'white',
                    }}
                    style={{ textShadow: '0 0 10px black', lineHeight: 1.1 }}
                >
                    Nutrient Physiology & Pharmacology
                </Text>
                <Button style={{ marginTop: 30, fontSize: fontSize.button }}>
                    EXPLORE NUSEUM
                </Button>
            </ImgTitle>
        </div>
    ) : null;
};

export default Image;

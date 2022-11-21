import { fontSize } from '../../../lib/styles/fontSize';
import Button from '../Button';
import Text from '../Text/Text';

const Image = ({ imgObject, type }) => {
    let style = {};

    if (type === 'main') {
        style.objectFit = 'cover';
        style.width = '100%';
        style.height = '720px';
        style.zIndex = 0;
    }

    return type === 'main' ? (
        <div style={{ height: 720}}>
            <div
                style={{
                    width: '100%',
                    position: 'absolute',
                    right: 0,
                    overflow: 'hidden',
                }}
            >
                <img style={{ ...style }} src={imgObject} alt='' />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    bottom: '-64%',
                }}
            >
                <Text
                    fontStyle={{
                        fontSize: 'subtitle',
                        fontWeight: 'primary',
                        color: 'white',
                    }}
                    style={{lineHeight: '1.3'}}
                >
                    Your Museum of
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'subtitle',
                        fontWeight: 'primary',
                        color: 'white',
                    }}
                    style={{lineHeight: '1.3'}}
                >
                    Nutrient Physiology & Pharmacology
                </Text>
                <Button style={{ marginTop: 30, fontSize: fontSize.button }}>
                    EXPORE NUSEUM
                </Button>
            </div>
        </div>
    ) : null;
};

export default Image;

import { fontSize } from '../../../lib/styles/fontSize';
import Button from '../Button';
import Text from '../Text/Text';

const Image = ({ imgObject, type }) => {
    let style = {};

    if (type === 'main') {
        style.objectFit = 'cover';
        style.width = '100%';
        style.position = 'absolute';
        style.height = '100%';
        style.top = -150;
        style.zIndex = 0;
    }

    return type === 'main' ? (
        <div style={{ height: 850, marginBottom: 50 }}>
            <div
                style={{
                    width: '100%',
                    position: 'absolute',
                    right: 0,
                    height: 1100,
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
                    bottom: '-80%',
                }}
            >
                <Text
                    fontStyle={{
                        fontSize: 'sub',
                        fontWeight: 'primary',
                        color: 'white',
                    }}
                >
                    Your Museum of
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'sub',
                        fontWeight: 'primary',
                        color: 'white',
                    }}
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

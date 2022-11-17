import { fontSize } from '../../../lib/styles/fontSize';
import Button from '../Button';
import Text from '../Text/Text';

const Image = ({ imgObject, type }) => {
    let style = {};

    if (type === 'main') {
        style.objectFit = 'cover';
        style.width = '100%';
        style.position = 'absolute';
        style.top = -150;
        style.zIndex = 0;
    }

    return type === 'main' ? (
        <div style={{ height: 850 }}>
            <div
                style={{
                    width: '100%',
                    position: 'absolute',
                    left: 0,
                    height: 900,
                    overflow: 'hidden',
                }}
            >
                <img style={{ ...style }} src={imgObject} alt='' />
            </div>
            <Text
                content='Your Museum of'
                fontStyle={{
                    fontSize: 'sub',
                    fontWeight: 'sub',
                    color: 'white',
                    position: 'relative',
                    bottom: '-80%',
                }}
            />
            <Text
                content='Nutrient Physiology & Pharmacology'
                fontStyle={{
                    fontSize: 'sub',
                    fontWeight: 'sub',
                    color: 'white',
                    position: 'relative',
                    bottom: '-80%',
                }}
            />
            <Button style={{ marginTop: 30, fontSize: fontSize.button }}>
                EXPORE NUSEUM
            </Button>
        </div>
    ) : null;
};

export default Image;

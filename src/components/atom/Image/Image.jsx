import { fontSize } from '../../../lib/styles/fontSize';
import Button from '../Button';
import Text from '../Text/Text';

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
        <div style={{ height: '100vh'}}>
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
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    top: '70vh',
                }}
            >
                <Text
                    fontStyle={{
                        fontSize: 'main_title',
                        fontWeight: 'light',
                        color: 'white',                        
                    }}
                    style={{textShadow: '0 0 30px black'}}
                >
                    Your Museum of
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'main_title',
                        fontWeight: 'light',
                        color: 'white',
                    }}
                    style={{textShadow: '0 0 10px black'}}
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

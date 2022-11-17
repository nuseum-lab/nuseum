import { fontSize } from '../../../lib/styles/fontSize';
import { fontWeight } from '../../../lib/styles/fontWeight';

const Text = ({ fontStyle, content }) => {
    return (
        <p
            style={{
                fontWeight: fontWeight[fontStyle.fontWeight],
                whiteSpace:
                    fontStyle.fontWeight === 'light' ? 'pre-line' : null,
                fontSize: fontSize[fontStyle.fontSize],
                color: fontStyle?.color,
                position: fontStyle?.position,
                bottom: fontStyle?.bottom,
            }}
        >
            {content}
        </p>
    );
};

export default Text;

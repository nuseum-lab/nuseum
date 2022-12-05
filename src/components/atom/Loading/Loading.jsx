import { CircularProgress } from '@mui/material';

const Loading = () => {
    return (
        <div
            style={{
                backgroundColor: 'black',
                opacity: 0.6,
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress />
        </div>
    );
};

export default Loading;

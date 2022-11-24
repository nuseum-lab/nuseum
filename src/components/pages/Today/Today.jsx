import { useLocation } from 'react-router-dom';

const Today = () => {
    const location = useLocation();
    console.log(location.state);

    return <h1>TODAY!</h1>;
};
export default Today;

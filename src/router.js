import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

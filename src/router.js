import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteChangeTracker from './components/atom/RouteChangeTracker';
import Home from './components/pages/Home/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <RouteChangeTracker />
            <Routes>
                <Route element={<Home />} path='/' />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

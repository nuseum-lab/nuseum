import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteChangeTracker from './components/atom/RouteChangeTracker';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <RouteChangeTracker />
            <Routes>
                <Route element={<Home />} path='/' />
                <Route path={'*'} component={NotFound} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

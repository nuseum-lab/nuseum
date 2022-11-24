import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteChangeTracker from './components/atom/RouteChangeTracker';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound';
import Question from './components/pages/Question';

const Router = () => {
    return (
        <BrowserRouter>
            <RouteChangeTracker />
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Question />} path='/question' />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

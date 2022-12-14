import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteChangeTracker from './components/atom/RouteChangeTracker';
import Analysis from './components/pages/Analysis';
import Curation from './components/pages/Curation';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound';
import Question from './components/pages/Question';
import Today from './components/pages/Today';
import History from './components/pages/History'

const Router = () => {
    return (
        <BrowserRouter>
            <RouteChangeTracker />
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Question />} path='/question' />
                <Route element={<Today />} path='/today' />
                <Route element={<Analysis />} path='/analysis' />
                <Route element={<Curation />} path='/curation' />
                <Route element={<History />} path='/history' />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

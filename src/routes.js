import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <AnimatedRoutes />
        </BrowserRouter>
    );
}

export default RoutesApp;

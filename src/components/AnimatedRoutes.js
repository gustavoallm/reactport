import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;

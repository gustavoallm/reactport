import { Link } from 'react-router-dom';
import './error.css';
import { motion } from 'framer-motion';

function Error() {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            className="not-found"
        >
            <h2>Page not found!</h2>
            <Link to="/">Back to home page</Link>
        </motion.div>
    );
}

export default Error;

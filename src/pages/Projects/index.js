import './projects.css';
import primeflix from '../../assets/primeflix.png';
import porthtml from '../../assets/porthtml.png';
import { motion } from 'framer-motion';

function Projects() {
    return (
        <motion.main
            className="projects"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className="container-project">
                <div className="project">
                    <h1 className="title">Projects</h1>
                    <h2 className="sub-title">PrimeFlix</h2>
                    <br />
                    <p>
                        PrimeFlix is a website that lists movies that have been released recently, also gives
                        you access to their details and a few more functions.
                    </p>
                    <br />
                    <img className="thumb" src={primeflix} alt="Site PrimeFlix" />
                    <br />
                    <br />
                    <div className="access">
                        <a href="https://projeto-prime.netlify.app/" target="_blank">
                            Access PrimeFlix
                        </a>
                        <a href="https://github.com/gustavoallm/primeflix" target="_blank">
                            Repository on GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="project">
                    <h2 className="sub-title">First portfolio in JS</h2>
                    <br />
                    <p>
                        Just like this webapp, the portfolio was developed entirely by me, applying the
                        knowledge acquired during my studies and researches.
                    </p>
                    <br />
                    <img className="thumb" src={porthtml} alt="Site PrimeFlix" />
                    <br />
                    <br />
                    <div className="access">
                        <a href="https://gustavoallmport.netlify.app/#inicio" target="_blank">
                            Access portfolio
                        </a>
                        <a href="https://github.com/gustavoallm/portfoliosimples" target="_blank">
                            Repository on GitHub
                        </a>
                    </div>
                    <br />
                </div>
            </div>
            <span>
                Photo by{' '}
                <a href="https://unsplash.com/@rhamely?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Rhamely
                </a>{' '}
                on{' '}
                <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                </a>
            </span>
        </motion.main>
    );
}

export default Projects;

import './projects.css';
import 'animate.css';
import primeflix from '../../assets/primeflix.webp';
import porthtml from '../../assets/porthtml.webp';
import php from '../../assets/php.webp';
import csharp from '../../assets/csharp.webp';
import request from '../../assets/request.webp';
import validation from '../../assets/validation.webp';
import { CgScrollV } from 'react-icons/cg';
import { motion } from 'framer-motion';

function Projects() {
    return (
        <motion.main
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className="container projects">
                <div className="box1 center">
                    <h2 className="subtitle mtop-title animate__animated animate__fadeInUp animate__delay-0.5s">
                        Requests
                    </h2>
                    <br />
                    <p>
                        Requests is a webapp where you can log support tickets from your customers and
                        register new customers too, the app has a verified login screen to access all
                        functions.
                    </p>
                    <br />
                    <img className="thumb" src={request} alt="Site PrimeFlix" />
                    <div className="access">
                        <a href="https://projeto-prime.netlify.app/" target="_blank" rel="noreferrer">
                            <button>Access Requests</button>
                        </a>
                        <a href="https://github.com/gustavoallm/primeflix" target="_blank" rel="noreferrer">
                            <button>Repository on GitHub</button>
                        </a>
                    </div>
                </div>
                <div className="box2 center">
                    <h2 className="subtitle mtop-title animate__animated animate__fadeInUp animate__delay-0.5s">
                        PrimeFlix
                    </h2>
                    <br />
                    <p>
                        PrimeFlix is a website that lists movies that have been released recently, also gives
                        you access to their details and a few more functions.
                    </p>
                    <br />
                    <img className="thumb" src={primeflix} alt="Site PrimeFlix" />
                    <div className="access">
                        <a href="https://projeto-prime.netlify.app/" target="_blank" rel="noreferrer">
                            <button>Access PrimeFlix</button>
                        </a>
                        <a href="https://github.com/gustavoallm/primeflix" target="_blank" rel="noreferrer">
                            <button>Repository on GitHub</button>
                        </a>
                    </div>
                    <span className="scrolldown">
                        <CgScrollV color="#fdb827" size={40} />
                    </span>
                </div>

                <div className="box3 center">
                    <h2 className="subtitle mtop-title">CRUD in PHP</h2>
                    <br />
                    <p>
                        The table is filled with data from the database created in MySQL and it is possible to
                        change the data through the modal that will open by clicking on the desired field.
                    </p>
                    <br />
                    <img className="thumb" src={php} alt="Site PrimeFlix" />
                    <div className="access">
                        <a
                            href="https://www.linkedin.com/feed/update/urn:li:activity:6988553983535534081/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>See it working</button>
                        </a>
                        <a href="https://github.com/gustavoallm/crudphp" target="_blank" rel="noreferrer">
                            <button>Repository on GitHub</button>
                        </a>
                    </div>
                </div>

                <div className="box4 center">
                    <h2 className="subtitle mtop-title">CRUD in C#</h2>
                    <br />
                    <p>
                        Just like this webapp, the portfolio was developed entirely by me, applying the
                        knowledge acquired during my studies and researches.
                    </p>
                    <br />
                    <img className="thumb" src={csharp} alt="Site PrimeFlix" />
                    <div className="access">
                        <a
                            href="https://gustavoallmport.netlify.app/#inicio"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>See it working</button>
                        </a>
                        <a
                            href="https://github.com/gustavoallm/portfoliosimples"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>Repository on GitHub</button>
                        </a>
                    </div>
                </div>

                <div className="box5 center">
                    <h2 className="subtitle mtop-title">Regex Validation</h2>
                    <br />
                    <p>
                        This app is a validation form made with regex rules in JS utilizing bootstrap for
                        styling.
                    </p>
                    <br />

                    <img className="thumb" src={validation} alt="Site PrimeFlix" />
                    <div className="access">
                        <a
                            href="https://gustavoallmport.netlify.app/#inicio"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>Access the project</button>
                        </a>
                        <a
                            href="https://github.com/gustavoallm/portfoliosimples"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>Repository on GitHub</button>
                        </a>
                    </div>
                </div>

                <div className="box6 center">
                    <h2 className="subtitle mtop-title">First portfolio in JS</h2>
                    <br />
                    <p>
                        Just like this webapp, the portfolio was developed entirely by me, applying the
                        knowledge acquired during my studies and researches.
                    </p>
                    <br />
                    <img className="thumb" src={porthtml} alt="Site PrimeFlix" />
                    <div className="access">
                        <a
                            href="https://gustavoallmport.netlify.app/#inicio"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>Access portfolio</button>
                        </a>
                        <a
                            href="https://github.com/gustavoallm/portfoliosimples"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>Repository on GitHub</button>
                        </a>
                    </div>
                </div>
            </div>
        </motion.main>
    );
}

export default Projects;

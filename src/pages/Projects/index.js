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
import { toast } from 'react-toastify';

function Projects() {
    const notify = () =>
        toast('🚀 Working on it... 🚀', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            animation: true,
        });
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
                        functions, data are saved on firebase.
                    </p>
                    <br />
                    <img className="thumb" src={request} alt="Site PrimeFlix" />
                    <div className="access">
                        <button onClick={notify} className="projects-btn">
                            Access Requests
                        </button>
                        <button className="projects-btn" onClick={notify}>
                            Repository on GitHub
                        </button>
                    </div>
                </div>
                <div className="box2 center">
                    <h2 className="subtitle mtop-title animate__animated animate__fadeInUp animate__delay-0.5s">
                        PrimeFlix
                    </h2>
                    <br />
                    <p>
                        PrimeFlix is a website that lists movies that have been released recently, also gives
                        you access to their details, a favorite page and a few more functions.
                    </p>
                    <br />
                    <img className="thumb" src={primeflix} alt="Site PrimeFlix" />
                    <div className="access">
                        <a href="https://projeto-prime.netlify.app/" target="_blank" rel="noreferrer">
                            <button className="projects-btn">Access PrimeFlix</button>
                        </a>
                        <a href="https://github.com/gustavoallm/primeflix" target="_blank" rel="noreferrer">
                            <button className="projects-btn">Repository on GitHub</button>
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
                            <button className="projects-btn">See it working</button>
                        </a>
                        <a href="https://github.com/gustavoallm/crudphp" target="_blank" rel="noreferrer">
                            <button className="projects-btn">Repository on GitHub</button>
                        </a>
                    </div>
                </div>

                <div className="box4 center">
                    <h2 className="subtitle mtop-title">CRUD in C#</h2>
                    <br />
                    <p>
                        Is a windows form application that you can register new employees, edit their
                        information and delete the registration, all synchronized with the SSMS database.
                    </p>
                    <br />
                    <img className="thumb" src={csharp} alt="Site PrimeFlix" />
                    <div className="access">
                        <a
                            href="https://www.linkedin.com/feed/update/urn:li:activity:6947887723525324800/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="projects-btn">See it working</button>
                        </a>
                        <a
                            href="https://github.com/mfujita/SistemaOrdemServico"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="projects-btn">Repository on GitHub</button>
                        </a>
                    </div>
                </div>

                <div className="box5 center">
                    <h2 className="subtitle mtop-title">Regex Validation</h2>
                    <br />
                    <p>
                        This app is a validation form made with regex rules in JS utilizing bootstrap for
                        styling, was developed to reinforce my studies.
                    </p>
                    <br />

                    <img className="thumb" src={validation} alt="Site PrimeFlix" />
                    <div className="access">
                        <button onClick={notify} className="projects-btn">
                            Access the project
                        </button>
                        <button onClick={notify} className="projects-btn">
                            Repository on GitHub
                        </button>
                    </div>
                </div>

                <div className="box6 center">
                    <h2 className="subtitle mtop-title">First portfolio in JS</h2>
                    <br />
                    <p>
                        The page was developed by me, to test my knowledge right when I started studying to be
                        a front end dev.
                    </p>
                    <br />
                    <img className="thumb" src={porthtml} alt="Site PrimeFlix" />
                    <div className="access">
                        <a
                            href="https://gustavoallmport.netlify.app/#inicio"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="projects-btn">Access portfolio</button>
                        </a>
                        <a
                            href="https://github.com/gustavoallm/portfoliosimples"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="projects-btn">Repository on GitHub</button>
                        </a>
                    </div>
                </div>
            </div>
        </motion.main>
    );
}

export default Projects;

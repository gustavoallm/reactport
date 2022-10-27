import './home.css';
import 'animate.css';
import profile from '../../assets/icon.webp';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

function Home() {
    const welcome = () =>
        toast('Welcome!', {
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

    window.onload = welcome;

    return (
        <motion.main
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
            <div className="container home">
                <div className="homebox1 sethome">
                    <h2 className="title-home animate__animated animate__fadeInUp animate__delay-0.5s">
                        Hi, I'm Gustavo
                    </h2>
                    <h3 className="subtitle-home animate__animated animate__fadeInUp animate__delay-0.5s">
                        Fullstack Developer
                    </h3>
                    <p className="animate__animated animate__fadeInUp animate__delay-0.5s">
                        I'm open for a jobs, currently I'm studying computer science (bachelor's degree,
                        graduate in 2023) and working as technical support
                    </p>
                    <div className="social animate__animated animate__fadeInUp animate__delay-0.5s">
                        <a href="https://github.com/gustavoallm" target="_blank" rel="noreferrer">
                            <GoMarkGithub color="##fdb827" size={40} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gustavo-de-almeida-carvalho-266135151/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsLinkedin color="##fdb827" size={40} />
                        </a>
                    </div>
                </div>
                <div className="homebox2 sethome animate__animated animate__flipInX animate__delay-0.5s">
                    <img className="profile" src={profile} alt="Gustavo de A. Carvalho" />
                </div>
            </div>
        </motion.main>
    );
}

export default Home;

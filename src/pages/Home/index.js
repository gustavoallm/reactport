import './home.css';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.main
            className="background"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className="container">
                <div className="content">
                    <h1 className="title-home">I'm Gustavo de A. Carvalho</h1>
                    <p className="text">
                        I'm a front-end developer looking for a professional opportunity in the area,
                        currently I'm studying computer science (bachelor's degree, graduate in 2023) and
                        working as technical support
                    </p>
                    <div className="social">
                        <a href="https://github.com/gustavoallm" target="_blank">
                            <GoMarkGithub color="#A5C9CA" size={40} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gustavo-de-almeida-carvalho-266135151/"
                            target="_blank"
                        >
                            <BsLinkedin color="#A5C9CA" size={40} />
                        </a>
                    </div>
                </div>
            </div>
            <span>
                Photo by{' '}
                <a href="https://unsplash.com/@rhamely?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Rhamely
                </a>{' '}
                on{' '}
                <a href="https://unsplash.com/@rhamely?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                </a>
            </span>
        </motion.main>
    );
}

export default Home;

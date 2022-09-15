import './about.css';
import { motion } from 'framer-motion';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiReact, DiGit, DiMsqlServer, DiFirebase, DiPhotoshop } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql } from 'react-icons/si';

function About() {
    return (
        <motion.main
            className="about"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className="container">
                <div className="content">
                    <h1 className="title">About me...</h1>
                    <p className="text">
                        My name is Gustavo de Almeida Carvalho, I like technology since I was a child and I
                        started to be interested in programming in high school when I had my first contact
                        programming in C++, I am currently in my penultimate year of the computer science
                        college, I am studying technologies of web development and carrying out projects in
                        React JS.
                    </p>
                    <br />
                    <br />
                    <h2>Skills</h2>
                    <br />
                    <div className="social-about">
                        <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">
                            <AiFillHtml5 color="#A5C9CA" size={40} />
                        </a>
                        <a href="https://www.w3schools.com/css/css_intro.asp" target="_blank">
                            <DiCss3 color="#A5C9CA" size={40} />
                        </a>
                        <a href="https://www.javascript.com/" target="_blank">
                            <IoLogoJavascript color="#A5C9CA" size={40} />
                        </a>
                        <a href="https://reactjs.org/" target="_blank">
                            <DiReact color="#A5C9CA" size={40} />
                        </a>
                        <a href="https://git-scm.com/" target="_blank">
                            <DiGit color="#A5C9CA" size={40} />
                        </a>
                        <a href="https://github.com/gustavoallm" target="_blank">
                            <AiFillGithub color="#A5C9CA" size={40} />
                        </a>
                        <a href="https://www.microsoft.com/pt-br/sql-server/sql-server-2019" target="_blank">
                            <DiMsqlServer color="#A5C9CA" size={40} />
                        </a>
                        <a href="https://www.mysql.com/" target="_blank">
                            <SiMysql color="#A5C9CA" size={40} />
                        </a>
                        <a href="https://firebase.google.com/" target="_blank">
                            <DiFirebase color="#A5C9CA" size={40} />
                        </a>
                        <a href="https://www.adobe.com/br/products/photoshop.html" target="_blank">
                            <DiPhotoshop color="#A5C9CA" size={40} />
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
                <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                </a>
            </span>
        </motion.main>
    );
}

export default About;

import "./home.css";
import "animate.css";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { toast } from "react-toastify";
import { useState } from "react";

import "animate.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact, DiGit, DiMsqlServer, DiFirebase, DiPhotoshop } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiBootstrap, SiPhp, SiCsharp, SiDocker } from "react-icons/si";

import primeflix from "../../assets/primeflix.png";
import porthtml from "../../assets/porthtml.webp";
import php from "../../assets/php.png";
import csharp from "../../assets/csharp.png";
import request from "../../assets/request.png";
import validation from "../../assets/validation.webp";

function Home() {
    const welcome = () =>
        toast("in development!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    window.onload = welcome;

    const [fade, setFade] = useState(false);
    const fadeHome = () => {
        if (window.scrollY >= 50) {
            setFade(true);
        } else {
            setFade(false);
        }
    };

    window.addEventListener("scroll", fadeHome);

    return (
        <main>
            <a class="btn-contact" href="#contact">
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                </span>
                <span class="button-text">Contact me</span>
            </a>
            <div className="container">
                <section className={fade ? "home home-fade" : "home"} id="top">
                    <div className="resume">
                        <div className="row">
                            <div className="main">
                                <h3 className="subtitle-home animate__animated animate__fadeInUp animate__delay-0.5s">
                                    Gustavo A. Carvalho
                                </h3>
                                <h2
                                    id="hometitle"
                                    className="title animate__animated animate__fadeInUp animate__delay-0.5s"
                                >
                                    Fullstack Developer
                                </h2>
                                <p className="animate__animated animate__fadeInUp animate__delay-0.5s">
                                    I'm searching jobs on development area, currently I'm studying
                                    computer science (bachelor's degree, graduation in 2023) and
                                    studying DevOps tools, docker and linux
                                </p>
                                <div className="social animate__animated animate__fadeInUp animate__delay-0.5s">
                                    <a
                                        href="https://github.com/gustavoallm"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <GoMarkGithub color="#0f141e" size={40} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/gustavo-de-almeida-carvalho-266135151/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <BsLinkedin color="#0f141e" size={40} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a class="mouse_scroll" href="#about">
                            <div>
                                <span class="m_scroll_arrows unu"></span>
                                <span class="m_scroll_arrows doi"></span>
                                <span class="m_scroll_arrows trei"></span>
                            </div>
                        </a>
                    </div>
                </section>
                <section className="about" id="about">
                    <div className="content">
                        <h1 className="title mtop-title">About me...</h1>
                        <p className="text">
                            My name is Gustavo de Almeida Carvalho, I like technology since I was a
                            child and I started to be interested in programming in high school when
                            I had my first contact programming in C++, I am on my last year of the
                            computer science college, I am studying studying DevOps tools, docker
                            and linux. I started my studies in the coding area on beginning of 2022
                            and now I'm sure I can do a great work with my experience and knowledge.
                        </p>
                        <br />
                        <h2>Skills</h2>
                        <span>Click on icons to see my projects with the technologies</span>
                        <br />
                        <div className="skills-svg">
                            <a
                                href="https://www.w3schools.com/html/html_intro.asp"
                                target="_blank"
                                rel="noreferrer"
                                className="zoom"
                            >
                                <AiFillHtml5 color="#0f141e" size={40} />
                            </a>
                            <a
                                href="https://www.w3schools.com/css/css_intro.asp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <DiCss3 color="#0f141e" size={40} />
                            </a>
                            <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
                                <IoLogoJavascript color="#0f141e" size={40} />
                            </a>
                            <a
                                href="https://projeto-prime.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <DiReact color="#0f141e" size={40} />
                            </a>
                            <a
                                href="https://www.linkedin.com/feed/update/urn:li:activity:6988553983535534081/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiBootstrap color="#0f141e" size={40} />
                            </a>
                            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                                <DiGit color="#0f141e" size={40} />
                            </a>
                            <a
                                href="https://github.com/gustavoallm"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillGithub color="#0f141e" size={40} />
                            </a>
                            <a
                                href="https://www.linkedin.com/feed/update/urn:li:activity:6947887723525324800/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiCsharp color="#0f141e" size={40} />
                            </a>
                            <a
                                href="https://www.linkedin.com/feed/update/urn:li:activity:6988553983535534081/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiPhp color="#0f141e" size={40} />
                            </a>
                            <a
                                href="https://www.linkedin.com/feed/update/urn:li:activity:6947887723525324800/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <DiMsqlServer color="#0f141e" size={40} />
                            </a>
                            <a
                                href="https://github.com/gustavoallm/crudphp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiMysql color="#0f141e" size={40} />
                            </a>
                            <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                                <DiFirebase color="#0f141e" size={40} />
                            </a>
                            <a href="https://www.linuxtips.io/" target="_blank" rel="noreferrer">
                                <SiDocker color="#0f141e" size={40} />
                            </a>
                            <a
                                href="https://www.adobe.com/br/products/photoshop.html"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <DiPhotoshop color="#0f141e" size={40} />
                            </a>
                        </div>
                    </div>
                </section>
                <section className="projects">
                    <h1 className="title">Projects</h1>
                    <div className="works-grid">
                        <div className="work1 gridspace">
                            <a
                                className="link"
                                href="https://projeto-prime.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="thumb-text">Requests dashboard - React</span>
                            </a>
                            <img className="thumb" src={request} alt="Projeto chamados" />
                        </div>
                        <div className="work2 gridspace">
                            <a
                                className="link"
                                href="https://projeto-prime.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="thumb-text">Primeflix - React</span>
                            </a>
                            <img className="thumb" src={primeflix} alt="Site PrimeFlix" />
                        </div>
                        <a
                            className="work3 gridspace"
                            href="https://www.linkedin.com/feed/update/urn:li:activity:6988553983535534081/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="thumb" src={php} alt="Crud PHP" />
                        </a>
                        <a
                            className="work4 gridspace"
                            href="https://projeto-prime.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="thumb" src={csharp} alt="Crud CSharp" />
                        </a>
                        <a
                            className="work5 gridspace"
                            href="https://www.linkedin.com/feed/update/urn:li:activity:6947887723525324800/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="thumb" src={validation} alt="Regex" />
                        </a>
                        <a
                            className="work6 gridspace"
                            href="https://projeto-prime.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="thumb" src={porthtml} alt="First Portfolio" />
                        </a>
                    </div>
                    <br />
                    <br />
                    <br />
                </section>
                <section className="contact">
                    <h1 className="title">Contact</h1>
                    <div className="contacts" id="contact">
                        <a href="mailto:gustavo_allm@outlook.com">
                            <span>gustavo_allm@outlook.com</span>
                        </a>
                        <a href="tel://+551999419-7044">
                            <span>+55 19 99419-7044</span>
                        </a>
                        <a
                            href="https://goo.gl/maps/9n1gnKtCyUpi26Sy6"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>Americana SP, Brasil</span>
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Home;

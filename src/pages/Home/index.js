import "./home.css";
import "animate.css";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { toast } from "react-toastify";
import { useState } from "react";

import "animate.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact, DiGit, DiMsqlServer, DiFirebase, DiPhotoshop } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiBootstrap, SiPhp, SiCsharp, SiDocker } from "react-icons/si";

import primeflix from "../../assets/primeflix.png";
import firstport from "../../assets/firstport.png";
import php from "../../assets/php.png";
import csharp from "../../assets/csharp.png";
import request from "../../assets/request.png";
import validation from "../../assets/validation.png";

function Home() {
	const welcome = () =>
		toast("Welcome!", {
			position: "top-right",
			autoClose: 2000,
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
			<a class="btn-back" href="#top">
				<BsFillArrowUpCircleFill color="#0D2B35" size={48} />
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
									Hello! My name is Gustavo I live in Brazil and I'm a freelance developer, my
									expertise is in React, JavaScript (ES6), HTML5, CSS3, TypeScript and NodeJS,
									scroll down to see a little about me and my projects.
								</p>
								<div className="social animate__animated animate__fadeInUp animate__delay-0.5s">
									<a href="https://github.com/gustavoallm" target="_blank" rel="noreferrer">
										<GoMarkGithub color="#0D2B35" size={40} />
									</a>
									<a
										href="https://www.linkedin.com/in/gustavo-de-almeida-carvalho-266135151/"
										target="_blank"
										rel="noreferrer"
									>
										<BsLinkedin color="#0D2B35" size={40} />
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
							I have been working as a freelance developer for the last 9 months and I want to apply
							my knowledge of software development in challenging projects, my specialty is in
							React, JavaScript (ES6), HTML5, CSS3, TypeScript and NodeJS, I plan to develop my
							career under the supervision and encouragement of a committed company with innovation.
						</p>
						<br />
						<h2>Skills</h2>
						<span>Click on icons to see my projects with the technologies</span>
						<br />
						<div className="skills-svg">
							<a
								href="https://github.com/gustavoallm/regexjs"
								target="_blank"
								rel="noreferrer"
								className="zoom"
							>
								<AiFillHtml5 color="#0D2B35" size={40} />
							</a>
							<a
								href="https://www.w3schools.com/css/css_intro.asp"
								target="_blank"
								rel="noreferrer"
							>
								<DiCss3 color="#0D2B35" size={40} />
							</a>
							<a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
								<IoLogoJavascript color="#0D2B35" size={40} />
							</a>
							<a href="https://projeto-prime.netlify.app/" target="_blank" rel="noreferrer">
								<DiReact color="#0D2B35" size={40} />
							</a>
							<a
								href="https://www.linkedin.com/feed/update/urn:li:activity:6988553983535534081/"
								target="_blank"
								rel="noreferrer"
							>
								<SiBootstrap color="#0D2B35" size={40} />
							</a>
							<a href="https://git-scm.com/" target="_blank" rel="noreferrer">
								<DiGit color="#0D2B35" size={40} />
							</a>
							<a href="https://github.com/gustavoallm" target="_blank" rel="noreferrer">
								<AiFillGithub color="#0D2B35" size={40} />
							</a>
							<a
								href="https://www.linkedin.com/feed/update/urn:li:activity:6947887723525324800/"
								target="_blank"
								rel="noreferrer"
							>
								<SiCsharp color="#0D2B35" size={40} />
							</a>
							<a
								href="https://www.linkedin.com/feed/update/urn:li:activity:6988553983535534081/"
								target="_blank"
								rel="noreferrer"
							>
								<SiPhp color="#0D2B35" size={40} />
							</a>
							<a
								href="https://www.linkedin.com/feed/update/urn:li:activity:6947887723525324800/"
								target="_blank"
								rel="noreferrer"
							>
								<DiMsqlServer color="#0D2B35" size={40} />
							</a>
							<a href="https://github.com/gustavoallm/crudphp" target="_blank" rel="noreferrer">
								<SiMysql color="#0D2B35" size={40} />
							</a>
							<a href="https://github.com/gustavoallm/requests" target="_blank" rel="noreferrer">
								<DiFirebase color="#0D2B35" size={40} />
							</a>
							<a href="https://www.linuxtips.io/" target="_blank" rel="noreferrer">
								<SiDocker color="#0D2B35" size={40} />
							</a>
							<a href="#projects">
								<DiPhotoshop color="#0D2B35" size={40} />
							</a>
						</div>
					</div>
				</section>
				<section className="projects" id="projects">
					<h1 className="title">Projects</h1>
					<div className="works-grid">
						<div className="work1 gridspace">
							<a
								className="link"
								href="https://github.com/gustavoallm/requests"
								target="_blank"
								rel="noreferrer"
							>
								<span className="thumb-text">Requests Dashboard - React</span>
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
						<div className="work3 gridspace">
							<a
								className="link"
								href="https://www.linkedin.com/feed/update/urn:li:activity:6988553983535534081/"
								target="_blank"
								rel="noreferrer"
							>
								<span className="thumb-text">CRUD Dashboard - PHP</span>
							</a>
							<img className="thumb" src={php} alt="Crud PHP" />
						</div>
						<div className="work4 gridspace">
							<a
								className="link"
								href="https://www.linkedin.com/feed/update/urn:li:activity:6947887723525324800/"
								target="_blank"
								rel="noreferrer"
							>
								<span className="thumb-text">CRUD Windows Forms - C#</span>
							</a>
							<img className="thumb" src={csharp} alt="Crud CSharp" />
						</div>
						<div className="work5 gridspace">
							<a
								className="link"
								href="https://gustavoallmport.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								<span className="thumb-text">Portfolio Example - React</span>
							</a>
							<img className="thumb" src={firstport} alt="First Portfolio" />
						</div>
						<div className="work6 gridspace">
							<a
								className="link"
								href="https://github.com/gustavoallm/regexjs"
								target="_blank"
								rel="noreferrer"
							>
								<span className="thumb-text">Regex Verification - JS</span>
							</a>
							<img className="thumb" src={validation} alt="Regex" />
						</div>
					</div>
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
						<a href="https://goo.gl/maps/9n1gnKtCyUpi26Sy6" target="_blank" rel="noreferrer">
							<span>Americana SP, Brasil</span>
						</a>
					</div>
				</section>
			</div>
		</main>
	);
}

export default Home;

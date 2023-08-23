import "./home.css";
import "animate.css";
import { useState } from "react";
import { toast } from "react-toastify";

import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

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
		if (window.scrollY >= 60) {
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
								<h3 className="subtitle-home animate__animated animate__fadeInUp animate__delay-1s">
									Gustavo A. Carvalho
								</h3>
								<h2
									id="hometitle"
									className="title animate__animated animate__fadeInUp animate__delay-0.5s"
								>
									Fullstack Developer
								</h2>
								<p className="animate__animated animate__fadeInUp animate__delay-1s">
									Hello! My name is Gustavo, I live in Brazil and I'm a freelance developer. My
									expertise is in React, JavaScript (ES6), HTML5, CSS3, TypeScript and NodeJS.
									Scroll down to see a little about me and my projects.
								</p>
								<div className="social animate__animated animate__fadeInUp animate__delay-2s">
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
			</div>
		</main>
	);
}

export default Home;

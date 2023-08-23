import "./About.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact, DiGit, DiMsqlServer, DiFirebase, DiPhotoshop } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiBootstrap, SiPhp, SiCsharp, SiDocker } from "react-icons/si";

const About = () => {
	return (
		<section className="about" id="about">
			<div className="content">
				<h1 className="title mtop-title">About me...</h1>
				<p className="text">
					I am a passionate developer and freelance entrepreneur dedicated to crafting innovative
					and elegant solutions for software development challenges. With 9 months of experience as
					a freelance developer, I am excited to apply my knowledge and skills to challenging and
					engaging projects while contributing to the growth and success of a team committed to
					innovation.
				</p>
				<br />
				<p className="text">
					My specialization centers around the React ecosystem, where my expertise in JavaScript
					(ES6), HTML5, CSS3, TypeScript, and NodeJS enables me to create interactive and responsive
					interfaces. My professional journey thus far has allowed me to cultivate valuable skills
					in web development, spanning both frontend and backend, making me a versatile and
					well-rounded FullStack developer.
				</p>
				<br />
				<div className="skills">
					<h2 className="sub-title">Skills</h2>
					<span>Click the icons to see my certificates in these technologies</span>
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
						<a href="https://www.w3schools.com/css/css_intro.asp" target="_blank" rel="noreferrer">
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
			</div>
		</section>
	);
};

export default About;

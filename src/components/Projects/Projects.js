import "./Projects.css";
import ecommerce from "../../assets/ecommerce.png";
import primeflix from "../../assets/primeflix.png";
import firstport from "../../assets/firstport.png";
import php from "../../assets/php.png";
import csharp from "../../assets/csharp.png";
import request from "../../assets/request.png";

function Projects() {
	return (
		<section className="projects" id="products">
			<h1 className="title">Best Projects</h1>
			<p className="sub-proje-title">Some of my best projects, click to see it working</p>
			<div className="works-grid">
				<div className="work1 gridspace">
					<a
						className="link"
						href="https://www.linkedin.com/feed/update/urn:li:activity:7089321261910171648/"
						target="_blank"
						rel="noreferrer"
					>
						<span className="thumb-text">E-commerce - React</span>
					</a>
					<img className="thumb" src={ecommerce} alt="Complete E-commerce" />
				</div>
				<div className="work2 gridspace">
					<a
						className="link"
						href="https://github.com/gustavoallm/requests"
						target="_blank"
						rel="noreferrer"
					>
						<span className="thumb-text">Requests Dashboard - React</span>
					</a>
					<img className="thumb" src={request} alt="Control task's dashboard" />
				</div>
				<div className="work3 gridspace">
					<a
						className="link"
						href="https://www.linkedin.com/feed/update/urn:li:activity:6988553983535534081/"
						target="_blank"
						rel="noreferrer"
					>
						<span className="thumb-text">Customer registration - PHP</span>
					</a>
					<img className="thumb" src={php} alt="Customer registration application" />
				</div>
				<div className="work4 gridspace">
					<a
						className="link"
						href="https://www.linkedin.com/feed/update/urn:li:activity:6947887723525324800/"
						target="_blank"
						rel="noreferrer"
					>
						<span className="thumb-text">Employee registration - C#</span>
					</a>
					<img className="thumb" src={csharp} alt="Employee registration application" />
				</div>
				<div className="work5 gridspace">
					<a
						className="link"
						href="https://gustavoallmport.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						<span className="thumb-text">Portfolio in SPA - React</span>
					</a>
					<img className="thumb" src={firstport} alt="First Portfolio" />
				</div>
				<div className="work6 gridspace">
					<a
						className="link"
						href="https://projeto-prime.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						<span className="thumb-text">New movies catalog - React</span>
					</a>
					<img className="thumb" src={primeflix} alt="Site PrimeFlix" />
				</div>
			</div>
		</section>
	);
}

export default Projects;

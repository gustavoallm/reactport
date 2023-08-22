import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Logo.png";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav>
			<Link to="/" className="logo">
				<img className="thumb" src={logo} alt="Crud PHP" />
			</Link>
			<div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul className={menuOpen ? "open" : ""}>
				<li>
					<a className="navbtn" href="#top">
						Home
					</a>
				</li>
				<li>
					<a className="navbtn" href="#top">
						Products
					</a>
				</li>
				<li>
					<a className="navbtn" href="#top">
						About Me
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;

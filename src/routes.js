import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/index";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function RoutesApp() {
	return (
		<BrowserRouter>
			<Navbar />
			<Home />
			<Projects />
			<About />
			<Contact />
		</BrowserRouter>
	);
}

export default RoutesApp;

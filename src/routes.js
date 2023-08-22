import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";

function RoutesApp() {
	return (
		<BrowserRouter>
			<Navbar />
			<AnimatedRoutes />
		</BrowserRouter>
	);
}

export default RoutesApp;

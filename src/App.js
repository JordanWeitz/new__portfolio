import Navbar from "./components/navbar/Navbar";
import HeroBanner from "./components/heroBanner/HeroBanner";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<HeroBanner />
			<Skills />
			<Projects />
			{/* TESTIMONIALS????!?!?!?! */}
			<Footer />
		</div>
	);
}

export default App;

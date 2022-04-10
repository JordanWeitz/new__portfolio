import React from "react";
import "./heroBanner.css";
import hero from "../../assets/heroBanner/hero.jpg";
import resume from "../../assets/resume/JordansSoftwareDevResume.pdf";
import Navbar from "../navbar/Navbar";

function HeroBanner() {
	return (
		<div className="herobanner">
			<img src={hero} alt="" className="herobanner__img" />

			<div className="herobanner__header">
				<div className="herobanner__header__wrapper">
					<h1 className="herobanner__header__h1">Jr Web Developer & Leader</h1>
					<h3 className="herobanner__header__h3">
						I love solving problems - and challenging myself.
					</h3>
					<a href={resume}>
						<button className="herobanner__header__btn">Resume</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default HeroBanner;

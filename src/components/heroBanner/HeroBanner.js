import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./heroBanner.css";
import hero from "../../assets/heroBanner/hero.jpg";
import code from "../../assets/heroBanner/code.png";
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
					<div className="herobanner__img__wrapper">
						<img src={code} alt="" className="herobanner__header__img" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroBanner;

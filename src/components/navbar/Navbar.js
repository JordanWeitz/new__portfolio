import React from "react";
import "./navbar.css";

import logo from "../../assets/navbar/logo.png";

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar__logo">
				<a href="/">
					<img src={logo} alt="logo" className="navbar__img" />
				</a>
				<div className="navbar__x">
					<span className="navbar__x__bar"></span>
					<span className="navbar__x__bar"></span>
					<span className="navbar__x__bar"></span>
				</div>
			</div>
			<button className="navbar__button">Say Hey</button>
		</div>
	);
}

export default Navbar;

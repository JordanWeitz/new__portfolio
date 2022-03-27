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
			</div>
			<a href="mailto:jweitz1972@gmail.com">
				<button className="navbar__button">Say Hey</button>
			</a>
		</div>
	);
}

export default Navbar;

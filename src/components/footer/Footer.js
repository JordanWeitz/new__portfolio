import React from "react";
import logo from "../../assets/navbar/logo.png";
import { BsLinkedin, BsGithub, BsMailbox } from "react-icons/bs";

import "./footer.css";

function Footer() {
	return (
		<div className="footer">
			{/* CONNECT WITH ME */}
			<div className="connect">
				<h3 className="connect__header">Let's start something</h3>
				<p className="connect__p">
					I'd love to hear about your organization and how we can grow together.
					Let's chat sometime!
				</p>
				<a href="mailto:jweitz1972@gmail.com">
					<button className="connect__button">Let's chat</button>
				</a>
			</div>
			{/* LOGO */}
			<div className="footer__text">
				<div className="footer__logo">
					<a href="/">
						<img src={logo} alt="logo" className="footer__logo__img" />
					</a>
				</div>
				{/* P */}
				<p className="footer__p">Jr full stack developer open to work!</p>
				{/* LINKS */}
				<div className="foot__links">
					<a
						href="https://www.linkedin.com/in/jordan-weitz-9334901b5/"
						className="foot__links__wrapper"
					>
						<BsLinkedin className="foot__links__icon" />
					</a>
					<a
						href="https://github.com/JordanWeitz"
						className="foot__links__wrapper"
					>
						<BsGithub className="foot__links__icon" />
					</a>
					<a
						href="mailto:jweitz1972@gmail.com"
						className="foot__links__wrapper"
					>
						<BsMailbox className="foot__links__icon" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;

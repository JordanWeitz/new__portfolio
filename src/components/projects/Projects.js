import React, { useState, useRef } from "react";
import "./projects.css";
import { projCardData } from "../../projCardData";

function Projects() {
	const [isActive, setIsActive] = useState(null);

	return (
		<div className="projects">
			<div className="project__title">
				<h3 className="project__title__header">My Recent Work</h3>
				<br />
				<p className="project__title__p">
					Here are a few of my recent creations.{" "}
					<a href="mailto:jweitz1972@gmail.com">Email me</a> if you want to see
					more!
				</p>
			</div>
			<div className="projects__cards">
				{projCardData.map((proj) => (
					<div
						className="project__card"
						key={proj.id}
						onMouseOver={() => setIsActive(proj.id)}
					>
						<img src={proj.img} alt="" className="project__card__img" />
						<p
							className={`project__card__text ${
								isActive === proj.id ? "" : "hidden"
							}`}
						>
							{proj.desc}
						</p>
						<a
							href={proj.link}
							className={`project__card__link ${
								isActive === proj.id ? "" : "hidden"
							}`}
						>
							<button className="project__card__button">
								{proj.buttonText}
							</button>
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;

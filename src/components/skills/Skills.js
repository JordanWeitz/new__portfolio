import React from "react";
import "./skills.css";
import { BsCodeSquare } from "react-icons/bs";

function Skills() {
	return (
		<div className="skills">
			<div className="skills__green__wrapper">
				<div className="skills__green__wrapper__header">
					<h3 className="skills__green__title">Howdy, my name is Jordan.</h3>
					<br />
					<br />
					<br />
					<p className="skills__green__p">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Dignissimos eaque labore libero voluptatibus explicabo totam cumque
						quia recusandae pariatur incidunt harum exercitationem, impedit
						deleniti, cupiditate unde at iusto iste vero qui minima doloremque?
					</p>
				</div>
			</div>
			<div className="skills__cards">
				<div className="skills__cards__wrapper">
					<div className="skillscard">
						<BsCodeSquare className="skillscard__icon" />
						<h4 className="skillscard__header">Full Stack Developer</h4>
						<p className="skillscard__p">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
							culpa dolore odio a nemo omnis sequi dolor, dolores libero
							molestias?
						</p>
						<h5 className="skillscard__title">Languages:</h5>
						<p className="skillscard__p">
							<span className="skillscard__p__span">React</span>, Java, Node,
							SQL, PL/SQL
						</p>
						<h5 className="skillscard__title">Dev Tools:</h5>
						<ul className="skillscard__p">
							<li>
								<span className="skillscard__p__span">VSCode,</span>
							</li>
							<li>IntelliJ,</li>
							<li>Postman,</li>
							<li>MongoDB,</li>
							<li>Git,</li>
							<li>GitHub,</li>
							<li>Heroku,</li>
							<li>Firebase</li>
						</ul>
					</div>
					<div className="skillscard">
						<BsCodeSquare className="skillscard__icon" />
						<h4 className="skillscard__header">Leader</h4>
						<p className="skillscard__p">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
							culpa dolore odio a nemo omnis sequi dolor, dolores libero
							molestias?
						</p>
						<h5 className="skillscard__title">Volunteering:</h5>
						<p className="skillscard__p">
							<span className="skillscard__p__span">DEFEND</span> - Building
							social media centered around accountability
						</p>
						<h5 className="skillscard__title">Duties Include:</h5>
						<ul className="skillscard__p">
							<li>
								<span className="skillscard__p__span">Scheduling</span>
							</li>
							<li>Systems Analysis,</li>
							<li>Delegation,</li>
							<li>Communication,</li>
							<li>Git,</li>
							<li>GitHub,</li>
							<li>Heroku,</li>
							<li>Firebase</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;

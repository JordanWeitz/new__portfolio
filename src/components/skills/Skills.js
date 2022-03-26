import React from "react";
import "./skills.css";
import { BsCodeSquare, BsFillPeopleFill } from "react-icons/bs";

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
						<span className="skills__green__p__span">Consistency is key.</span>{" "}
						As I finish my last semester of SAIT's Software Development diploma,
						I will be looking to continue my educational journey in the field of
						web development. I am currently looking for a full-time position in
						an organization that values ambition, tenacity, and creativity.
					</p>
				</div>
			</div>
			<div className="skills__cards">
				<div className="skills__cards__wrapper">
					<div className="skillscard">
						<BsCodeSquare className="skillscard__icon" />
						<br />
						<br />
						<h4 className="skillscard__header">Full Stack Dev</h4>
						<p className="skillscard__p">
							My education at SAIT is primarily focused on the full-stack. From
							Javascript and HTML to SQL and PL/SQL. SAIT stressed the
							importance of continual learning from day one.
						</p>
						<br />
						<br />
						<h5 className="skillscard__title">Languages:</h5>
						<p className="skillscard__p">
							<span className="skillscard__p__span">React</span>, Java, Node,
							SQL, PL/SQL, HTML, CSS, JavaScript, JORDAN
						</p>
						<br />
						<br />
						<h5 className="skillscard__title">Dev Tools:</h5>
						<ul className="skillscard__list">
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
						<BsFillPeopleFill className="skillscard__icon" />
						<br />
						<br />
						<h4 className="skillscard__header">Leader</h4>
						<p className="skillscard__p">
							In my free time I volunteer as a web developer for the children's
							rights organization, DEFEND. I was promoted to team lead and
							oversee a handful of developers.
						</p>
						<br />
						<br />
						<h5 className="skillscard__title">Volunteering:</h5>
						<p className="skillscard__p">
							<span className="skillscard__p__span">DEFEND</span> - Building
							social media centered around accountability
						</p>
						<br />
						<br />
						<h5 className="skillscard__title">Duties Include:</h5>
						<ul className="skillscard__list">
							<li>
								<span className="skillscard__p__span">Scheduling</span>
							</li>
							<li>Systems Analysis,</li>
							<li>Delegation,</li>
							<li>Communication,</li>
							<li>Facilitating Teamwork,</li>
							<li>Talent Review,</li>
							<li>Chairing Meetings,</li>
							<li>Code Reviews</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;

import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className="HomePage">
			<header className="hero">
				<h1 className="hero-text">
					Hi, My name is
					<span> Thomas </span>
				</h1>
				<hr />
				<br />
				<p className="h-sub=text">
					<h4>
						“Always code as if the guy who ends up maintaining your code will be
						a violent psychopath who knows where you live.” – Martin Golding
					</h4>
					<br />
					<hr />
					<br />
					{/* I'm a US Army veteran and a professional with 7 years of customer
					support and IT experience looking to translate service orientation and
					people skills into a career as a Font-End Developer. I've recently
					graduated the Eleven Fifty Academy's Web Developer bootcamp. */}
				</p>
				<div className="icons">
					<Link className="icon-holder">
						<FontAwesomeIcon icon={faFacebook} className="icon fb" />
					</Link>
					<Link className="icon-holder">
						<FontAwesomeIcon icon={faGithub} className="icon gh" />
					</Link>
					<Link className="icon-holder">
						<FontAwesomeIcon icon={faLinkedin} className="icon li" />
					</Link>
				</div>
			</header>
		</div>
	);
}

export default HomePage;

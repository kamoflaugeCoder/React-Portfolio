import React from "react";
import about from "../img/about.png";

function ImageSection() {
	return (
		<div className="ImageSection">
			<div className="img">
				<img src={about} alt="" />
			</div>
			<div className="about-info">
				<br />
				<h4>
					<span> JUST </span> a little bit about <span> MESELF </span>
				</h4>
				<br />
				<p className="about-text">
					I'm a US Army veteran and a professional with 7 years of customer
					support and IT experience looking to translate service orientation and
					people skills into a career as a Font-End Developer. I've recently
					graduated the Eleven Fifty Academy's Web Developer bootcamp.
				</p>
				<div className="about-details">
					<div className="left-section">
						<span>
							<p>Full Name:</p>
							<p>Age:</p>
							<p>Nationality:</p>
							<p>Languages:</p>
							<p>Address:</p>
							<p>Countries:</p>
						</span>
					</div>
					<div className="right-section">
						<p>Thomas Crowell</p>
						<p>42</p>
						<p>American</p>
						<p>English</p>
						<p>123 Street, Indianapolis, IN 46220</p>
						<p>United States</p>
					</div>
				</div>
				<button className="btn">Download CV</button>
			</div>
		</div>
	);
}

export default ImageSection;

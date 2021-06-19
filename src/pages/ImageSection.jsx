import React from 'react';
import about from '../img/about.png';


function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Lorem Ipsum</span></h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Desir per po la ta doso vi slone ve?
                </p>

                <br />

                <div className="about-details">
                    <div className="name-details">
                        <p>Full Name</p>
                        <p>: Lorem Ipsum</p>
                    </div>
                    <div className="name-details">
                        <p>Age</p>
                        <p>: 41</p>
                    </div>
                    <div className="name-details">
                        <p>Skill</p>
                        <p>: Lorem Ipsum</p>
                    </div>
                    <div className="name-details">
                        <p>Placeholder</p>
                        <p>: Lorem Ipsum</p>
                    </div>
                    <div className="name-details">
                        <p>Placeholder</p>
                        <p>: Lorem Ipsum</p>
                    </div>
                    <div className="name-details">
                        <p>Placeholder</p>
                        <p>: Lorem Ipsum</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ImageSection;

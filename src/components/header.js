import React from 'react';
import "../App.css";
import Typed from 'react-typed';
import { Link } from "react-scroll"


function Header(props) {
    return (
        <div id="home" className="header-wrapper">

            <div className="main-info">
                <h1>junior full stack developer</h1>
                <Typed className="typed-text" strings={["HTML/CSS", "JavaScript", "React", "Angular", "Node.js", "MongoDB"]} typeSpeed={40} backSpeed={60} loop />
                <div className="d-flex">
                    <Link to="contact" offset={-110} className="btn-main">contact me</Link>
                    <a href="https://easyupload.io/nwkoih" className="btn-main">download cv</a>
                </div>

            </div>


        </div>
    )
}

export default Header
import React from "react";
import {Link} from "react-scroll"
import logo from "../transLogo.png"
import "../App.css"

//react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Navbar (props){
    return(
       
            <nav className="navbar navbar-expand-lg navbar-light shadow-small py-4 fixed-top">
                <div className="container px-3">
                    <Link  className="navbar-brand" smooth={true} to="home" offset={-110}> <img src={logo}  className="logo" alt="logo" style={{filter:"brightness(100)"}}/> </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon = {faBars} style={{color: "#fff"}} />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="aboutMe" offset={-110} className="nav-link" href="#">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="skills" offset={-110} className="nav-link" href="#">skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">portfolio</Link>
                        </li>
                          <li className="nav-item">
                            <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contact</Link>
                        </li>
                        
                        </ul>
                    </div>
                 </div>
            </nav>
       
    )
}

export default Navbar
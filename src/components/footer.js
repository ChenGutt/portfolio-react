import React from 'react';
import {Link} from "react-scroll"
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share"

function Footer(props){
    return(
        <div className="footer">
            <div className="container ">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6 col-sm-6 contacts-mobile">
                        <div className="d-flex">
                            <p>Groningen, the Netherlands</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel: +31 62 477 56 47 ">+31 62 477 56 47</a>
                        </div>
                        <div className="d-flex">
                            <a href="mailto: chen.gutt1@gmail.com">chen.gutt1@gmail.com</a>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-2 col-sm-6 my-3 nav-mobile">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" offset={-110} className="footer-nav">Home</Link>
                                <br/>
                                <Link smooth={true} to="aboutMe" offset={-110} className="footer-nav">About me</Link>
                                 <br/>
                                <Link smooth={true} to="skills" offset={-110} className="footer-nav">Skills</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="portfolio" offset={-110} className="footer-nav">Portfolio</Link>
                                 <br/>
                                <Link smooth={true} to="contact" offset={-110} className="footer-nav">Contact</Link>
                                 <br/>
                                <a target="_blank" href="https://www.linkedin.com/in/chen-gutt-8b5596209/"className="footer-nav">On LinkedIn</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-5 col-sm-6 align-items-center">
                        <div className="row">
                        <div className="col">
                       <div className="d-flex justify-content-center">
                           <FacebookShareButton url={"https://i-stay.netlify.app/"}>
                               <FacebookIcon className="mx-3" size={36} quote={"FullStack Developer"} hashtag="#javascript"/>
                           </FacebookShareButton >
                           <LinkedinShareButton url={"https://www.linkedin.com/in/chen-gutt-8b5596209/"}>
                                <LinkedinIcon className="mx-3" size={36}/>
                           </LinkedinShareButton>
                       </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp; CHEN GUTT | All Rights Reserved
                        </p>
                        </div>
                        <div className="col avatar-mobile">
                            <img src="images/avatar.png" alt="" className="avatar"/>
                            </div>
                            </div>
                    </div>


                </div>
            </div>
        </div> 
    )
}

export default Footer
import React from "react";
import me from "../aboutMe2.jpg"

function AboutMe(props){
    return(
        <div id="aboutMe" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xs-12">
                    <div className="photo-wrap mb-5">
                        <img src={me} alt="my picture" className="profile-img "/>
                    </div>
                </div>
                <div className=" about col-lg-6 col-xs-12">
                    <h1 className="about-heading">about me</h1>
                    <p className="about-text">Hello, I'm Chen and thank you for checking out my website! <br /> I am 35 year old from Groningen, the Netherlands and about to graduate a FullStack web development course. <br/>
                     I'm very excited and looking forward to put everything I've learnt in the course into practice on my first job.  
                    I'm bringing with me rich work experience on other fields, which gave me skills that are also applicable in programming, such as <strong>self-learning</strong>,<strong>working under pressure</strong>, <strong>team work</strong> and more. <br/>
                    I am open to work and would love to hear from you! </p>
                </div>
            </div>
        </div> 
    )
}

export default AboutMe
import React from 'react';
import iStay from "../images/istayProj.PNG";
import mardiGras from "../images/mardiProj.PNG";
import portfolio from "../images/portfolioProj.PNG";

//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

//REACT POPUP box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

function Portfolio(props){

      const openPopupBoxPortfolio = () => {
        const content = (
            <>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={portfolio} alt="istay angular project" className="portfolio-image-popupbox" />
                    </div>
                    <div className="col-lg-6">
                        <p className="portfolio-text"> 
                          This project was done with the help of a fantastic tutorial which I've learnt a lot from. The choice of making my portfolio site with React was purely in order to get 
                          more familiar with the syntax and to get used to working with components. I've had lots of fun doing that. 
                        </p>
                        <b>Link to project: </b> <a className="hyper-link" onClick={()=>window.open("https://portfolio-chen-gutt.netlify.app//")}>https://portfolio-chen-gutt.netlify.app/</a>
                        <br />
                        <b>on Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChenGutt/angular_project_bnb", "_blank")}>Portfolio project</a>
                        
                    </div>
                </div>
            </>
        )
      
        PopupboxManager.open({content})
            PopupboxManager.update({
            content,
            config: {
                titleBar: {
                text: "Portfolio app React",
                },
          },
    });
    }

    // const popupboxConfigIstay = {
    //        titleBar: {
    //         enable: true,
    //         text: "iStay Angular-Node.js-MongoDB project"  
    //     },
    //     fadeIn:true,
    //     fadeInSpeed: 500

    // }


    const openPopupBoxIstay = () => {
        const content = (
            <>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={iStay} alt="istay angular project" className="portfolio-image-popupbox" />
                    </div>
                    <div className="col-lg-6">
                        <p className="istay-text"> 
                            The iStay project connects the Angular framework with the API I built on Node.js and MongoDb. Having the ability to work with both server and client side on one project felt amazing and I've enjoyed it a lot, despite many challenges. 
                            <br/>
                            I've learnt how to search for solutions myself online and how to 
                             to work with components and services in Angular while collecting all the information from the database through the server. 
                            <br/>
                            deplying the project to heroku (Node.js) and Netlify (Angular) were also a good learning process, as I needed to fully rely on documentations online.
                            <br/>
                            Altogether, I am very happy with the result!
                       
                        </p>
                        <b>Link to project: </b> <a className="hyper-link" onClick={()=>window.open("https://i-stay.netlify.app/")}>https://i-stay.netlify.app</a>
                        <br />
                        <b>on Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChenGutt/angular_project_bnb", "_blank")}>iStay Angular github</a>
                        
                    </div>
                </div>
            </>
        )
      
        PopupboxManager.open({content})
            PopupboxManager.update({
            content,
            config: {
                titleBar: {
                text: "iStay Angular-Node.js-MongoDB project",
                },
          },
    });
    }

    const popupboxConfigIstay = {
           titleBar: {
            enable: true,
            text: "iStay Angular-Node.js-MongoDB project"  
        },
        fadeIn:true,
        fadeInSpeed: 500

    }


    
      const openPopupBoxMardiGras = () => {
        const content = (
            <>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={mardiGras} alt="mardiGras html/css project" className="portfolio-image-popupbox" />
                    </div>
                    <div className="col-lg-6">
                        <p className="mardi-text">
                           The first project in the course and the first time I was required to put different stuff I learned into practice, according to client requirements.
                           The project tasks were focused on HTML and CSS with maybe 5-10% of JavaScript (I also used a bit of jQuery for headline animation and popups). 
                           It was a big challenge to decide how I want the website to look like and how to inject the JS into the HTML and CSS. 
                           But the biggest challenge, by far, was to make everything responsive. To acheive that, I've used the css grid system. 
                           It was a concious decision not to use bootstrap back then but to first dive a bit deeper into the CSS world. 
                           On later projects, the bootstrap became a really dear friend of mine ;)
                        
                        </p>
                        <b>Link to project: </b> <a className="hyper-link" onClick={()=>window.open("https://my-mardigras-project.netlify.app/")}>https://my-mardigras-project.netlify.app</a>
                        <b>on Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChenGutt/project_Mardi_Gras", "_blank")}>Mardi Gras github</a>
                    </div>
                </div>
            </>
        )
      
        PopupboxManager.open({content})
    }

    const popupboxConfigMardiGras = {
        titleBar: {
            enable: true,
            text: "Mardi Gras - HTML/CSS/JS project"  
        },
        fadeIn:true,
        fadeInSpeed: 500

    }

    return(
        <div id="portfolio" className="portfolio-wrapper">
          
            <div className="container">
               
             <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="img-box-wrapper row justify-content-center">
    
                    <div className="col-md-6 col-lg-4 portfolio-img-box" onClick={openPopupBoxIstay}>
                        <img src={iStay} alt="istay angular project" className="portfolio-img" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon = {faSearchPlus} className="portfolio-icon"/>
                    </div>
                
             
                    <div className="col-md-6 col-lg-4 portfolio-img-box" onClick={openPopupBoxMardiGras}>
                        <img src={mardiGras} alt="mardi gras html/css project" className="portfolio-img" />
                         <div className="overflow"></div>
                         <FontAwesomeIcon icon = {faSearchPlus} className="portfolio-icon"/>
                    </div>
              
                
                    <div className="col-md-6 col-lg-4  portfolio-img-box" onClick={openPopupBoxPortfolio}>
                        <img src={portfolio} alt="mardi gras project" className="portfolio-img" />
                         <div className="overflow"></div>
                         <FontAwesomeIcon icon = {faSearchPlus} className="portfolio-icon"/>
                    </div>
                </div>
            
            </div>
            <PopupboxContainer {...popupboxConfigIstay} />
            <PopupboxContainer {...popupboxConfigMardiGras} />
        </div> 
    )
}

export default Portfolio
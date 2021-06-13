import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faNode } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Skills(props){
    return(
        <div id="skills" className="skills text-center">
            <h1 className="py-5">my skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon icon = {faJs} className="icon" size="2x"/>
                                 </div>
                                <h3>JavaScript</h3>
                                <p>Familiar with JavaScript Vanilla, Angular framework and React library</p>
                            </div>
                        </div>
                        {/*  */}
                          <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon icon = {faCode} className="icon" size="2x"/>
                                </div>
                                <h3>HTML/CSS</h3>
                                 <p>Additionally to native CSS, also well familiar with SASS and Bootstrap library. </p>
                            </div>
                        </div>
                        {/*  */}
                          <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon icon = {faNode} className="icon" size="2x"/>
                                </div>
                                <h3>Node.js</h3>
                                 <p>My favorite so far. Built an API for my Angular project with Express.</p>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
        </div> 
    )
}

export default Skills
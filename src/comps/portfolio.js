import React, { useState } from 'react';
import ".././index.css"
import Card from './card';

function Portfolio(props){

    let [proj_ar, setProj_ar] = useState([
    {name: "iStay", description: "Angular, Node.js, MongoDB",img: "url('images/istayProj.png')"},
    {name: "iStay", description: "Angular, Node.js, MongoDB", img: "url('images/istayProj.png')"},
    {name: "Mardi Gras", description: "HTML, CSS, JS VANILLA", img: "url('images/mardiProj.png')"}
  ])
    return(
        <div className="container" style={{height:"auto"}}>
            <h2 className="text-center">PORTFOLIO</h2>
            <hr className="w-50 mx-auto m-5" />
           
                    <Card proj_ar = {proj_ar} />

        </div> 
    )
}

export default Portfolio
import React from 'react';

function About(props){
    return(
        <div className="container mt-5" style={{height:"50vh"}}>
            <h1 className="text-center my-4">ABOUT ME</h1>
             <hr className="w-50 mx-auto m-5" />
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 d-flex text-center ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae quo quas numquam nemo a velit incidunt error facere earum harum, voluptates corporis maiores adipisci quod sed voluptatem vero repellat doloremque veniam sequi recusandae fuga modi. Dolore repudiandae ipsum unde.</p>
                </div>
                <div className="col-lg-3"></div>
            </div>
            
        </div> 
    )
}

export default About
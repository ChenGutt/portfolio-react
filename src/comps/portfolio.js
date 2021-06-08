import React from 'react';

function Portfolio(props){
    return(
        <div className="container" style={{height:"40vh"}}>
            <h2 className="text-center">PORTFOLIO</h2>
            <hr />
            <div className="col-lg-4">
                <div class="card" style={{width: "18rem"}}>
                    <div className="bg-card" style={{height:'30vh', backgroundImage: './public/images/istayProj.png'}}>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                


            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
        </div> 
    )
}

export default Portfolio
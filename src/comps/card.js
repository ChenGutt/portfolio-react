import React from 'react';

function Card(props){
    return(
        <div className="row mx-auto">
            {props.proj_ar.map(item=>{
                return(
                   <div className="col-lg-4">
                        <div class="card border-0 p-1" style={{width: "18rem"}}>
                            <div className="bg-card" style={{height:'30vh', backgroundImage: item.img}}> </div>
                            <div class="card-body text-center">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">{item.description}</p>
                                <a href="#" class="btn btn-primary w-100">TO PROJECT</a>
                            </div>
                         </div>
                    </div>

                    
                )
            })}
            </div>
  
        
    )
}

export default Card
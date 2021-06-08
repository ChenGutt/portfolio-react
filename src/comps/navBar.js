import React from 'react';
import ".././index.css"

function Navbar(props){
    return(
        <div className="container-fluid">
            <div className="row bg-light shadow p-4 align-items-center">
                <div className="col-lg-3 logo">
                    <h2><img src="images/chenLogo.png" alt="" style={{width:'150px'}} /></h2>
                </div>
                <nav className="col-lg-9 text-end">
                    <a href="#">ABOUT</a>
                    <a href="#">PORTFOLIO</a>
                    <a href="#">CONTACT</a>
                </nav>
            </div>
 
        </div> 
    )
}

export default Navbar
import React from "react"
import { NavLink } from "react-router-dom"



const Navbar=()=>{
    return(
        <>
          <div className="container-fluid">
           <div className="row">
            <div className="col-10 mx-auto">

<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Yeamin</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/About">About</NavLink>
        <NavLink className="nav-link" to="/Services">Services</NavLink>
        <NavLink className="nav-link" to="/BlogPage">Blog Page</NavLink>
        <NavLink className="nav-link" to="/Contact">Contact me</NavLink>
       
      </div>
    </div>
  </div>
</nav>

            </div>
           </div>
          </div>
          
     

        </>
    )
}
export default Navbar
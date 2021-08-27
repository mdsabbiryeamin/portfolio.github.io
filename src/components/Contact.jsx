import React from "react"
import  SociIcon from "../Page/SoicIcon"


const Contact=()=>{
    return(
        <>
     
        <div className="container">
         <div className="row">
          <div className="col-10 mx-auto">
          <h1 className="text-center">Contact Me</h1>
          <div class="mb-3">
  <label for="" className="form-label">Name</label>
  <input type="text" className="form-control" id="" placeholder=""/>
</div>     <div class="mb-3">
  <label for="" className="form-label">Email address</label>
  <input type="email" className="form-control" id="" placeholder=""/>
</div>
          <div class="mb-3">
  <label for="" className="form-label">Password</label>
  <input type="password" className="form-control" id="" placeholder=""/>
</div>
<div className="mb-3">
  <label for="" className="form-label">Your Message</label>
  <textarea className="form-control" id="textarea1" rows="3"></textarea>
</div>
<button className="btn btn-danger">submit</button>
          
</div>
</div>

          </div>

        </>
    )
}
export default Contact
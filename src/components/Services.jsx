import React from "react"
import ServicesCard from "../Page/ServicecCard"
import SociIcon from "../Page/SoicIcon"
const Services=()=>{
    return(
        <>
        <div className="Services">
          <div className="container">
           <div className="row">
            <div className="col-12 mx-auto">
                <h1 className="text-center">Services</h1>
                 <div className="row" >
                     <div className="col-sm-4 " >
                         <ServicesCard title="Web Design" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt repellendus eaque soluta iure, tenetur esse iusto ipsa praesentium atque cum consequatur odit error aperiam sapiente accusamus, quae ." img={<i class="fas fa-laptop"></i>}/>
                     </div>
                     <div className="col-sm-4">
                     <ServicesCard title="Web Development" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt repellendus eaque soluta iure, tenetur esse iusto ipsa praesentium atque cum consequatur odit error aperiam sapiente accusa ." img={<i class="fal fa-laptop-code"></i>}/>
                     </div>
                     <div className="col-sm-4">
                     
                     <ServicesCard title="Psd to Html" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt repellendus eaque soluta iure, tenetur esse iusto ipsa praesentium atque cum consequatur odit error aperiam sapiente accusamus, quae ." img={<i class="far fa-file-code"></i>}/>
                     </div>
                   
                 </div>



            </div>
           </div>
         </div>
         <SociIcon/>
       </div>

        </>
    )
}
export default Services
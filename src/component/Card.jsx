import React from 'react'
import { NavLink } from 'react-router-dom'
function Card(props) {
  return (
    <>
       
        <div className=" flip-container  ontouchstart=this.classList.toggle('hover') col-md-4 col-10 mx-auto ">
          <div className="flipper">

            <div className="card" >
            <img src={props.imgsrc} className="card-img-top" alt="..."/>
            <div className="card-body  ">
                <h3 className="card-title text-center fw-bold ">{props.title}</h3>
            </div>
            </div>
                <div className="back  text-dark  ">
                  <h4 className= ' py-4 fw-bold text-center ' >
                    Description related project
                  </h4>
                <p className="card-text mx-2"> Hi visitor, welcome to my Portfolio. In this  <strong>{props.title}</strong> { props.moreDes }</p>
                  {/* <p>In this <strong>E-Commerec website</strong>  </p> */}
                  <div className=' fixed-bottom  pb-4'>
                      <a   target='_blank' href={props.href} className=" d-flex justify-content-center mx-4 btn btn-outline-success">Click here to Check out </a>
                  </div>
                </div>
          </div>
       
            </div>
       
    </>
  )
}

export default Card

{/* <div className="col-md-4 col-10 mx-auto ">
<div className="card" >
<img src={props.imgsrc} className="card-img-top" alt="..."/>
<div className="card-body  ">
    <h5 className="card-title fw-bold ">{props.title}</h5>
    <p className="card-text">{props.des}</p>
    <a  href={props.href} className="btn btn-outline-success">Click here to Check out </a>
    
</div>
</div>
</div> */}
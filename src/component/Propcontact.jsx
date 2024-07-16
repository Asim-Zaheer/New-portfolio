import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useRef } from 'react'
function Propcontact(props) {
 
  return (
    <>
    <div class="mb-3 ">
    <label for="exampleFormControlInput1" className="form-label fw-bold text-white ">
     {props.Name}
     &nbsp; < FontAwesomeIcon icon={props.img} />

    </label>
    <input
    // ref={props.messageTextRef}
    name={props.name}
      type={props.type}
      class="form-control  "
      id="exampleFormControlInput1"
      placeholder=  {props.placeholder}
      required

    />
  </div>
  </>
  )
}

export default Propcontact
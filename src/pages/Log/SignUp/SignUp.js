import React from 'react';
import img30 from "../../../Images/img30.png"
import {label,button} from "react-bootstrap";
import "./style2.css"

function SignUp() {
  return (
   <div class="flex122">
        <img src={img30} alt="signup" className="signimage"/>
        <div className='form2'>
            <label className='mt-2'>Name</label>
            <input type="text"/>
            <br/>
            <label className='mt-2'>Address</label>
            <input type="text"/>
            <br/>
            <label className='mt-2'>Contact</label>
            <input type="text"/>
            <br/>
            <label className='mt-2'>EmailAdd</label>
            <input type="email"/>
            <br/>
            <label className='mt-2'>Passwrd</label>
            <input type="password"/>
            <br/>
            <br/>
            <br/>
            <button className='button22'>SignUp</button>
        </div>
   </div>

  )
}

export default SignUp;

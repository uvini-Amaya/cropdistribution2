import React from 'react';
import { MDBContainer,MDBInput} from 'mdb-react-ui-kit';

// MDBRow,
//   MDBCol,
//   MDBBtn,
import img6 from "../../../Images/img6.png";
import "../../style for pages/style.css";
// import { Button } from 'react-bootstrap';
import Footer from "../../../Components/Footer/Fotter";

import Button from '../../../Components/Button/Button';


function LogIn() {
  return (
    <>
    <MDBContainer className="mdbcontainer">
    {/*  <div className='mdbcontainer'> */}
      <div className="center">
       
        <div >
          <img src={img6} className="logimge" alt="logo" />
          <h4 className="topictextlogin">We are The DIGItalMARkeT</h4>
        </div>

        <p>Please login to your account</p>
            
        <MDBInput wrapperClass='mb-4 w-75' label='Email address' id='form1' type='email'/>
        <MDBInput wrapperClass='mb-4 w-75' label='Password' id='form2' type='password'/>


        {/* <div className="text-center pt-1 mb-5 pb-1"> */}
          {/* <Button className="w-25">Log in</Button> */}
          <Button name="Log In" onClick={()=>alert("password Remembered.")}/>
        {/* </div> */}
    
      </div> 

      <div>
        <h4 class="mb-4">We are more than just a company</h4>
        <p class="paragraphlogin">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    {/* </div> */}

     </MDBContainer> 

    <br/>
    <Footer/>

     </>
  );
}

export default LogIn;




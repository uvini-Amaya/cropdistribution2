import React from 'react';
import { MDBContainer,MDBInput} from 'mdb-react-ui-kit';

import img6 from "../../../Images/img6.png";
import "../../style for pages/style.css";
// import { Button } from 'react-bootstrap';
import Footer from "../../../Components/Footer/Fotter";

import Button from '../../../Components/Button/Button';


import { useEffect, useState } from "react";

import { useNavigate} from "react-router-dom";
import { LegendToggleOutlined } from "@mui/icons-material";


const users = [
  {
    username: 'admin1',
    password: '12345678'
  },
  {
    username:'admin2',
    password:'012345678'
  }
];





function LogIn() {



  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const changeHandler = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const checkUser = () => {
    const usercheck = users.find(user => (user.username === data.username && user.password === data.password));
    if(usercheck) {
      console.log("Login successful");
      
      console.log("Wrong password or username");
    }
    // console.log(uname);
    console.log(usercheck);
  }

  useEffect(() => {
checkUser(users)
  }, [data.username, data.password])

  console.log(data);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }
  

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


        {/* <Button color="primary" className="px-4" onClick={routeChange}>
               Login
        </Button> */}


          <Button name="log" onClick={routeChange}/> 
          
          
    
      </div> 
        
        <br/>

      <div>
        <h4 class="mb-4">We are more than just a company</h4>
        <p class="paragraphlogin">Before you reach our services you need to get registered. It is just like when you here logged in with your correct username and password which was provided before , then our web services are open to you and you can do selling,buying or even both here.
        </p>
      </div>
   

     </MDBContainer> 

    <br/>
    <Footer/>

     </>
  );
}

export default LogIn;




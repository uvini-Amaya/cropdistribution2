import React from 'react';
import img7 from "../../Images/img7.jpg";
import "../style for pages/style.css";
import { Card } from 'react-bootstrap';
import "../style for pages/style.css";
import img1 from "../../Images/img1.jpg";
import Footer from "../../Components/Footer/Fotter";



import img50 from "../../Images/img50.jfif";
import img51 from "../../Images/img51.jpg";

function Aboutus() {
  return (
    <>
    <div className='aboutusflex'>
      
        
          <img src={img7} alt="aboutusimage" width="60%" ></img>
          <div >
          <h4>JOIN US  WITH YOUR GROWTH & BUY YOUR NEEDY FROM US  ONLINE</h4>
      
      
          <Card style={{ width: '20rem' ,height:'25rem',background:'aquamarine'}} className="card1">
      <Card.Img variant="top" src={img51} className="cardimage" />
      <Card.Body>
        <Card.Title >Here You</Card.Title>
        <Card.Text>
          Have felt comfy of doing these on every bussiness day. We know it is <b>"NO".<br/><br/><i>Any time feel free to contact us.</i> We are always here for you.</b>.
        </Card.Text>
      </Card.Body>
      </Card>


    <br/>

      <Card style={{ width: '20rem' ,height:'25rem',background:'aquamarine'}} className="card1">
      <Card.Img variant="top" src={img50} className="cardimage" />
      <Card.Body>
        <Card.Title > Exhausted Routine</Card.Title>
        <Card.Text>
          Let's join hands with raising technolog and be smart and satisfied at the end of the day.You can get rid of 75% of hard work after joining with us.<b>This is actually a replacement for the "Economical Centers".</b>
        </Card.Text>
      
      </Card.Body>
      </Card>
      </div>
      
      <br/>

      


</div> 
<br/>
<Footer/>
</>        
  )
}

export default Aboutus;

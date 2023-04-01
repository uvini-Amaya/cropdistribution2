import React from 'react';
import img7 from "../../Images/img7.jpg";
import "../style for pages/style.css";
import { Card } from 'react-bootstrap';
import "../style for pages/style.css";
import img1 from "../../Images/img1.jpg";
import Footer from "../../Components/Footer/Fotter";

function Aboutus() {
  return (
    <>
    <div className='aboutusflex'>
      
        
          <img src={img7} alt="aboutusimage" width="60%" ></img>
          <div >
          <h4>JOIN US  WITH YOUR GROWTH & BUY YOUR NEEDY FROM US  ONLINE</h4>
          
          
        
      
      <Card style={{ width: '20rem' ,height:'25rem',background:'aquamarine'}} className="card1">
      <Card.Img variant="top" src={img1} className="cardimage" />
      <Card.Body>
        <Card.Title >NewUser Promo</Card.Title>
        <Card.Text>
          10% off for the first 3 orders,from each farmer who buy more than 12kgs.So  make your order soon and collect your offers. 
        </Card.Text>
      </Card.Body>
      </Card>
      <br/>
      <Card style={{ width: '20rem' ,height:'25rem',background:'aquamarine'}} className="card1">
      <Card.Img variant="top" src={img1} className="cardimage" />
      <Card.Body>
        <Card.Title >Card Title</Card.Title>
        <Card.Text>
          Some quick example text 
        </Card.Text>
      
      </Card.Body>
      </Card>
      </div>
      
</div> 
<br/>
<Footer/>
</>        
  )
}

export default Aboutus;

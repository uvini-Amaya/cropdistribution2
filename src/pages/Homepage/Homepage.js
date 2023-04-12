import React from 'react';
// import Carousel from '../../Components/Carousel/Carousel';
import img2 from "../../Images/img2.jpg";
import img44 from "../../Images/img44.jpg";
import "../../pages/style for pages/style.css";
import { Card } from 'react-bootstrap';
import Button from '../../Components/Button/Button';
import Footer from "../../Components/Footer/Fotter";
// import Table from "../../Components/Table/Table";
import Chart from "../../Components/Chart/Chart";
import img11 from "../../Images/img11.jpg";
import img12 from "../../Images/img12.jpg";
import img10 from "../../Images/img10.jpg";
import { Divider } from '@mui/material';
import Steps from "../../Components/Steps/Steps";

import img150 from "../../Images/img150.jfif";
import img151 from "../../Images/img151.jfif";
import img152 from "../../Images/img152.jpg";
import img153 from "../../Images/img153.jfif";

import Carousel2 from "../../Components/Carousel/Carousel";

function Homepage() {
  return (
    <>
        <div className='content'>
           
            <div className='text'>
              <img src={img2} alt="homeimage" className="homeimage"/>
              
            

            <div>
              <div className='insidedis'>This is a crop distribution management system,simply a great substitution for the Economic Centers all over the country. </div>
              <br/>
              <ul >
                <br/>
                <li className='as'>So you don't have to travel anymore.</li>
                <br/>
                <li className='as'>Dear farmers you just have to insert your farming crops here.</li>
                <br/>
                <li className='as'>Then your time would be remained and you can continue your farming even on selling dates.</li>
                <br/>
                <li className='as'>Also since you can get to know what are the exact amount demanded from various areas seperately,your crop cultivation may not be waisted as earlier.</li>
                <br/>
                <li className='as'>Dear wholesale sellers here is the best way to buy your needy crops from farmers without reaching them physically. </li>
                <br/>
                <li className='as'>Then your time would be remained more and more and even while doing another job,you can buy them from farmers</li>
                <br/>
                <li className='as'>Indeed you would get fresh crops here. </li>
                <br/>
                <li className='as'>AS well the transportation cost would be remained.</li>  
              </ul>
              </div>
              <img src={img44} alt="homeimage" className="homeimage"/>
            
           </div>
            
            <br/>
            <div className="featuredbg">
            <h2 className="featured">Featured Here</h2>
            <div className="flexfeatured">
              <img src={img10}  alt="img1_featured" className="img_featured"/>
              <img src={img11} alt="img2_featured" className="img_featured"/>
              <img src={img12} alt="img3_featured" className="img_featured"/>
            </div>
            <br/>
            <br/>
            <Divider style={{ background: 'white' }} variant="middle" />
            <br/>
            <div className="flexfeatured2">
              <div>Vegetables</div>
              <div>Fruits</div>
              <div>Other Crops</div>
            </div>
            </div>
            <br/>

            <Carousel2/>

            <h2 className="cardsectopic">Promotions Available</h2>
            <div class="flex">
              
            <Card style={{ width: '18rem' ,height:'25rem', background:'aquamarine'} } >
              <Card.Img variant="top" src={img152} className="cardimage" />
              <Card.Body>
                <Card.Title className='cad'>Col-KandyFest</Card.Title>
                <Card.Text>
                  Dear wholesale sellers from Colombo & Kandy are welcom hete to collect a discout of 800 for each bill more than 9000. 
                </Card.Text>
                
                <Button name="Get your Offer" onClick={(value)=>alert(value)}/>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' ,height:'25rem',background:'aquamarine'}}>
              <Card.Img variant="top" src={img151} className="cardimage" />
              <Card.Body>
                <Card.Title>NewUser Promo</Card.Title>
                <Card.Text>
                10% off for the first 3 orders,from each farmer who buy more than 12kgs.So  make your order soon and collect your offers. 
                </Card.Text>
                <Button name="Get Offer" onClick={(value)=>alert(value)}/>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem' ,height:'25rem',background:'aquamarine'}}>
              <Card.Img variant="top" src={img153} className="cardimage" />
              <Card.Body>
                <Card.Title>Rural Offer</Card.Title>
                <Card.Text>
                  For those who buy beans from the farmers from Nuwara Eliya are luckily getting 5% off for each order .
                </Card.Text>
                <Button name="PromoCode=Beans5" onClick={(value)=>alert("Are you willig to be a winer")}/>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem' ,height:'25rem',background:'aquamarine'}}>
              <Card.Img variant="top" src={img150} className="cardimage" />
              <Card.Body>
                <Card.Title>BananaOffer</Card.Title>
                <Card.Text>
                  Be soon, this is the Banana time .Not be delay to have fresh bananas for 4% off for each lot more than 6kgs.
                </Card.Text>
                <Button name="promo code:banana4" onClick={(value)=>alert("get offfer")}/>
              </Card.Body>
            </Card>
          


        </div>
    </div>
   
    <br/>


   
    
    <div align="center" className='steps'>
      <h2 className="featured">Steps of Using for Wholesale Sellers</h2>
      <Steps/>
    </div>
    
    <br/>
 
    

    {/* <br/>
    <h2 color>Some Example Calculus Data About Cultivation</h2> */}
    {/* <Table/> */}

    <Footer/>
    </>
  )
}

export default Homepage;

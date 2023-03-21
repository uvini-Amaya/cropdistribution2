import React from 'react';
// import Carousel from '../../Components/Carousel/Carousel';
import img2 from "../../Images/img2.jpg";
import img44 from "../../Images/img44.jpg";
import "../../pages/style for pages/style.css";
import { Button,Card } from 'react-bootstrap';



// import { Carousel } from 'bootstrap';
function Homepage() {
  return (
    
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
            <div class="flex">
            <Card style={{ width: '20rem' ,height:'25rem'}}>
              <Card.Img variant="top" src={img2} className="cardimage" />
              <Card.Body>
                <Card.Title className='cad'>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' ,height:'25rem'}}>
              <Card.Img variant="top" src={img2} className="cardimage" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem' ,height:'25rem'}}>
              <Card.Img variant="top" src={img2} className="cardimage" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem' ,height:'25rem'}}>
              <Card.Img variant="top" src={img2} className="cardimage" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          


        </div>
    </div>
  )
}

export default Homepage;

import React from 'react'
import img232 from "../../Images/img232.jfif";
import img233 from "../../Images/img233.jpg";
import { Card ,Button} from 'react-bootstrap';
import Footer from "../../Components/Footer/Fotter";
import CallIcon from '@mui/icons-material/Call';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Fax';
import LocationOnIcon from '@mui/icons-material/LocationOn';



function Contact() {
  return (
    <>
    <div className='flex_contact'>
        <Card style={{ width: '20rem' ,height:'25rem',background:'aquamarine'}} className='card109'>
              <Card.Img variant="top" src={img233} className="cardimage8" />
              <Card.Body>
                <Card.Title><b>Anne Rodge</b></Card.Title>
                <Card.Text>
                    CEO & Founder of of DIGItalMARkeT online Network
                </Card.Text>
                <Button  onClick={(value)=>alert("Contact CEO")} ><CallIcon/></Button>
              </Card.Body>
            </Card>
                <div>
                    <img src={img232} alt='contact_us' className='image_contact'/>
                    <br/>
                    <br/>
                    <br/>
                    <div className='flex453'>
                        <AddIcCallIcon/>    
                        <EmailIcon/>
                        <LocationOnIcon/>
                        <FaxIcon/>
                    <div/>
                </div>
            </div>
    </div>
    <br/>
    <Footer/>
    </>
  )
}

export default Contact;
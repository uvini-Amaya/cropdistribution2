import React from 'react'
import img765 from "../../Images/img765.jfif";
import { Card } from 'react-bootstrap';

function Card3() {
  return (
    <div>
        <Card style={{ width: '20rem' ,height:'25rem',background:'greenyellow'}}>
            <Card.Img variant="top" src={img765} className="cardimage5" />
              <Card.Body>
                    <Card.Title>Siril Somarathne</Card.Title>
                    <Card.Text >
                    Farmer from Nuwara Eliya who cultivates beans,carrots and onions in large scales.
                    </Card.Text>
                </Card.Body>
        </Card>
    </div>
  )
}

export default Card3;
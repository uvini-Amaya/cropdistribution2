import React from "react";
import {Button, Card} from "react-bootstrap";

function Items ({data, onUpdate, onDelete}) {
    return (
        <div className="m-2">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>ID : {data.id}</Card.Title>
                    <Card.Title>Name : {data.name}</Card.Title>
                    <Card.Title>Price : {data.price}</Card.Title>
                    <Card.Title>Quantity : {data.quantity}</Card.Title>
                    <Button variant="success" onClick={()=> onUpdate(data)}>
                        Update
                    </Button>
                    <Button variant="danger" className="m-2" onClick={()=> onDelete(data)}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Items;
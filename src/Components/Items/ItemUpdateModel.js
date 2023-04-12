import React, {useEffect, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";
import Swal from 'sweetalert2';
import { purple } from "@mui/material/colors";

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

function ItemUpdateModel ({show, handleClose, data, updateData}) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [id, setId] = useState('');

    useEffect(()=> {
        if(data !== undefined){
            setQuantity(data.quantity);
            setName(data.name);
            setId(data.id);
            setPrice(data.price)
        }
    },[data])

    const update = () => {
        axios.put(''+id, {
            id: id,
            name: name,
            quantity:quantity,
            price:price
        },{
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(function (response) {
                handleClose();
                updateData();
                Toast.fire({
                    icon: 'success',
                    title: 'Item updated successfully!'
                })
            })
            .catch(function (error) {
                Toast.fire({
                    icon: 'error',
                    title: 'item updated fail!'
                })
            });
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Item ADD</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>ID</Form.Label>
                <Form.Control type="ID" value={id} placeholder="ID" onChange={(v)=> setId(v.target.value)}/>
                <Form.Label>Name</Form.Label>
                <Form.Control  value={name} type="name" placeholder="Name" onChange={(v)=> setName(v.target.value)}/>
                <Form.Label>Price</Form.Label>
                <Form.Control type="price" value={price} placeholder="Price" onChange={(v)=> setPrice(v.target.value)}/>
                <Form.Label>Quantity</Form.Label>
                <Form.Control  value={quantity} type="quatity" placeholder="Quantity" onChange={(v)=> setQuantity(v.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={()=> update()}>
                    Update Item
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ItemUpdateModel;
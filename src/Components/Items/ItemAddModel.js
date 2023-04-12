import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";
import Swal from 'sweetalert2';

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

function ItemAddModel ({show, handleClose, updateData}) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [id, setId] = useState('');

    const addItem = async () => {
        axios.post('', {
            id: id,
            name: name,
            quantity: quantity,
            price:price
        },{
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(function (response) {
                handleClose();
                updateData();
                clear();
                Toast.fire({
                    icon: 'success',
                    title: 'Item added successfully!'
                })
            })
            .catch(function (error) {
                Toast.fire({
                    icon: 'error',
                    title: 'Item added fail!'
                })
            });
    }

    const clear = () => {
        setId("");
        setName("");
        setPrice("");
        setQuantity("");
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
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="price" value={price} placeholder="Total Price" onChange={(v)=> setPrice(v.target.value)}/>
                <Form.Label>Price</Form.Label>
                <Form.Control  value={quantity} type="quantity" placeholder="Quantity" onChange={(v)=> setQuantity(v.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=> addStudent()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ItemAddModel;
import React from 'react';

import {Container,Button,Form} from 'react-bootstrap';
import "../../style for pages/style.css";
function Signup() {
  return (
    <section className='backlogin'>
    <div className="color-overlay d-flex
    justify-content-center align-items-center">


    <div>
      <Container>
      <Form>
        <div className='signupfarmer'>
          <Form.Group controlId="form.Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          {/* <form>
          <label>Name : </label>
          <input type="text" placeholder='Enter your name' />
          </form>
        </div> */}
        </div>
        <br/>    
        <div className='signupfarmer'>
        {/* <form>
          <label>Email  : </label>
          <input type="Email" placeholder='Enter your Email' />
        </form> */}
        <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
        </div>  

        <br/>    
        <div className='signupfarmer'> 
        <form>
          <label>Id         : </label>
          <input type="Text-area" placeholder='Enter your FarmerID' />
        </form>
        </div>

        <br/>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Area</Form.Label>
            <Form.Control as="textarea" rows={1} />
        </Form.Group>


        <Form.Group controlId="form.Textarea">
            <Form.Label>Contact_Number</Form.Label>
            <Form.Control as="textarea" rows={1} />
        </Form.Group>

        <Form.Group controlId="form.Textarea">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>


        <Form.Group controlId="form.Textarea">
            <Form.Label>Create a password</Form.Label>
            <Form.Control as="textarea" rows={1} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Farmer" />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Wholesale seller" />
      </Form.Group>



      </Form>
      <Button variant="success" type="submit">
        Sign UP
      </Button>

    
    </Container>
    </div>
    </div>
    </section>
  )
}

export default Signup;

import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function ContactUs() {
  return (
    <>
      <strong>
        <p>Contact Us</p>
      </strong>
      <Form>
       
          <FormGroup>
            <Label for="name">First Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
            />
          </FormGroup>
  
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
          />
        </FormGroup>

        <FormGroup>
          <Label for="message">Message</Label>
          <Input type="text" name="text" id="message" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  )
}

export default ContactUs

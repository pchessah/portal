import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function Newsletter() {
  return (
    <>
      <h4>Get Your News Letter</h4>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="something@idk.cool"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  )
}

export default Newsletter

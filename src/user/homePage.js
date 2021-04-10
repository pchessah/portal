import React from 'react'
import {
  UncontrolledCarousel,
  Card,
  CardDeck,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CardBody,
} from 'reactstrap'
import ContactUs from '../components/contactUs'
import Newsletter from '../components/newsletter'
import TopCourses from '../components/topCourses'
const carouselItems = [
  {
    src:
      'https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    altText: 'Learn Python',
    caption: '',
    header: '',
    key: '1',
  },
  {
    src:
      'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
    altText: 'Learn android',
    caption: '',
    header: '',
    key: '2',
  },
  {
    src:
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    altText: 'Learn Javascript',
    caption: '',
    header: '',
    key: '3',
  },
]

function HomePage() {
  return (
    <>
      <UncontrolledCarousel items={carouselItems} />
      <div className="home-page-container">
        <h4 className="top-courses-title">Top Courses</h4>
        <div className="home-top-courses">
          <TopCourses />
        </div>
        <div className="homepage-info">
          <CardDeck>
            <Card className="homepage-contact">
              <ContactUs />
            </Card>
            <Card className="homepage-newsletter">
              <CardBody>
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
              </CardBody>
              
            </Card>
          </CardDeck>
        </div>
      </div>
    </>
  )
}

export default HomePage

import React from 'react'
import {
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardImgOverlay,
} from 'reactstrap'

function TopCourses() {
  return (
    <>
      <CardDeck>
        <Card inverse className="top-course-card">
          <CardImg
            width="100%"
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Card image cap"
            className="top-courses-img"
          />
          <CardImgOverlay>
            <CardTitle tag="h5">Beginning Python</CardTitle>
          </CardImgOverlay>
        </Card>
        <Card inverse>
          <CardImg
            top
            width="100%"
            src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
            alt="Card image cap"
            className="top-courses-img"
          />
           <CardImgOverlay>
            <CardTitle tag="h5">Web design using html,css and JS</CardTitle>
          </CardImgOverlay>
        </Card>
        <Card inverse>
          <CardImg
            top
            width="100%"
            src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
            alt="Card image cap"
            className="top-courses-img"
          />
           <CardImgOverlay>
            <CardTitle tag="h5">Advanced CSS and Animations</CardTitle>
          </CardImgOverlay>
        </Card>
      </CardDeck>
    </>
  )
}

export default TopCourses

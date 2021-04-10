import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
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
      <UncontrolledCarousel className="home-carousel" items={carouselItems} />
      <div className="homepage-topcourses">Top courses</div>
      <div className="homepage-info">
        <div className="homepage-newsletter">Get Your news letter</div>
        <div className="homepage-contact-us">Contact us</div>
      </div>
    </>
  )
}

export default HomePage

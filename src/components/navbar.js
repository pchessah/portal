import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'

function Navibar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Navbar className="my-navbar" color="light" light expand="md">
        <NavbarBrand href="/">Learning Portal</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="nav-items" isOpen={isOpen} navbar>
          <div className="mover"></div>
          <Nav className="mr-auto nav-links" navbar>
            <NavItem>           
                <Link className="nav-link" to="/">Home</Link>              
            </NavItem>
            <NavItem>           
                <Link className="nav-link" to="/course">Courses</Link>              
            </NavItem>
            <NavItem>           
                <Link className="nav-link" to="/user">User</Link>              
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default Navibar

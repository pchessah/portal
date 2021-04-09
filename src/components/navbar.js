import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/course">Courses</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/user">User</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default Navibar

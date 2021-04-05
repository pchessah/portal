import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
       <Link to="/">Home </Link>
       <Link to="/user">Profile </Link>
       <Link to="/course">Courses </Link>
        </>
    )
}

export default Navbar

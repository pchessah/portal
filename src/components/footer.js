import React from 'react'
import { AiOutlineCopyright, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <>
   
      <div className="my-footer">
      <p>Connect with us: </p> 
        <span>
          <FaFacebook />
        </span>
        <span>
          <AiFillTwitterCircle />
        </span>
        <span>
            <AiFillYoutube/>
        </span>
      </div>
    </>
  )
}

export default Footer

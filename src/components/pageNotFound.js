import React from 'react'
// @ts-ignore
import error404 from '../images/error404.gif'

function PageNotFound() {
  return (
    <div className="error404-img-holder">
      <img className="error404-img" src={error404} alt="error404" />
    </div>
  )
}

export default PageNotFound

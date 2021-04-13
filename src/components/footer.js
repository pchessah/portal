import React from 'react'
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Learning Portal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

function Footer() {
  return (
    <>
      <div className="my-footer">
        <div className="social-icons-footer">
          <p>Connect with us: </p>
          <span>
            <FaFacebook />
          </span>
          <span>
            <AiFillTwitterCircle />
          </span>
          <span>
            <AiFillYoutube />
          </span>
        </div>
        <Box>
          <Copyright />
        </Box>
      </div>
    </>
  )
}

export default Footer

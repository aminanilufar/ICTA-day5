import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h5'>EmpApp</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to='/f'>
            <Button variant="text" sx={{ color: 'white' }} ><h2><u>Form</u></h2></Button>&nbsp;
                  </Link>
                  <Link to='/v'>
            <Button variant="text" sx={{ color: 'white' }}><h2><u>View</u></h2></Button>
                  </Link>
                  </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar

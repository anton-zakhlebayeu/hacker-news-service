import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import Logo from '../../../../assets/icons/y18.gif'
import { LogoBox } from '../Logo/LogoBox.styled'
import NavbarItem from './NavbarItem/NavbarItem'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
            }}
          >
            <LogoBox>
              <img src={Logo} alt='Logo' />
            </LogoBox>
          </Typography>
          <NavbarItem child='Hacker News' color='info' href='/' />
          <NavbarItem child='New' color='secondary' href='/' />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar

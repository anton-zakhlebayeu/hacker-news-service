import React from 'react'
import { Link, Typography } from '@mui/material'
import { NavbarItemProps } from './NavbarItemProps.type'

const NavbarItem = ({ href, color, child }: NavbarItemProps) => {
  return (
    <Typography variant='h6' component='div' sx={{ mr: 2 }} color={color}>
      <Link href={href} underline='none' color='inherit'>
        {child}
      </Link>
    </Typography>
  )
}

export default NavbarItem

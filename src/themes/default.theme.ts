import '../assets/css/Manrope.fonts.css'
import { createTheme } from '@mui/material'

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#ff6600',
    },
    secondary: {
      main: '#f6f6ef',
    },
    info: {
      main: '#000000',
    },
    warning: {
      main: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#353535',
    },
  },
  typography: {
    fontFamily: 'Manrope',
    fontWeightLight: 400,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightBold: 700,
  },
})

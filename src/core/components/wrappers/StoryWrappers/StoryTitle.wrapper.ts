import { styled } from '@mui/material'

export const StoryTitleWrapper = styled(
  'h1',
  {},
)(() => ({
  marginBottom: '5px',
  fontSize: '18px',
  lineHeight: '1.8',
  margin: 0,
  textDecoration: 'none',
  color: '#212121',
  '@media (max-width: 1000px)': {
    fontSize: '16px',
  },
  '@media (max-width: 768px)': {
    fontSize: '13px',
  },
}))

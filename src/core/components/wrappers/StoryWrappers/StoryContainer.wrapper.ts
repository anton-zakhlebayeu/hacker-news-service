import { styled } from '@mui/material'

export const StoryContainerWrapper = styled(
  'div',
  {},
)(() => ({
  maxWidth: '1300px',
  padding: '20px 15px',
  margin: 'auto',
  '@media (max-width: 1000px)': {
    fontSize: '14px',
  },
  '@media (max-width: 768px)': {
    fontSize: '12px',
  },
}))

import { styled } from '@mui/material'

export const StoryWrapper = styled(
  'section',
  {},
)(() => ({
  marginBottom: '20px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #FFFFFF',
  padding: '24px',
  borderRadius: '12px',
  '&:first-of-type': {
    borderTop: 0,
  },
  '&:last-of-type': {
    marginBottom: 0,
  },
}))

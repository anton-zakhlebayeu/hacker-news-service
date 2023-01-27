import { styled } from '@mui/material'

export const StoryMetaElementWrapper = styled(
  'span',
  {},
)(() => ({
  fontWeight: 'bold',
  '@media (max-width: 1000px)': {
    fontSize: '14px',
  },
  '@media (max-width: 768px)': {
    fontSize: '12px',
  },
}))

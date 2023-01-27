import { styled } from '@mui/material'

export const StoryMetaWrapper = styled(
  'div',
  {},
)(() => ({
  fontStyle: 'italic',
  '> span:first-of-type': {
    marginRight: '10px',
  },
  '> span:not(:first-of-type):before': {
    content: '"•"',
    margin: '0 7px',
  },
}))

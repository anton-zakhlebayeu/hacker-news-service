import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import { StoryTitleWrapper } from '../StoryTitle.wrapper'

beforeEach(cleanup)

test('renders the logo component with content', async () => {
  const screen = render(<StoryTitleWrapper data-testid='Test' />)

  await waitFor(() => [
    expect(screen.getByTestId('Test')).toBeTruthy(),
    expect(screen.getByTestId('Test')).toHaveStyle(
      'fontSize: 18px; lineHeight: 1.8; margin: 0; textDecoration: none; color: #212121',
    ),
  ])
})

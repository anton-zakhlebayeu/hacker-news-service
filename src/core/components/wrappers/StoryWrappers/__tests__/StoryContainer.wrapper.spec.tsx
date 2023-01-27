import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import { StoryContainerWrapper } from '../StoryContainer.wrapper'

beforeEach(cleanup)

test('renders the logo component with content', async () => {
  const screen = render(<StoryContainerWrapper data-testid='Test' />)

  await waitFor(() => [
    expect(screen.getByTestId('Test')).toBeTruthy(),
    expect(screen.getByTestId('Test')).toHaveStyle(
      'maxWidth: 1300px; padding: 20px 15px; margin: auto',
    ),
  ])
})

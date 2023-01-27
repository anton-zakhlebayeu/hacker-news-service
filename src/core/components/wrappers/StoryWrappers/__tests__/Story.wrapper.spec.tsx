import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import { StoryWrapper } from '../Story.wrapper'

beforeEach(cleanup)

test('renders the story wrapper with content', async () => {
  const screen = render(<StoryWrapper data-testid='Test' />)

  await waitFor(() => [
    expect(screen.getByTestId('Test')).toBeTruthy(),
    expect(screen.getByTestId('Test')).toHaveStyle(
      'backgroundColor: #FFFFFF; border: 1px solid #FFFFFF; padding: 24px; borderRadius: 12px; borderTop: 0; marginBottom: 0',
    ),
  ])
})

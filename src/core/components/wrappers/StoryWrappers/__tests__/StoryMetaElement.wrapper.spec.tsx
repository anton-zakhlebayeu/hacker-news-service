import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import { StoryMetaElementWrapper } from '../StoryMetaElement.wrapper'

beforeEach(cleanup)

test('renders the logo component with content', async () => {
  const screen = render(<StoryMetaElementWrapper data-testid='Test' />)

  await waitFor(() => [
    expect(screen.getByTestId('Test')).toBeTruthy(),
    expect(screen.getByTestId('Test')).toHaveStyle('fontWeight: bold'),
  ])
})

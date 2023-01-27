import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import { LoadingCircleWrapper } from '../LoadingCircle.wrapper'

beforeEach(cleanup)

test('renders the loading circle wrapper with content', async () => {
  const screen = render(<LoadingCircleWrapper data-testid='Test' />)

  await waitFor(() => [
    expect(screen.getByTestId('Test')).toBeTruthy(),
    expect(screen.getByTestId('Test')).toHaveStyle(
      'display: flex; justify-content: center; align-items: center',
    ),
  ])
})

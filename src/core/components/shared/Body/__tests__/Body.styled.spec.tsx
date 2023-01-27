import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import { Body } from '../Body.styled'

beforeEach(cleanup)

test('renders the body component with content', async () => {
  const screen = render(<Body data-testid='Test' />)

  await waitFor(() => [
    expect(screen.getByTestId('Test')).toBeTruthy(),
    expect(screen.getByTestId('Test')).toHaveStyle('margin-top: 10px'),
  ])
})

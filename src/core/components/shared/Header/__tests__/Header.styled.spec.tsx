import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import { Header } from '../Header.styled'

beforeEach(cleanup)

test('renders the header component with content', async () => {
  const screen = render(<Header data-testid='Test' />)

  await waitFor(() => [
    expect(screen.getByTestId('Test')).toBeTruthy(),
    expect(screen.getByTestId('Test')).toHaveStyle('margin-left: auto; margin-right: auto'),
  ])
})

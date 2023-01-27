import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import Navbar from '../Navbar'

beforeEach(cleanup)

test('renders the navbar component with content', async () => {
  const screen = render(<Navbar />)

  await waitFor(() => [
    expect(screen.getByText('Hacker News')).toBeTruthy(),
    expect(screen.getByText('New')).toBeTruthy(),
    expect(screen.getByText('Hacker News')).toHaveAttribute('href', '/'),
    expect(screen.getByText('New')).toHaveAttribute('href', '/'),
  ])
})

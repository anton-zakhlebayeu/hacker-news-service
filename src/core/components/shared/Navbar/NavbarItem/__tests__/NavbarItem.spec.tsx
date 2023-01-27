import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import NavbarItem from '../NavbarItem'

beforeEach(cleanup)

test('renders the navbar item component with content', async () => {
  const screen = render(<NavbarItem child='Test' color='primary' href='/' />)

  await waitFor(() => [
    expect(screen.getByText('Test')).toBeTruthy(),
    expect(screen.getByText('Test')).toHaveAttribute('href', '/'),
  ])
})

import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import { LogoBox } from '../LogoBox.styled'

beforeEach(cleanup)

test('renders the logo component with content', async () => {
  const screen = render(<LogoBox data-testid='Test' />)

  await waitFor(() => [
    expect(screen.getByTestId('Test')).toBeTruthy(),
    expect(screen.getByTestId('Test')).toHaveStyle(
      'display: flex; flex-grow: 1; align-items: center; border: 1px solid #FFFFFF',
    ),
  ])
})

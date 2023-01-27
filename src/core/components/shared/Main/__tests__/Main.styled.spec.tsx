import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import { Main } from '../Main.styled'

beforeEach(cleanup)

test('renders the logo component with content', async () => {
  const screen = render(<Main data-testid='Test' />)

  await waitFor(() => [
    expect(screen.getByTestId('Test')).toBeTruthy(),
    expect(screen.getByTestId('Test')).toHaveStyle(
      'width: 85%; height: 90%; background-color: #f6f6ef; padding: 24px; border: 1px solid #f6f6ef; border-radius: 12px; margin-left: auto; margin-right: auto',
    ),
  ])
})

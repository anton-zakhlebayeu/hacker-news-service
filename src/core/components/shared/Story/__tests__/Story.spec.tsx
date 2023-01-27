import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import Story from '../Story'
import { singularStory } from '../../../../../__tests__/fixtures/testStory.fixture'
import { storyService } from '../../../../services/Stories/story.service'

beforeEach(() => {
  cleanup()
  jest.resetAllMocks()
})

jest.mock('../../../../services/Stories/story.service.ts')

const mockedStoryService = jest.mocked(storyService)

test('renders the story component with content', async () => {
  mockedStoryService.getStory.mockImplementation(() => Promise.resolve(singularStory))

  const screen = render(<Story storyId={1} />)

  await waitFor(() => [
    expect(screen.getByTestId('story')).toBeTruthy(),
    expect(screen.getByText('Tarnished: Google Responds')).toBeTruthy(),
    expect(screen.getByTestId('story-by').textContent).toEqual('By: Karl Hadwen'),
  ])
})

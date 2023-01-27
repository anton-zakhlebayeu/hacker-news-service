import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import { STORY_INCREMENT } from '../core/constants/InfiniteScroll.constants'
import { useInfiniteScroll } from '../core/hooks/InfiniteScroll/infiniteScroll.hook'
import App from '../App'
import { singularStory, storyIds } from './fixtures/testStory.fixture'
import { storyService } from '../core/services/Stories/story.service'

beforeEach(cleanup)

jest.mock('../core/hooks/InfiniteScroll/infiniteScroll.hook.ts')
jest.mock('../core/Services/Stories/story.service.ts')

const mockedUseInfiniteScroll = jest.mocked(useInfiniteScroll)
const mockedStoryService = jest.mocked(storyService)

test('renders the app component with a story', async () => {
  mockedUseInfiniteScroll.mockImplementation(() => ({ count: STORY_INCREMENT }))
  mockedStoryService.getStory.mockImplementation(() => Promise.resolve(singularStory))
  mockedStoryService.getStoryIds.mockImplementation(() => Promise.resolve(storyIds))

  const screen = render(<App />)
  await waitFor(() => [
    expect(screen.getByText('Tarnished: Google Responds')).toBeTruthy(),
    expect(screen.queryByTestId('story-by')!.textContent).toEqual('By: Karl Hadwen'),
  ])
})

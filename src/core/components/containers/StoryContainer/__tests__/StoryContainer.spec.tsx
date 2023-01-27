import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import { STORY_INCREMENT } from '../../../../constants/InfiniteScroll.constants'
import { useInfiniteScroll } from '../../../../hooks/InfiniteScroll/infiniteScroll.hook'
import StoryContainer from '../StoryContainer'
import { singularStory, storyIds } from '../../../../../__tests__/fixtures/testStory.fixture'
import { storyService } from '../../../../services/Stories/story.service'

beforeEach(cleanup)

jest.mock('../../../../hooks/InfiniteScroll/infiniteScroll.hook.ts')
jest.mock('../../../../services/Stories/story.service.ts')

const mockedUseInfiniteScroll = jest.mocked(useInfiniteScroll)
const mockedStoryService = jest.mocked(storyService)

test('renders the story container with a story', async () => {
  mockedUseInfiniteScroll.mockImplementation(() => ({ count: STORY_INCREMENT }))
  mockedStoryService.getStory.mockImplementation(() => Promise.resolve(singularStory))
  mockedStoryService.getStoryIds.mockImplementation(() => Promise.resolve(storyIds))

  const screen = render(<StoryContainer />)
  await waitFor(() => [
    expect(screen.getByText('Tarnished: Google Responds')).toBeTruthy(),
    expect(screen.queryByTestId('story-by')!.textContent).toEqual('By: Karl Hadwen'),
  ])
})

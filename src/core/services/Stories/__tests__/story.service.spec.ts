import axios from 'axios'
import { storyService } from '../story.service'
import {
  singularStory,
  storyIds,
  emptySingularStory,
} from '../../../../__tests__/fixtures/testStory.fixture'
import { newStoriesUrl, storyUrl } from '../../../constants/HackerAPI.constant'

jest.mock('axios')

describe('HackerNews Api', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('getStory functionality', () => {
    it('requests and gets a story from the HackerNews Api', async () => {
      const mockedAxiosGet = jest.mocked(axios.get)
      const mockedStoryService = jest.mocked(storyService)

      mockedAxiosGet.mockImplementation(() => Promise.resolve({ data: singularStory }))

      const entity = await mockedStoryService.getStory(1)
      expect(mockedAxiosGet).toHaveBeenCalledTimes(1)
      expect(mockedAxiosGet).toHaveBeenCalledWith(`${storyUrl + 1}.json`)
      expect(entity).toEqual(singularStory)
    })

    it('does not retrieve a story from the Api, but handles gracefully', async () => {
      const mockedAxiosGet = jest.mocked(axios.get)
      const mockedStoryService = jest.mocked(storyService)

      mockedAxiosGet.mockImplementation(() => Promise.resolve({ data: emptySingularStory }))

      const entity = await mockedStoryService.getStory(1)
      expect(mockedAxiosGet).toHaveBeenCalledTimes(1)
      expect(mockedAxiosGet).toHaveBeenCalledWith(`${storyUrl + 1}.json`)
      expect(entity).toEqual(emptySingularStory)
    })
  })

  describe('getStoryIds functionality', () => {
    it('requests and gets story ids from the HackerNews Api', async () => {
      const mockedAxiosGet = jest.mocked(axios.get)
      const mockedStoryService = jest.mocked(storyService)

      mockedAxiosGet.mockImplementation(() => Promise.resolve({ data: storyIds }))

      const entity = await mockedStoryService.getStoryIds()
      expect(mockedAxiosGet).toHaveBeenCalledTimes(1)
      expect(mockedAxiosGet).toHaveBeenCalledWith(newStoriesUrl)
      expect(entity).toEqual(storyIds)
    })
  })
})

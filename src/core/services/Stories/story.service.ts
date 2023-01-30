import axios from 'axios'
import { newStoriesUrl, storyUrl } from '../../constants/HackerAPI.constant'

class StoryService {
  getStory = async (storyId: number) => {
    const result = await axios.get(`${storyUrl + storyId}.json`)
    const { id, by, url, time, title } = result.data

    return { id, by, url, time, title }
  }

  getStoryIds = async () => {
    const result = await axios.get(newStoriesUrl)

    return result.data
  }
}

export const storyService = new StoryService()

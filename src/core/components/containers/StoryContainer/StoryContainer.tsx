import React, { useState, useEffect } from 'react'
import Story from '../../../components/shared/Story/Story'
import { StoryContainerWrapper } from '../../wrappers/StoryWrappers/StoryContainer.wrapper'
import { useInfiniteScroll } from '../../../hooks/InfiniteScroll/infiniteScroll.hook'
import { CircularProgress } from '@mui/material'
import { LoadingCircleWrapper } from '../../wrappers/StoryWrappers/LoadingCircle.wrapper'
import { storyService } from '../../../services/Stories/story.service'

const StoryContainer = () => {
  const { count } = useInfiniteScroll()
  const [storyIds, setStoryIds] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    storyService.getStoryIds().then((data) => {
      setStoryIds(data)
      setLoading(false)
    })
  }, [])

  return (
    <StoryContainerWrapper data-test-id='stories-container'>
      {storyIds.slice(0, count).map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
      {loading && (
        <LoadingCircleWrapper>
          <CircularProgress />
        </LoadingCircleWrapper>
      )}
    </StoryContainerWrapper>
  )
}

export default StoryContainer

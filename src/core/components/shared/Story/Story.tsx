/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from 'react'
import { StoryWrapper } from '../../wrappers/StoryWrappers/Story.wrapper'
import { StoryTitleWrapper } from '../../wrappers/StoryWrappers/StoryTitle.wrapper'
import { StoryMetaWrapper } from '../../wrappers/StoryWrappers/StoryMeta.wrapper'
import { StoryMetaElementWrapper } from '../../wrappers/StoryWrappers/StoryMetaElement.wrapper'
import { StoryProps } from './StoryProps.type'
import { StoryType } from '../../../types/story/story'
import { Link } from '@mui/material'
import humanizeDuration from 'humanize-duration'
import { storyService } from '../../../services/Stories/story.service'

const Story = memo(function Story({ storyId }: StoryProps) {
  const [story, setStory] = useState<StoryType>()

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const data = await storyService.getStory(storyId)
        if (data && data.url) {
          setStory(data)
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchStory()
  }, [])

  return story && story.url ? (
    <StoryWrapper data-testid='story'>
      <StoryTitleWrapper>
        <Link href={story.url} underline='none' color='inherit' target='_blank'>
          {story.title}
        </Link>{' '}
        ({new URL(story.url).hostname.replace('www.', '')})
      </StoryTitleWrapper>
      <StoryMetaWrapper>
        <span data-testid='story-by'>
          <StoryMetaElementWrapper>By:</StoryMetaElementWrapper> {story.by}
        </span>
        <span data-testid='story-time'>
          <StoryMetaElementWrapper>Posted:</StoryMetaElementWrapper>{' '}
          {humanizeDuration(new Date().getTime() - story.time * 1000, { round: true })} ago
        </span>
      </StoryMetaWrapper>
    </StoryWrapper>
  ) : null
})

export default Story

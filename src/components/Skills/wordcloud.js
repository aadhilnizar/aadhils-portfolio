import React, { useEffect, useState } from 'react'

import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  const texts = [
    'Python',
    'Typescript',
    'C++',
    'MySQL',
    'Firebase',
    'NodeJS',
    'Express',
    'Git',
    'GitHub',
    'HTML',
    'CSS',
    'JS',
    'C',
    'XML',
    'Angular',
    'Bootstrap',
    'Material UI',
    'Postman',
    'Figma',
    'Word',
    'Excel',
    'MongoDB',
    ''
  ]
  const options = {
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
  }

  useEffect(() => {
    const cloud = TagCloud(container, texts, options)

    // Cleanup function to remove the word cloud before re-rendering
    return () => {
      const existingTagCloud = document.querySelector(container)
      if (existingTagCloud) {
        existingTagCloud.innerHTML = ''
      }
    }
  }, []) // Empty dependency array to run the effect only once

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud

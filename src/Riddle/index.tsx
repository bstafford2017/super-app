import React, { CSSProperties, useEffect, useState } from 'react'
import { getRiddle } from '../Http/client'
import Loader from '../Loader'
import Button from '../Button'
import useFetch from '../Hooks'

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px'
}

const Riddle = () => {
  const [data, isLoading, refresh] = useFetch('/v1/riddles')

  const [showAnswer, setShowAnswer] = useState(false)

  const show = () => {
    setShowAnswer(true)
  }

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return null
  }

  const { question, answer } = data[0]

  return (
    <div>
      <p style={textStyle}>Q: {question}</p>
      {showAnswer && <p style={textStyle}>A: {answer} </p>}
      <Button title='Show answer' disabled={showAnswer} onClick={show} />
      <Button
        title='Generate new'
        onClick={() => {
          refresh({})
          setShowAnswer(false)
        }}
      />
    </div>
  )
}

export default Riddle

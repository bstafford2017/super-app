import React, { CSSProperties, useEffect, useState } from 'react'
import { getTrivia } from '../Http/client'
import Loader from '../Loader'

const textStyle: CSSProperties = {
  color: '#FFF',
  fontSize: '42px'
}

const Trivia = (): JSX.Element => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const response = await getTrivia()
      const { data } = response
      const { question, answer } = data[0]
      setQuestion(question)
      setAnswer(answer)
      setIsLoading(false)
    })()
  }, [])

  const onClick = async () => {
    if (showAnswer) {
      setIsLoading(true)
      const response = await getTrivia()
      const { data } = response
      const { question, answer } = data[0]
      setQuestion(question)
      setAnswer(answer)
      setIsLoading(false)
      setShowAnswer(false)
    } else {
      setShowAnswer(true)
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <p style={textStyle}>Q: {question}</p>
      {showAnswer && <p style={textStyle}>A: {answer} </p>}
    </div>
  )
}

export default Trivia

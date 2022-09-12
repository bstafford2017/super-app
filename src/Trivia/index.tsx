import React, { CSSProperties, useEffect, useState } from 'react'
import { getTrivia } from '../Http/client'
import Loader from '../Loader'
import Button from '../Button'

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

  const show = () => {
    setShowAnswer(true)
  }

  const generate = async () => {
    setIsLoading(true)
    const response = await getTrivia()
    const { data } = response
    const { question, answer } = data[0]
    setQuestion(question)
    setAnswer(answer)
    setIsLoading(false)
    setShowAnswer(false)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <p style={textStyle}>Q: {question}</p>
      {showAnswer && <p style={textStyle}>A: {answer} </p>}
      <Button title='Show answer' disabled={showAnswer} onClick={show} />
      <Button title='Generate new' onClick={generate} />
    </div>
  )
}

export default Trivia

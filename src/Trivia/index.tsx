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

  const onClick = () => {
    setShowAnswer(true)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <p style={{ ...textStyle, cursor: 'pointer' }} onClick={onClick}>
        Q: {question}
      </p>
      {showAnswer && <p style={textStyle}>A: {answer} </p>}
    </>
  )
}

export default Trivia

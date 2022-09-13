import React, { CSSProperties, useEffect, useState } from 'react'
import { getQuote } from '../Http/client'
import Loader from '../Loader'
import Button from '../Button'

const textStyle: CSSProperties = {
  color: '#FFF',
  fontSize: '42px'
}

const Quote = (): JSX.Element => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const response = await getQuote()
      const { data } = response
      const { quote, author } = data[0]
      setQuote(quote)
      setAuthor(author)
      setIsLoading(false)
    })()
  }, [])

  const generate = async () => {
    setIsLoading(true)
    const response = await getQuote()
    const { data } = response
    const { quote, author } = data[0]
    setQuote(quote)
    setAuthor(author)
    setIsLoading(false)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <p style={textStyle}>"{quote}"</p>
      <p style={textStyle}>-{author}</p>
      <Button title='Generate new' onClick={generate} />
    </div>
  )
}

export default Quote

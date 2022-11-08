import React, { CSSProperties, useEffect, useState } from 'react'
import { getQuote } from '../Http/client'
import Loader from '../Loader'
import Button from '../Button'
import useFetch from '../Hooks'

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px'
}

const Quote = () => {
  const [data, isLoading, refresh] = useFetch('/v1/quotes')

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return null
  }

  const { quote, author } = data[0]

  return (
    <div>
      <p style={textStyle}>"{quote}"</p>
      <p style={textStyle}>-{author}</p>
      <Button title='Generate new' onClick={() => refresh({})} />
    </div>
  )
}

export default Quote

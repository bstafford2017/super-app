import React, { CSSProperties, useEffect, useState } from 'react'
import { getJoke } from '../Http/client'
import Loader from '../Loader'

const textStyle: CSSProperties = {
  color: '#FFF',
  fontSize: '42px'
}

const Joke = (): JSX.Element => {
  const [joke, setJoke] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const response = await getJoke()
      const { data } = response
      const { joke } = data[0]
      setJoke(joke)
      setIsLoading(false)
    })()
  }, [])

  const onClick = async () => {
    setIsLoading(true)
    const response = await getJoke()
    const { data } = response
    const { joke } = data[0]
    setJoke(joke)
    setIsLoading(false)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <p style={textStyle}>{joke}</p>
    </div>
  )
}

export default Joke

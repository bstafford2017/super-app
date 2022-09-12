import React, { CSSProperties, useEffect, useState } from 'react'
import { getJoke } from '../Http/client'
import Loader from '../Loader'
import Button from '../Button'

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

  const generate = async () => {
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
    <div>
      <p style={textStyle}>{joke}</p>
      <Button title='Generate new' onClick={generate} />
    </div>
  )
}

export default Joke

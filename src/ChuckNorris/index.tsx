import React, { CSSProperties } from 'react'
import useFetch from '../Hooks'
import Loader from '../Loader'
import Button from '../Button'

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px'
}

const ChuckNorris = () => {
  const [data, isLoading, refresh] = useFetch('/v1/chucknorris')

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return null
  }

  const { joke } = data

  return (
    <div>
      <p style={textStyle}>{joke}</p>
      <Button
        title='Generate new'
        onClick={() => {
          refresh({})
        }}
      />
    </div>
  )
}

export default ChuckNorris

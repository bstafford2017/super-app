import React, { CSSProperties } from 'react'
import useFetch from '../Hooks'
import Loader from '../Loader'
import Button from '../Button'

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px'
}

const DadJoke = () => {
  const [data, isLoading, refresh] = useFetch('/v1/dadjokes?limit=1')

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return null
  }

  const firstJoke = data[0] || {}
  const { joke } = firstJoke

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

export default DadJoke

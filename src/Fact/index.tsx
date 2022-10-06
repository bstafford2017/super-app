import React, { CSSProperties, useEffect, useState } from 'react'
import { getFact } from '../Http/client'
import Loader from '../Loader'
import Button from '../Button'
import useFetch from '../Hooks'

const textStyle: CSSProperties = {
  color: '#FFF',
  fontSize: '42px'
}

const Fact = () => {
  const [data, isLoading, refresh] = useFetch('/v1/facts')

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return null
  }

  const { fact } = data[0]

  return (
    <div>
      <p style={textStyle}>{fact}</p>
      <Button title='Generate new' onClick={() => refresh({})} />
    </div>
  )
}

export default Fact

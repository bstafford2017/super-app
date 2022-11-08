import React, { CSSProperties } from 'react'
import useFetch from '../Hooks'
import Loader from '../Loader'
import Button from '../Button'

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px'
}

const BucketList = () => {
  const [data, isLoading, refresh] = useFetch('/v1/bucketlist')

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return null
  }

  const { item } = data

  return (
    <div>
      <p style={textStyle}>{item}</p>
      <Button
        title='Generate new'
        onClick={() => {
          refresh({})
        }}
      />
    </div>
  )
}

export default BucketList

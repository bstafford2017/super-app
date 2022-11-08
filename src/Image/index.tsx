import React, { CSSProperties } from 'react'
import useFetch from '../Hooks'
import Loader from '../Loader'
import Button from '../Button'

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px'
}

const Image = () => {
  const [data, isLoading, refresh] = useFetch('/v1/randomimage')

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return null
  }

  return (
    <div>
      <img src={'data:image/png;base64,' + data} style={{ display: 'block' }} />
      <Button
        title='Generate new'
        onClick={() => {
          refresh({})
        }}
      />
    </div>
  )
}

export default Image

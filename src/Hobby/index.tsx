import React, { CSSProperties } from 'react'
import useFetch from '../Hooks'
import Loader from '../Loader'
import Button from '../Button'

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
  display: 'block'
}

const Hobby = () => {
  const [data, isLoading, refresh] = useFetch('/v1/hobbies', {
    params: {
      category: 'general'
    }
  })

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return null
  }

  const { hobby, link } = data

  return (
    <div>
      <a href={link} style={textStyle}>
        {hobby}
      </a>
      <Button
        title='Generate new'
        onClick={() => {
          refresh({})
        }}
      />
    </div>
  )
}

export default Hobby

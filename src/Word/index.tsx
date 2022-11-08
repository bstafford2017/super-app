import React, { CSSProperties, useState } from 'react'
import useFetch from '../Hooks'
import Loader from '../Loader'
import Button from '../Button'
import axios from '../Http/axios'

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px'
}

const Word = () => {
  const [data, isLoading, refresh] = useFetch('/v1/randomword')

  const [definition, setDefinition] = useState('')
  const [showDefinition, setShowDefinition] = useState(false)

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return null
  }

  const { word } = data

  const getDefinition = async () => {
    try {
      const {
        data: { definition }
      } = await axios.get('https://api.api-ninjas.com/v1/dictionary', {
        params: {
          word
        }
      })
      setDefinition(definition)
      setShowDefinition(true)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <p style={textStyle}>{word}</p>
      {showDefinition && <p style={textStyle}>{definition}</p>}
      <Button
        title='Define'
        onClick={async () => {
          await getDefinition()
          setShowDefinition(true)
        }}
      />
      <Button
        title='Generate new'
        onClick={() => {
          refresh({})
          setShowDefinition(false)
        }}
      />
    </div>
  )
}

export default Word

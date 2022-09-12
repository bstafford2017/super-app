import React, { CSSProperties, useEffect, useState } from 'react'
import { getFact } from '../Http/client'
import Loader from '../Loader'

const textStyle: CSSProperties = {
  color: '#FFF',
  fontSize: '42px'
}

const Fact = (): JSX.Element => {
  const [fact, setFact] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const response = await getFact()
      const { data } = response
      const { fact } = data[0]
      setFact(fact)
      setIsLoading(false)
    })()
  }, [])

  const onClick = async () => {
    setIsLoading(true)
    const response = await getFact()
    const { data } = response
    const { fact } = data[0]
    setFact(fact)
    setIsLoading(false)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <p style={textStyle}>{fact}</p>
    </div>
  )
}

export default Fact
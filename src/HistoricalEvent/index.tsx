import React, { CSSProperties, useEffect, useState } from 'react'
import { getHistoricalEvent } from '../Http/client'
import Loader from '../Loader'
import Button from '../Button'

const textStyle: CSSProperties = {
  color: '#FFF',
  fontSize: '42px'
}

const HistoricalEvent = (): JSX.Element => {
  const [event, setEvent] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const response = await getHistoricalEvent()
      const { data } = response
      const { event } = data[0]
      setEvent(event)
      setIsLoading(false)
    })()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <p style={textStyle}>{event}</p>
    </div>
  )
}

export default HistoricalEvent

import React, { CSSProperties, useEffect, useState } from 'react'
import { getHistoricalEvent } from '../Http/client'
import Loader from '../Loader'

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

  return <p style={textStyle}>{event}</p>
}

export default HistoricalEvent

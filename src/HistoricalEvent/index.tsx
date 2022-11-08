import React, { CSSProperties, useEffect, useState } from 'react'
import { getHistoricalEvent } from '../Http/client'
import Loader from '../Loader'
import Button from '../Button'
import useFetch from '../Hooks'

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px'
}

const HistoricalEvent = () => {
  const [data, loading] = useFetch('/v1/historicalevents', {
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  })

  if (loading) {
    return <Loader />
  }

  if (!data) {
    return null
  }

  const events = data
  const mostRecentEvent = events[events.length - 1]
  const { event, year } = mostRecentEvent

  if (!event) {
    return (
      <div>
        <p style={textStyle}>No historical events today</p>
      </div>
    )
  }

  return (
    <div>
      <p style={textStyle}>
        {year}: {event}
      </p>
    </div>
  )
}

export default HistoricalEvent

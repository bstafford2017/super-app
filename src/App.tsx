import React, { CSSProperties, useEffect, useState } from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

import './App.css'
import './index.css'

const App = (): JSX.Element => {
  const textStyle: CSSProperties = {
    fontFamily: 'Open Sans',
    color: '#FFF',
    fontSize: '42px'
  }

  const containerStyle: CSSProperties = {
    cursor: 'pointer'
  }

  const [fact, setFact] = useState('')
  const [loading, setLoading] = useState(true)

  const getFact = async (): Promise<void> => {
    setLoading(true)
    const resJSON = await fetch('https://api.api-ninjas.com/v1/facts', {
      headers: {
        "X-Api-Key": "f/Lbqc8xujCtqRs8bZgXlA==xWx0MnDFYDiRDCo7"
      }
    })
    const facts = await resJSON.json()
    const { fact } = facts[0]
    setFact(fact)
    setLoading(false)
  }

  useEffect(() => {
    getFact()
  }, [])

  return (
    <div className='App' style={containerStyle} onClick={getFact}>
      <header className='App-header'>
        {loading ? (
          <ClimbingBoxLoader
            color='#FFF'
            loading={loading}
            size={15}
          />
        ) : (
          <p style={textStyle}>{fact}</p>
        )}
      </header>
    </div>
  )
}

export default App

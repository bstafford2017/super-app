import './App.css'
import { useEffect, useState } from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const App = () => {
  const textStyle = {
    fontFamily: 'Open Sans',
    color: '#FFF',
    fontSize: '42px'
  }

  const containerStyle = {
    cursor: 'pointer'
  }

  const loadingStyle = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red'
  }

  const [fact, setFact] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const resJSON = await fetch('https://asli-fun-fact-api.herokuapp.com')
      const { data } = await resJSON.json()
      const { fact } = data
      setFact(fact)
      setLoading(false)
    })()
  }, [])

  return (
    <div className='App' style={containerStyle} onClick={getFact}>
      <header className='App-header'>
        {loading ? (
          <ClimbingBoxLoader
            color='#FFF'
            style={loadingStyle}
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

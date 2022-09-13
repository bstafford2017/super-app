import React, { CSSProperties, useState } from 'react'
import Fact from './Fact'
import Trivia from './Trivia'
import Riddle from './Riddle'
import Joke from './Joke'
import Quote from './Quote'
import Link from './Link'
import HistoricalEvent from './HistoricalEvent'

import './App.css'
import './index.css'

const containerStyle: CSSProperties = {
  cursor: 'pointer'
}

enum Type {
  FACT,
  TRIVIA,
  RIDDLE,
  HISTORICAL_EVENT,
  JOKE,
  QUOTE
}

const App = (): JSX.Element => {
  const [type, setType] = useState(Type.FACT)

  return (
    <div className='App'>
      <div style={{ display: 'flex' }}>
        <Link
          text='Fact'
          active={type === Type.FACT}
          onClick={() => setType(Type.FACT)}
        />
        <Link
          text='Trivia'
          active={type === Type.TRIVIA}
          onClick={() => setType(Type.TRIVIA)}
        />
        <Link
          text='Riddle'
          active={type === Type.RIDDLE}
          onClick={() => setType(Type.RIDDLE)}
        />
        <Link
          text='Joke'
          active={type === Type.JOKE}
          onClick={() => setType(Type.JOKE)}
        />
        <Link
          text='Quote'
          active={type === Type.QUOTE}
          onClick={() => setType(Type.QUOTE)}
        />
        <Link
          text="Today's Event"
          active={type === Type.HISTORICAL_EVENT}
          onClick={() => setType(Type.HISTORICAL_EVENT)}
        />
      </div>
      <header className='App-header'>
        <div style={{ margin: '30px' }}>
          {type === Type.FACT && <Fact />}
          {type === Type.TRIVIA && <Trivia />}
          {type === Type.RIDDLE && <Riddle />}
          {type === Type.JOKE && <Joke />}
          {type === Type.QUOTE && <Quote />}
          {type === Type.HISTORICAL_EVENT && <HistoricalEvent />}
        </div>
      </header>
    </div>
  )
}

export default App

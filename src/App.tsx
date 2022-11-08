import React, { CSSProperties, useState } from 'react'
import Fact from './Fact'
import Trivia from './Trivia'
import Riddle from './Riddle'
import Joke from './Joke'
import Quote from './Quote'
import Link from './Link'
import Word from './Word'
import BucketList from './BucketList'
import Hobby from './Hobby'
import Image from './Image'
import HistoricalEvent from './HistoricalEvent'
import { BackgroundContext } from './Contexts'

import './App.css'
import './index.css'

const containerStyle: CSSProperties = {
  cursor: 'pointer'
}

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px'
}

enum Type {
  NONE,
  FACT,
  TRIVIA,
  RIDDLE,
  HISTORICAL_EVENT,
  JOKE,
  QUOTE,
  WORD,
  IMAGE,
  BUCKET_LIST,
  HOBBY
}

const backgroundColors = [
  '#F8B195',
  '#F67280',
  '#C06C84',
  '#6C5B7B',
  '#0049B7',
  '#A7226E',
  '#547980'
]

const backgroundColor = backgroundColors[Math.floor(Math.random() * 7)]

const App = (): JSX.Element => {
  const [type, setType] = useState(Type.NONE)

  return (
    <BackgroundContext.Provider value={backgroundColor}>
      <div
        className='App'
        style={{
          backgroundColor
        }}
      >
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
            text='Word'
            active={type === Type.WORD}
            onClick={() => setType(Type.WORD)}
          />
          <Link
            text='Image'
            active={type === Type.IMAGE}
            onClick={() => setType(Type.IMAGE)}
          />
          <Link
            text='Bucket List'
            active={type === Type.BUCKET_LIST}
            onClick={() => setType(Type.BUCKET_LIST)}
          />
          <Link
            text='Hobby'
            active={type === Type.HOBBY}
            onClick={() => setType(Type.HOBBY)}
          />
          <Link
            text="Today's Event"
            active={type === Type.HISTORICAL_EVENT}
            onClick={() => setType(Type.HISTORICAL_EVENT)}
          />
        </div>
        <header className='App-header'>
          <div style={{ margin: '30px' }}>
            {type === Type.NONE && (
              <div>
                <p style={textStyle}>
                  <i>Please select an option above</i>
                </p>
              </div>
            )}
            {type === Type.FACT && <Fact />}
            {type === Type.TRIVIA && <Trivia />}
            {type === Type.RIDDLE && <Riddle />}
            {type === Type.JOKE && <Joke />}
            {type === Type.QUOTE && <Quote />}
            {type === Type.WORD && <Word />}
            {type === Type.IMAGE && <Image />}
            {type === Type.BUCKET_LIST && <BucketList />}
            {type === Type.HOBBY && <Hobby />}
            {type === Type.HISTORICAL_EVENT && <HistoricalEvent />}
          </div>
        </header>
      </div>
    </BackgroundContext.Provider>
  )
}

export default App

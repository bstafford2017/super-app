import React, { CSSProperties } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Fact from './Fact'
import Trivia from './Trivia'
import Riddle from './Riddle'
import Link from './Link'
import BucketList from './BucketList'
import Hobby from './Hobby'
import Image from './Image'
import HistoricalEvent from './HistoricalEvent'
import ChuckNorris from './ChuckNorris'
import DadJoke from './DadJoke'
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
  return (
    <BrowserRouter>
      <BackgroundContext.Provider value={backgroundColor}>
        <div
          className='App'
          style={{
            backgroundColor
          }}
        >
          <div style={{ display: 'flex' }}>
            <Link to='/super-app/fact' text='Fact' />
            <Link to='/super-app/trivia' text='Trivia' />
            <Link to='/super-app/riddle' text='Riddle' />
            <Link to='/super-app/image' text='Image' />
            <Link to='/super-app/bucket' text='Bucket List' />
            <Link to='/super-app/chuck' text='Chuck Norris' />
            <Link to='/super-app/joke' text='Dad Joke' />
            <Link to='/super-app/hobby' text='Hobby' />
            <Link to='/super-app/event' text="Today's Event" />
          </div>
          <header className='App-header'>
            <div style={{ margin: '30px' }}>
              <Routes>
                <Route path='/super-app/fact' element={<Fact />} />
                <Route path='/super-app/trivia' element={<Trivia />} />
                <Route path='/super-app/riddle' element={<Riddle />} />
                <Route path='/super-app/image' element={<Image />} />
                <Route path='/super-app/bucket' element={<BucketList />} />
                <Route path='/super-app/chuck' element={<ChuckNorris />} />
                <Route path='/super-app/joke' element={<DadJoke />} />
                <Route path='/super-app/hobby' element={<Hobby />} />
                <Route path='/super-app/event' element={<HistoricalEvent />} />
                <Route
                  path='*'
                  element={
                    <div>
                      <p style={textStyle}>
                        <i>Please select an option above</i>
                      </p>
                    </div>
                  }
                />
              </Routes>
            </div>
          </header>
        </div>
      </BackgroundContext.Provider>
    </BrowserRouter>
  )
}

export default App

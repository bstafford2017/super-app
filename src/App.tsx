import React, { CSSProperties } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Fact from './Fact'
import Trivia from './Trivia'
import Riddle from './Riddle'
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
            <Link to='/fact-app/fact' text='Fact' />
            <Link to='/fact-app/trivia' text='Trivia' />
            <Link to='/fact-app/riddle' text='Riddle' />
            <Link to='/fact-app/quote' text='Quote' />
            <Link to='/fact-app/word' text='Word' />
            <Link to='/fact-app/image' text='Image' />
            <Link to='/fact-app/bucket' text='Bucket List' />
            <Link to='/fact-app/hobby' text='Hobby' />
            <Link to='/fact-app/event' text="Today's Event" />
          </div>
          <header className='App-header'>
            <div style={{ margin: '30px' }}>
              <Routes>
                <Route
                  path='/'
                  element={
                    <div>
                      <p style={textStyle}>
                        <i>Please select an option above</i>
                      </p>
                    </div>
                  }
                />
                <Route path='/fact-app/fact' element={<Fact />} />
                <Route path='/fact-app/trivia' element={<Trivia />} />
                <Route path='/fact-app/riddle' element={<Riddle />} />
                <Route path='/fact-app/quote' element={<Quote />} />
                <Route path='/fact-app/word' element={<Word />} />
                <Route path='/fact-app/image' element={<Image />} />
                <Route path='/fact-app/bucket' element={<BucketList />} />
                <Route path='/fact-app/hobby' element={<Hobby />} />
                <Route path='/fact-app/event' element={<HistoricalEvent />} />
              </Routes>
            </div>
          </header>
        </div>
      </BackgroundContext.Provider>
    </BrowserRouter>
  )
}

export default App

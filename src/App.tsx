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
            <Link to='/fact' text='Fact' />
            <Link to='/trivia' text='Trivia' />
            <Link to='/riddle' text='Riddle' />
            <Link to='/quote' text='Quote' />
            <Link to='/word' text='Word' />
            <Link to='/image' text='Image' />
            <Link to='/bucket' text='Bucket List' />
            <Link to='/hobby' text='Hobby' />
            <Link to='/event' text="Today's Event" />
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
                <Route path='/fact' element={<Fact />} />
                <Route path='/trivia' element={<Trivia />} />
                <Route path='/riddle' element={<Riddle />} />
                <Route path='/quote' element={<Quote />} />
                <Route path='/word' element={<Word />} />
                <Route path='/image' element={<Image />} />
                <Route path='/bucket' element={<BucketList />} />
                <Route path='/hobby' element={<Hobby />} />
                <Route path='/event' element={<HistoricalEvent />} />
              </Routes>
            </div>
          </header>
        </div>
      </BackgroundContext.Provider>
    </BrowserRouter>
  )
}

export default App

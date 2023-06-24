import React, { CSSProperties } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Fact from './Fact';
import Trivia from './Trivia';
import Riddle from './Riddle';
import Link from './Link';
import BucketList from './BucketList';
import Hobby from './Hobby';
import Image from './Image';
import HistoricalEvent from './HistoricalEvent';
import DadJoke from './DadJoke';
import Weather from './Weather';
import AirQuality from './AirQuality';
import { BackgroundContext } from './Contexts';

import './App.css';
import './index.css';

const containerStyle: CSSProperties = {
  cursor: 'pointer',
};

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
};

const backgroundColors = [
  '#F8B195',
  '#F67280',
  '#C06C84',
  '#6C5B7B',
  '#0049B7',
  '#A7226E',
  '#547980',
];

const backgroundColor = backgroundColors[Math.floor(Math.random() * 7)];

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <BackgroundContext.Provider value={backgroundColor}>
        <div
          className="App"
          style={{
            backgroundColor,
          }}
        >
          <div style={{ display: 'flex' }}>
            <Link to="/weather" text="Weather" />
            <Link to="/air" text="Air Quality" />
            <Link to="/fact" text="Fact" />
            <Link to="/trivia" text="Trivia" />
            <Link to="/riddle" text="Riddle" />
            <Link to="/image" text="Image" />
            <Link to="/bucket" text="Bucket List" />
            <Link to="/joke" text="Dad Joke" />
            <Link to="/hobby" text="Hobby" />
            <Link to="/event" text="Event" />
          </div>
          <header className="App-header">
            <div style={{ margin: '30px' }}>
              <Routes>
                <Route path="/weather" element={<Weather />} />
                <Route path="/air" element={<AirQuality />} />
                <Route path="/fact" element={<Fact />} />
                <Route path="/trivia" element={<Trivia />} />
                <Route path="/riddle" element={<Riddle />} />
                <Route path="/image" element={<Image />} />
                <Route path="/bucket" element={<BucketList />} />
                <Route path="/joke" element={<DadJoke />} />
                <Route path="/hobby" element={<Hobby />} />
                <Route path="/event" element={<HistoricalEvent />} />
                <Route
                  path="*"
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
  );
};

export default App;

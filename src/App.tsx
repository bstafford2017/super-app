import React, { CSSProperties } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Fact from './Fact';
import Trivia from './Trivia';
import Riddle from './Riddle';
import Link from './Link';
import BucketList from './BucketList';
import Hobby from './Hobby';
import Image from './Image';
import DadJoke from './DadJoke';
import Weather from './Weather';
import AirQuality from './AirQuality';
import Word from './Word';
import { BackgroundContext } from './Contexts';

import './App.css';
import './index.css';
import { preFetch } from './Http/client';

const randomRgbColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const containerStyle: CSSProperties = {
  cursor: 'pointer',
};

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
};

const backgroundColor = randomRgbColor();

(async () => {
  await preFetch();
})();

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <BackgroundContext.Provider value={backgroundColor}>
        <div
          className="App"
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            background:
              'linear-gradient(180deg, rgba(255,122,113,1) 0%, rgba(250,152,110,1) 100%)',
          }}
        >
          <div style={{ display: 'flex' }}>
            <Link to="/weather" text="Weather" />
            <Link to="/air" text="Air Quality" />
            <Link to="/fact" text="Fact" />
            <Link to="/trivia" text="Trivia" />
            <Link to="/riddle" text="Riddle" />
            <Link to="/image" text="Image" />
            <Link to="/word" text="Word" />
            <Link to="/bucket" text="Bucket List" />
            <Link to="/joke" text="Dad Joke" />
            <Link to="/hobby" text="Hobby" />
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
                <Route path="/word" element={<Word />} />
                <Route path="/bucket" element={<BucketList />} />
                <Route path="/joke" element={<DadJoke />} />
                <Route path="/hobby" element={<Hobby />} />
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

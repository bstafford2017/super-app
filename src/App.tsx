import React, { CSSProperties } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Fact from './Fact';
import Trivia from './Trivia';
import Riddle from './Riddle';
import Link from './Link';
import BucketList from './BucketList';
import Hobby from './Hobby';
import Image from './Image';
import DadJoke from './DadJoke';
import Weather from './Weather';
import Word from './Word';
import NationalToday from './NationalToday';
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

const Container = styled.div`
  cursor: pointer;
`;

const Text = styled.p`
  color: white;
  font-size: 42px;
`;

const backgroundColor = randomRgbColor();

const GlobalStyle = createGlobalStyle`
  body {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: linear-gradient(
      180deg,
      rgba(255, 122, 113, 1) 0%,
      rgba(250, 152, 110, 1) 100%
    );
  }
`;

(async () => {
  await preFetch();
})();

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <BackgroundContext.Provider value={backgroundColor}>
        <GlobalStyle />
        <div className="App">
          <div style={{ display: 'flex' }}>
            <Link to="/weather" text="Weather" />
            <Link to="/fact" text="Fact" />
            <Link to="/trivia" text="Trivia" />
            <Link to="/riddle" text="Riddle" />
            <Link to="/image" text="Image" />
            <Link to="/word" text="Word" />
            <Link to="/bucket" text="Bucket List" />
            <Link to="/joke" text="Dad Joke" />
            <Link to="/hobby" text="Hobby" />
            <Link to="/national-today" text="National Today" />
          </div>
          <main className="App-header">
            <div style={{ marginTop: '10px' }}>
              <Routes>
                <Route path="/weather" element={<Weather />} />
                <Route path="/fact" element={<Fact />} />
                <Route path="/trivia" element={<Trivia />} />
                <Route path="/riddle" element={<Riddle />} />
                <Route path="/image" element={<Image />} />
                <Route path="/word" element={<Word />} />
                <Route path="/bucket" element={<BucketList />} />
                <Route path="/joke" element={<DadJoke />} />
                <Route path="/hobby" element={<Hobby />} />
                <Route path="/national-today" element={<NationalToday />} />
                <Route
                  path="*"
                  element={
                    <div>
                      <Text>
                        <i>Please select an option above</i>
                      </Text>
                    </div>
                  }
                />
              </Routes>
            </div>
          </main>
        </div>
      </BackgroundContext.Provider>
    </BrowserRouter>
  );
};

export default App;

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
import Quote from './Quote';
import News from './News';
import Gif from './Gif';
import Advice from './Advice';
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

const AppWrapper = styled.div``;

const backgroundColor = randomRgbColor();

(async () => {
  await preFetch();
})();

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <BackgroundContext.Provider value={backgroundColor}>
        <AppWrapper className="App">
          <div style={{ display: 'flex' }}>
            <Link to="/fact" text="Fact" />
            <Link to="/trivia" text="Trivia" />
            <Link to="/riddle" text="Riddle" />
            <Link to="/image" text="Image" />
            <Link to="/bucket" text="Bucket List" />
            <Link to="/joke" text="Dad Joke" />
            <Link to="/hobby" text="Hobby" />
            <Link to="/ron-quote" text="Ron Quote" />
            <Link to="/advice" text="Advice" />
            <Link to="/gif" text="Gif" />
            <Link to="/news" text="News" />
            <Link to="/national-today" text="National Today" />
          </div>
          <main className="App-header">
            <div style={{ marginTop: '10px' }}>
              <Routes>
                <Route path="/fact" element={<Fact />} />
                <Route path="/trivia" element={<Trivia />} />
                <Route path="/riddle" element={<Riddle />} />
                <Route path="/image" element={<Image />} />
                <Route path="/bucket" element={<BucketList />} />
                <Route path="/joke" element={<DadJoke />} />
                <Route path="/hobby" element={<Hobby />} />
                <Route path="/ron-quote" element={<Quote />} />
                <Route path="/advice" element={<Advice />} />
                <Route path="/gif" element={<Gif />} />
                <Route path="/news" element={<News />} />
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
        </AppWrapper>
      </BackgroundContext.Provider>
    </BrowserRouter>
  );
};

export default App;

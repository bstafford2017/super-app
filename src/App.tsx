import React, { CSSProperties, useEffect, useState } from 'react';
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
import NationalToday from './NationalToday';
import Login from './Login';
import AuthRoute from './AuthRoute';
import { authStatus, preFetch } from './Http/client';
import Loader from './Loader';

import './App.css';
import './index.css';

const containerStyle: CSSProperties = {
  cursor: 'pointer',
};

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px',
};

// (async () => {
//   await preFetch();
// })();

const App = (): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        await authStatus();
        setIsAuthenticated(true);
      } catch (e) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    })();
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      {isLoading && <Loader />}
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
          {!isAuthenticated ? (
            <Link to="/" text="Home" />
          ) : (
            <>
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
              <Link to="/national-today" text="National Today" />
            </>
          )}
        </div>
        <header className="App-header">
          <div style={{ margin: '30px' }}>
            <Routes>
              <Route
                path="/"
                element={
                  <Login
                    setIsAuthenticated={setIsAuthenticated}
                    setIsLoading={setIsLoading}
                  />
                }
              />
              <Route
                path="/weather"
                element={
                  <AuthRoute isAuthenticated={isAuthenticated}>
                    <Weather />
                  </AuthRoute>
                }
              />
              <Route
                path="/air"
                element={
                  <AuthRoute isAuthenticated={isAuthenticated}>
                    <AirQuality />
                  </AuthRoute>
                }
              />
              <Route
                path="/fact"
                element={
                  <AuthRoute isAuthenticated={isAuthenticated}>
                    <Fact />
                  </AuthRoute>
                }
              />
              <Route
                path="/trivia"
                element={
                  <AuthRoute isAuthenticated={isAuthenticated}>
                    <Trivia />
                  </AuthRoute>
                }
              />
              <Route
                path="/riddle"
                element={
                  <AuthRoute isAuthenticated={isAuthenticated}>
                    <Riddle />
                  </AuthRoute>
                }
              />
              <Route
                path="/image"
                element={
                  <AuthRoute isAuthenticated={isAuthenticated}>
                    <Image />
                  </AuthRoute>
                }
              />
              <Route
                path="/word"
                element={
                  <AuthRoute isAuthenticated={isAuthenticated}>
                    <Word />
                  </AuthRoute>
                }
              />
              <Route
                path="/bucket"
                element={
                  <AuthRoute isAuthenticated={isAuthenticated}>
                    <BucketList />
                  </AuthRoute>
                }
              />
              <Route
                path="/joke"
                element={
                  <AuthRoute isAuthenticated={isAuthenticated}>
                    <DadJoke />
                  </AuthRoute>
                }
              />
              <Route
                path="/hobby"
                element={
                  <AuthRoute isAuthenticated={isAuthenticated}>
                    <Hobby />
                  </AuthRoute>
                }
              />
              <Route
                path="/national-today"
                element={
                  <AuthRoute isAuthenticated={isAuthenticated}>
                    <NationalToday />
                  </AuthRoute>
                }
              />
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
    </BrowserRouter>
  );
};

export default App;

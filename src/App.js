import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CryptoContainer from './components/CryptoContainer';
import CryptoDetails from './components/CryptoDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CryptoContainer />} />
      </Routes>
    </div>
  );
}

export default App;

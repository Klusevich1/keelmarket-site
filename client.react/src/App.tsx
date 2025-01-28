import React from 'react';
import './resources/css/App.css';
import { Header } from './views/components/Header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './views/pages/HomePage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
}

export default App;

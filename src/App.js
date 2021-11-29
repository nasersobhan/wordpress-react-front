

import React, { } from 'react';

import Home from './components/Home';
import SinglePost from './components/SinglePost';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/:slug" element={<SinglePost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
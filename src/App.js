

import React, { } from 'react';

import Home from './components/Home';
import AboutMe from './components/pages/About-me'
import ContactMe from './components/pages/Contact-me'
import MyClients from './components/pages/My-Clients'
import SinglePost from './components/SinglePost';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me-for-hiring" element={<ContactMe />} />
        <Route path="/who-are-my-clients" element={<MyClients />} />
        <Route exact path="/:slug" element={<SinglePost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import LandingPage from './component/landingPage';
import PostViewPage from './component/postViewPage';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/post' element={<PostViewPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

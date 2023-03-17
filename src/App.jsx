import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Content } from './components/Content';
import { Create } from './components/Create';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';

function App() {
  
  return (
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Content />}></Route>
          <Route path='/create' element={<Create />}></Route>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;

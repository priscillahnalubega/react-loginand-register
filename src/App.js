import React from 'react';
import  Navbar from'./components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home'

function App() {

  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
    </Router>
  );
}

export default App;

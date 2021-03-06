import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Works from './components/pages/Works'


function App() {
  return (
  <>
  <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/works' component={Works} />
      <Route path='/contact' component={Contact} />
    </Switch>
  </Router>
  </>
  );
}

export default App;

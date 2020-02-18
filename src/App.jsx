import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Router, Switch,Route, Link, browserHistory, IndexRoute } from 'react-router'
import Javascript from './components/javascript';
import Angular from './components/angular';
import Reacts from './components/reacts';
import Home from './components/Home';
import Node from './components/Node';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch >
      <Route path = "/" component = {Home} />
          <Route path = "/javascript" component = {Javascript} />
          <Route path = "/node" component = {Node} />
          <Route path = "/angular" component = {Angular} />
          <Route path = "/react" component = {Reacts} />
        
    </Switch>
      <Footer />
    </div>
  );
}

export default App;

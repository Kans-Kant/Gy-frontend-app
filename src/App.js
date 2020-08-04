import React from 'react';
import {BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';


const App = props => (
	<Router>
	  <Switch>
      <Header />
    </Switch>
    <Footer/>
  </Router>
);

export default App;

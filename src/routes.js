import React from 'react';
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";

import Home from './components/pages/Home';


const routes = (
	<Switch>
    <Route exact path="/" component={Home}/> 
  </Switch>
);

export default routes;
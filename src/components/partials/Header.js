import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import routes from '../../routes';

export default function Header(props) {
  
  const [menu, setMenu] = React.useState(false);

  const toggleMenu= () =>{
    setMenu(!menu );
  }

  const show = (menu) ? "show" : "" ;

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Trending</a>
        <button className="navbar-toggler" type="button" onClick={ toggleMenu }>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link active mx-3" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link mx-3" href="#">Contact Us</a>
            <a className="nav-item nav-link mx-3" href="#">About Us</a>
          </div>
        </div>
      </nav>
      {routes}
    </Router>
  );
}
if (document.getElementById('header')) {
  ReactDOM.render(<Header />, document.getElementById('header'));
}

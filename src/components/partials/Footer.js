import React from 'react';
import ReactDOM from 'react-dom';

export default function Footer(props) {

	return (
    <div className="footer border bottom-0 text-center" style={{height:"50px"}}>
      © 2020 Gemography, All rights reserved 
    </div>
  );
}

if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}

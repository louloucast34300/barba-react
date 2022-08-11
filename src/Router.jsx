import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import LocationApp from "./component/LocationApp";
export const RouterAngel = () => {

  return (
    <div className="container-app" data-barba="container">
      <Router>
        <LocationApp/>
      </Router>
    </div>
  );
};

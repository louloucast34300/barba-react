import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom'
import LocationApp from "./component/LocationApp";

//style
import './css/base.css';
import './css/navbar.css';

const App = () => {
  return (
    <div className="container-app" data-barba="container">
      <Router>
        <LocationApp/>
      </Router>
    </div>
  );
}

export default App;

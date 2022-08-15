import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LocationApp from "./component/LocationApp";
import { AnimatePresence } from "framer-motion";

//style
import "./css/base.css";
import "./css/navbar.css";

const App = () => {
  return (
    <div className="container-app">
      <Router>
        <AnimatePresence>
            <LocationApp />
        </AnimatePresence>
      </Router>
    </div>
  );
};

export default App;

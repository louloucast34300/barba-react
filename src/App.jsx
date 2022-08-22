import React, {useRef,useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LocationApp from "./component/LocationApp";
import { AnimatePresence } from "framer-motion";


//style
import "./css/base.css";
import "./css/navbar.css";

const App = () => {


const app = useRef();




  return (


 <div ref={app} className="container-app">


      <Router>  

        <AnimatePresence>
 
            <LocationApp />
 
        </AnimatePresence>

      </Router>

 </div>
 
  );
};

export default App;

import React,{useState, useEffect} from 'react'

import {
  Routes as Switch,
  Route,
  useLocation
} from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Accueil } from "../page/Accueil";
import { Contact } from "../page/Contact";
import { Apropos } from '../page/Apropos';


const LocationApp = ({children}) => {
  const location = useLocation().pathname;
  const [currentColorPage, setCurrentColorPage] = useState('')

console.log(currentColorPage);

  let transitionColor = ''
  switch(location){
    case '/contact':
      transitionColor = '#4a5bcf';
      break;
    case '/':
      transitionColor = '#0a004b';
      break;
    case '/a-propos':
      transitionColor = '#C71585';
      break;
  }

  useEffect(()=>{
    const newColor = currentColorPage
    setCurrentColorPage(transitionColor)
  },[])

const handleColorCurrentPage = () =>{
  console.log('color',transitionColor)
  setCurrentColorPage(transitionColor)
}

  return (
    <div>
        <Navbar handleColorCurrentPage={handleColorCurrentPage}/>
          <Switch>
            <Route 
              path="/contact" 
              element={
              <Contact 
              transitionColor={transitionColor} 
              currentColorPage={currentColorPage}
              />}>
            </Route>
            <Route 
              path="/" 
              element={<Accueil transitionColor={transitionColor} currentColorPage={currentColorPage}/>}></Route>
            <Route path="/a-propos" element={<Apropos transitionColor={transitionColor} currentColorPage={currentColorPage}/>}></Route>
          </Switch>
    </div>
  )
}

export default LocationApp
import React,{useState} from 'react'

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
  const [color, setColor] = useState('#4a5bcf')

  let bg = ''
  switch(location){
    case '/contact':
      bg = '#4a5bcf';
      break;
    case '/':
      bg = '#0a004b';
      break;
    case '/a-propos':
      bg = '#C71585';
      break;
  }
const changeColor = () =>{
  setColor(bg)
}
  console.log(bg)
  return (
    <div>
        <Navbar handleColor={changeColor}/>
          <Switch>
            <Route path="/contact" element={<Contact theme={bg} bgPage={color}/>}></Route>
            <Route path="/" element={<Accueil theme={bg} bgPage={color}/>}></Route>
            <Route path="/a-propos" element={<Apropos theme={bg} bgPage={color}/>}></Route>
          </Switch>
    </div>
  )
}

export default LocationApp
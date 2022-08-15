import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import {motion} from 'framer-motion'
import Title from "../component/title/Title";

import { Donnuts } from "../component/donnuts/Donnuts";

export const Contact = ({transitionColor,currentColorPage}) => {
  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const colorPage = screen.style.backgroundColor
    tl.to(screen,{
      duration:1,
      backgroundColor:colorPage, 
      width: '250vw',
      height: '250vh',
      borderRadius:'100%',
      ease:'Power4.easeOut'
    
    });
    return()=>{
      tl.to(screen,{
        display:'none',
        duration:.1
      },"-=.7")
      tl.to(body,{
        opacity:1,
        duration:.1,
        backgroundColor:colorPage,
      },"-=.7");
    } 
  });

  return (
    <>
    <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)} style={{backgroundColor:transitionColor}}>
        </div>
      </div>
      <div className="Contact" style={{backgroundColor:currentColorPage}}>
        <div ref={(el) => (body = el)} className="Headd">
          <div className="container">
             <Title title={`Investissez dès maintenant avec le réseau BeAngels`} count={4} speed={10}/>
             <Donnuts style='red'/>
          </div>
        </div>
      </div>
      
  </>
  )
};

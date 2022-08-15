import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import {motion, useMotionValue} from 'framer-motion';
import '../css/base.css';
import Title from "../component/title/Title";
import { Donnuts } from "../component/donnuts/Donnuts";

export const Apropos = ({transitionColor,currentColorPage}) => {


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
      <div className="Apropos" style={{backgroundColor:currentColorPage}}>
        <div ref={(el) => (body = el)} className="Headd" >
          <div className="container">
            <div className='section-1'>
              <Title title={`Boostez votre projet avec BeAngels`} count={3} speed={10}/>
               <Donnuts style='blue-clair'/>
            </div>
          </div>
        </div> 
      </div>
     
  </>
  )
}
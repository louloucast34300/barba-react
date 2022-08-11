import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import '../css/base.css';

export const Apropos = ({theme,bgPage}) => {
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
          pointerEvents: 'none',
          duration:.1,
          backgroundColor:colorPage,
        },"-=.7");
      } 
  });

  return (
    <>
    <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)} style={{backgroundColor:theme}}>
        </div>
      </div>
      <div data-barba="container" className="Home" style={{backgroundColor:bgPage}}>
        <div ref={(el) => (body = el)} className="Headd">
          <div >Welcome to A propos!!!</div>
        </div>
      </div>
  </>
  )
}
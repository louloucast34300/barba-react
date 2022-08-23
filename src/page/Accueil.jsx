import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "../css/base.css";
import "../css/text3d.css";
import Title from "../component/title/Title";
import { Donnuts } from "../component/donnuts/Donnuts";
import ScrollTrigger from "gsap/ScrollTrigger";
import useWindowSize from '../component/smoothScroll/useWindowSize';
import { Scroll } from "../component/smoothScroll/scroll";
import { Text3d } from "../component/gsap/text3d";
import { cubeTranslate } from "../component/gsap/cubeTranslate";


gsap.registerPlugin(ScrollTrigger);


export const Accueil = ({ transitionColor, currentColorPage }) => {
    
  //Smooth Scroll (skew version)
  let scrollContainer = useRef(null) // .Home
  Scroll(scrollContainer);

 //Animation d'entrée
  let screen = useRef(null); // .load-screen
  let body = useRef(null); // .Headd


/**
 * ScrollTrigger
 */
  //cube Anim
  let textAnim = useRef(null); // .trigger-text
  let cubeAnim = useRef(null); // pas de class

  //text3d anim
  let textPart1 = useRef(null);
  let textPart2 = useRef(null);
  let textPart3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const colorPage = screen.style.backgroundColor;
    tl.to(screen, {duration: 1,backgroundColor: colorPage,width: "250vw",height: "250vh",borderRadius: "100%",ease: "easeInOut"});
    cubeTranslate(textAnim,cubeAnim)
    Text3d(textPart1,textPart2,textPart3,cubeAnim)
    return () => {
      //Fin d'animation et entrée du body
      tl.to(screen,{display: "none",duration: 0.1,},"-=.7");
      tl.to(body,{opacity: 1,duration: 0.1,backgroundColor: colorPage,},"-=.7");
    };
    
  },[]);

  return (
    <>  
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)} style={{ backgroundColor: transitionColor }}></div>
      </div>
      <div className="scroll">
      <div  ref={scrollContainer} className="Home" style={{ backgroundColor: currentColorPage }}>
        <div ref={(el) => (body = el)} className="Headd">
          
          <div className="container">
            <Title
              title={`Nous connectons des entrepreneurs brillants à des investisseurs expérimentés`}
              speed={10}
              count={3}
            />
            <Donnuts style="vert" />
            <div style={{height:'100vh'}}></div>
            <div style={{height:'50vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', backgroundColor:'white'}}>
              <h1 className='trigger-text' ref={(el)=>(textAnim = el)} style={{color:'white'}}>Test</h1>
              <div ref={(el) => (cubeAnim = el)} style={{backgroundColor:'red', height:'300px',width:"300px"}}></div>
            </div>
            <div style={{height:'100vh'}}></div>
           
            <div className="text3d">
              <h1 ref={(el)=>(textPart1 = el)}>LOCOMOTIVE</h1>
              <h1 ref={(el)=>(textPart2 = el)}>SCROLL</h1>
              <h1 ref={(el)=>(textPart3 = el)}>V4.X</h1>
            </div>
            <div style={{height:'100vh'}}></div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "../css/base.css";
import Title from "../component/title/Title";
import { Donnuts } from "../component/donnuts/Donnuts";
import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

export const Accueil = ({ transitionColor, currentColorPage }) => {
    

 //Animation d'entrée
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {

    console.log( gsap.registerPlugin(ScrollTrigger));
    const tl = gsap.timeline();
    
    const colorPage = screen.style.backgroundColor;
    tl.to(screen, {
      duration: 1,
      backgroundColor: colorPage,
      width: "250vw",
      height: "250vh",
      borderRadius: "100%",
      ease: "easeInOut",
    });
    return () => {
      tl.to(
        screen,
        {
          display: "none",
          duration: 0.1,
        },
        "-=.7"
      );
      tl.to(
        body,
        {
          opacity: 1,
          duration: 0.1,
          backgroundColor: colorPage,
        },
        "-=.7"
      );
    
    };
  },[]);

  //Scroll Trigger
  
  let textAnim = useRef(null);
  let cubeAnim = useRef(null);
  useEffect(()=>{
    gsap.to(textAnim, {rotation:180, duration :3,delay:4, scrollTrigger:{
      trigger: textAnim,
    
    }})
    gsap.fromTo(cubeAnim, {x:-200, rotation:0}, {x: 200, rotation: 360, duration:2, ease: "Power4.easeOut", scrollTrigger:{
      trigger: cubeAnim,
      toggleActions : 'restart none reverse none'
    }})
  },[])

  return (
    <>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)} style={{ backgroundColor: transitionColor }}></div>
      </div>
      <div className="Home" style={{ backgroundColor: currentColorPage }}>
        <div ref={(el) => (body = el)} className="Headd">
          <div className="container">
            <Title
              title={`Nous connectons des entrepreneurs brillants à des investisseurs expérimentés`}
              speed={10}
              count={3}
            />
            <Donnuts style="vert" />
            <div style={{height:'30vh'}}></div>
            <div style={{height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', backgroundColor:'white'}}>
              <h1 className='trigger-text' ref={(el)=>(textAnim = el)} style={{color:'white'}}>Test</h1>
              <div ref={(el) => (cubeAnim = el)} style={{backgroundColor:'red', height:'300px',width:"300px"}}></div>
            </div>
            <div style={{height:'300vh'}}></div>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "../css/base.css";
import "../css/text3d.css";
import Title from "../component/title/Title";
import { Donnuts } from "../component/donnuts/Donnuts";
import ScrollTrigger from "gsap/ScrollTrigger";
import useWindowSize from '../component/smoothScroll/useWindowSize';


gsap.registerPlugin(ScrollTrigger);


export const Accueil = ({ transitionColor, currentColorPage }) => {
    


 //Animation d'entrée
  let screen = useRef(null); // .load-screen
  let body = useRef(null); // .Headd

  useEffect(() => {
    const tl = gsap.timeline();
    const colorPage = screen.style.backgroundColor;
    tl.to(screen, {duration: 1,backgroundColor: colorPage,width: "250vw",height: "250vh",borderRadius: "100%",ease: "easeInOut"});
    return () => {
      //Fin d'animation et entrée du body
      tl.to(screen,{display: "none",duration: 0.1,},"-=.7");
      tl.to(body,{opacity: 1,duration: 0.1,backgroundColor: colorPage,},"-=.7");
    };
  },[]);

  //Scroll Trigger
  let textAnim = useRef(null); // .trigger-text
  let cubeAnim = useRef(null); // pas de class

  useEffect(()=>{
    gsap.to(textAnim, {rotation:180, duration :3,delay:4, scrollTrigger:{
      trigger: textAnim,
    }})
    gsap.fromTo(cubeAnim, {x:-200, rotation:0}, {x: 200, rotation: 360, duration:2, ease: "Power4.easeOut", scrollTrigger:{
      trigger: cubeAnim,
      toggleActions : 'restart none reverse none'
    }})
  },[])

  //text3d anim
  let textPart1 = useRef(null);
  let textPart2 = useRef(null);
  let textPart3 = useRef(null);
  let text3d = useRef(null)
  useEffect(()=>{
    gsap.fromTo(textPart1, {
      transform: 'matrix3d(1,0,0.00,0,0.00,0.17,0.98,0,0,-0.98,0.17,0,0,0,0,1)scale(1)',
      opacity:0
    },{
      transform: 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)scale(1.1)',
      opacity:1,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger: cubeAnim,
        toggleActions : 'restart none none none'
      }
    })
    gsap.fromTo(textPart2, {
      transform: 'matrix3d(1,0,0.00,0,0.00,0.17,0.98,0,0,-0.98,0.17,0,0,0,0,1)scale(1)',
      opacity:0
    },{
      transform: 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)scale(1.1)',
      opacity:1,
      duration:1,
      delay:1.1,
      scrollTrigger:{
        trigger: cubeAnim,
        toggleActions : 'restart none none none'
      }
    })
    gsap.fromTo(textPart3, {
      transform: 'matrix3d(1,0,0.00,0,0.00,0.17,0.98,0,0,-0.98,0.17,0,0,0,0,1)scale(1)',
      opacity:0
    },{
      transform: 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)scale(1.1)',
      opacity:1,
      duration:1,
      delay:1.2,
      scrollTrigger:{
        trigger: cubeAnim,
        toggleActions : 'restart none none none'
      }
    })
 

  },[])


  //Smooth Scroll (skew version)
  const skewConfigs = {ease: 0.04,current: 1,previous: 1,rounded:1}
  const size = useWindowSize();
  let scrollContainer = useRef(null) // .Home

  useEffect(()=>{
  document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height * 0.55}px`
  requestAnimationFrame(()=>skewScrolling())
  const skewScrolling = () => {
      skewConfigs.current = window.scrollY;
      skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
      skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100; // position sur la page
      const difference = skewConfigs.current - skewConfigs.rounded;
      const acceleration = difference / size.width
      const velocity = +acceleration;
      const skew = velocity * 10.5;
      scrollContainer.current.style.transform = `translate3d(-50%, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;
      requestAnimationFrame(()=>skewScrolling())
    }
  },[size.height]) 
    
 

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
            <div ref={(el)=>(text3d = el)}></div>
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

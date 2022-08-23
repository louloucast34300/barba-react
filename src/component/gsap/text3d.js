import { gsap } from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Text3d = (textPart1,textPart2,textPart3, cubeAnim) =>{

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
 


}
import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const cubeTranslate = (textAnim, cubeAnim) => {
    gsap.to(textAnim, {rotation:180, duration :3,delay:4, scrollTrigger:{
        trigger: textAnim,
      }})
      gsap.fromTo(cubeAnim, {x:-200, rotation:0}, {x: 200, rotation: 360, duration:2, ease: "Power4.easeOut", scrollTrigger:{
        trigger: cubeAnim,
        toggleActions : 'restart none reverse none'
      }})
}


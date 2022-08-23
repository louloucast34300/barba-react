import { useEffect } from "react"
import useWindowSize from "./useWindowSize";
export const Scroll = async (scrollContainer) =>{
  const skewConfigs = {ease: 0.04,current: 1,previous: 1,rounded:1}
  const size = useWindowSize();

useEffect(()=>{
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height * 0.55}px`
    requestAnimationFrame(()=>skewScrolling())
    
    },[size.height]) 
    
  
const skewScrolling = ()=>{

         skewConfigs.current = window.scrollY;
        skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
        skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100; // position sur la page
        const difference = skewConfigs.current - skewConfigs.rounded;
        const acceleration = difference / size.width
        const velocity = +acceleration;
        const skew = velocity * 10.5;
        scrollContainer.current.style.transform = `translate3d(-50%, -${skewConfigs.rounded}px, 0)skewY(${skew}deg)`;

    requestAnimationFrame(()=>skewScrolling())   
 }
}
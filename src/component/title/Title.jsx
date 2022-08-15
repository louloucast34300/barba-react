import React,{useEffect, useState} from 'react'
import {splitTitle} from '../func/splitTitle'
import { motion } from "framer-motion";

// title => le texte du titre
// count => le nombre de mot avant saut de ligne.
// speed => plus le nombre est grand, plus la cadence d'apparition des lignes est rapide
const Title = ({title, count, speed}) => {

const [motionTitle, setMotionTitle] = useState([]);

const defaultSpeed = speed || 6;
const defaultSentence = 'Insérer du texte avec le props title sur la balise !';
const defaultCount = 6;

useEffect(()=>{
    setMotionTitle( 
        splitTitle(
            title || defaultSentence,
             count || defaultCount,
             )
        );
},[])
  return (
    <>
        {motionTitle.map((item,index)=>{
            const delay = index / defaultSpeed;
            return(
            <motion.div key={index} className="div-title">
                <motion.h1 
                    initial={{y:'100px'}} 
                    animate={{y:"0px",transition:{duration:.8, delay:delay}}}>
                    {item}
                </motion.h1>
            </motion.div>
            )
        })}
    </>
  )
}

export default Title
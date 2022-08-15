import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import DonnutsBlue from "../../images/donnuts/d-blue.png";
import DonnutsBlueCLair from "../../images/donnuts/d-blue-clair.png";
import DonnutsRed from "../../images/donnuts/d-red.png";
import DonnutsVert from "../../images/donnuts/d-vert.png";

export const Donnuts = ({ style }) => {
  const [pathDonnuts, setPathDonnuts] = useState("");

  useEffect(() => {
    findPathDonnuts();
  });

  const findPathDonnuts = () => {
    let donnuts = "";
    switch (style) {
      case "red":
        donnuts = DonnutsRed;
        break;
      case "blue":
        donnuts = DonnutsBlue;
        break;
      case "blue-clair":
        donnuts = DonnutsBlueCLair;
        break;
      case "vert":
        donnuts = DonnutsVert;
    }
    setPathDonnuts(donnuts);
  };

  return (
    <>
      <motion.img
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={.8}
        whileDrag={{ scale: 10, width: "40px" }}
        initial={{
          width: "20px",
          height: "20px",
          top:"25px",
          right:0,
          left:"25px",
          bottom:0,
          position: "absolute",
          rotateY: 0,
          rotateX: 200,
          scale: 0,
          opacity:0.3
        }}
        animate={{
            opacity:1,
          scale: 25,
          rotateY: 200,
          rotateX: 0,
          transition: { duration: .7, delay: 0.5 },
        }}
        src={pathDonnuts}
        alt=""
      />
    </>
  );
};

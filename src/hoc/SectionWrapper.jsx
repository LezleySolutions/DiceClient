import React, { createRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import * as THREE from "three";
import Globe from "vanta/dist/vanta.globe.min.js";

const StarWrapper = (Component, idName) =>
  function HOC() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = createRef();
  useEffect(() => {
    if (!vantaEffect) {
        setVantaEffect(
    Globe({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      size: 1,
      color: 0x4384d6,
      color2: 0x00cea8,
      backgroundColor:"#050816",
    })
  )};
    return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
}, [vantaEffect]);
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id={idName}
      >
        <span className='hash-span'>
          &nbsp;
        </span>
      <div ref={vantaRef}>
        <Component />
      </div>
      </motion.section>
    );
  };

export default StarWrapper;

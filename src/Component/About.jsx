import React, { createRef, useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceWrapper from "../hoc/SercicesWrapper";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h4 className={styles.sectionSubText}>Introduction</h4>
        <h3 className={styles.sectionHeadText}>About Us</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
       Dice Technologies a rapidly expanding software services company, operates development
        centers in burgeoning emerging markets. Our core values revolve around
        learning, innovation, and the delivery of top-class IT solutions. Our
        team consists of highly skilled professionals, who possess exceptional
        technical expertise, unmatched domain knowledge, and a strong dedication
        to providing outstanding software development services. By offering a
        diverse range of services, we have successfully assisted numerous
        businesses in enhancing their processes, cementing our position as one
        of the most highly sought-after software development companies.
      </motion.p>
      <motion.div variants={textVariant()}>
        <h3 className="text-white font-black md:text-[40px] sm:text-[30px] xs:text-[30px] text-[20px] text-center">
          Our Key Points
        </h3>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default ServiceWrapper(About, "about");

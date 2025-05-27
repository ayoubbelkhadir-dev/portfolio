import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#110048]  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={textVariant()}>
        <p className= {`${styles.sectionSubText} `}  >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#110048] text-[17px] max-w-6xl text-justify leading-[30px]'
      >
        I'm a skilled software developer with experience across both front-end and back-end development.
        I have worked with technologies such as Java, Angular, React, JavaScript, PHP, and Unity,
        allowing me to build dynamic web and mobile applications. As a Web Developer and Mobile Developer,
        I’ve contributed to creating user-friendly interfaces and responsive designs. On the back-end side,
        I specialize in Java development and have implemented efficient, scalable solutions.
        I also have DevOps experience, with knowledge of CI/CD pipelines, automated testing,
        Kubernetes, and Jenkins, helping ensure smooth deployment and high-quality code delivery. 
        In addition, I have a strong eye for design, enabling me to collaborate effectively with designers and contribute to the overall user experience.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
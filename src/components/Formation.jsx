import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { formations } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const FormationCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[320px] w-full'>
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
        className='bg-[#050048]  rounded-[20px] py-5 px-12 min-h-[280px] min-w-[320px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-30 h-30 object-contain'
        />

        <h3 className='text-white text-[18px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);



const Formation = () => {
  return (
    <>
    <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={textVariant()}>
          <p className= {`${styles.sectionSubText} `}  >Retrouve ici mes diplômes obtenus</p>
        <h2 className={styles.sectionHeadText}>Diplômes.</h2>
      </motion.div>
      <div className='justify-center mt-20 flex flex-wrap gap-10'>
        {formations.map((formation, index) => (
            <FormationCard key={formation.title} index={index} {...formation} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Formation,"")
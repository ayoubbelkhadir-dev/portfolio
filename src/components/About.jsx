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
        <h2 className={styles.sectionHeadText}>Présentation.</h2>
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#110048] text-[17px] max-w-6xl text-justify leading-[30px]'
      >
        Développeur logiciel expérimenté, je maîtrise à la fois le développement front-end et back-end.
        J’ai travaillé avec des technologies telles que Java, Angular, React, JavaScript, PHP et Unity, 
        ce qui me permet de concevoir des applications web et mobiles dynamiques. 
        En tant que développeur web et mobile, j’ai contribué à la création d’interfaces intuitives et de designs responsives. 
        Côté back-end, je suis spécialisé en développement Java, avec la mise en place de solutions performantes et évolutives. 
        Par ailleurs, je possède des compétences en DevOps, notamment dans les pipelines CI/CD, les tests automatisés, Kubernetes et Jenkins, 
        assurant ainsi un déploiement fluide et une livraison de code de haute qualité. 
        Enfin, mon sens du design me permet de collaborer efficacement avec les équipes créatives pour améliorer l’expérience utilisateur globale.
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
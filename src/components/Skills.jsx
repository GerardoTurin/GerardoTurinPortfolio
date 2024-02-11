import { motion } from "framer-motion";
import "../pages/about/about.css";
import PageHeader from "./PageHeader";
import FronTecnologies from "./FronTecnologies";
import BackTecnologies from "./BackTecnologies";
import OthersTecnologies from "./OthersTecnologies";


const Skills = () => {
  
  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <div className="skillContainer">
        <PageHeader title="Skills" />
        <div className="skillBox row">
          <div className="skillInfo col-12 col-lg-6">
            <motion.div className="contentSkills" variants={staggerVariants}>
              <motion.h5 variants={paragraphVariants}>Frontend</motion.h5>
                <FronTecnologies />
            </motion.div>
          </div>
          <div className="skillInfo col-12 col-lg-6">
            <motion.div className="contentSkills" variants={staggerVariants}>
              <motion.h5 variants={paragraphVariants}>Backend</motion.h5>
              <BackTecnologies />
            </motion.div>
          </div>
          <div className="skillInfo col-12 col-lg-6">
            <motion.div className="contentSkills" variants={staggerVariants}>
              <motion.h5 variants={paragraphVariants}>Others</motion.h5>
              <OthersTecnologies />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

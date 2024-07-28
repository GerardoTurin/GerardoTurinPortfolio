import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/Perfil.png";
import "../pages/about/about.css";
import Image from "./Image";

/**
 * Represents the About Me section.
 * Displays information about the user.
 * Not currently in use.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // useInView es para detectar cuando el elemento es visible en la pantalla
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

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
    <section >
      <div className="aboutContainer">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}>
            {/* Display the personal image */}
            {/* <motion.img src={ aboutMeImg } alt={name} /> */}
            <Image src={aboutMeImg} height="auto" width="60%" alt={name} borderRadius="50%" />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a Full Stack Developer.</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants} className="description"> 
                  Experience in designing, developing, and maintaining web applications. Proficient in <span style={{ color: "var(--hl-color)" }}>JavaScript, React, Angular, NodeJS, and ExpressJS</span>. <br />
                  Skilled in frontend and backend development, implementing <span style={{ color: "var(--hl-color)" }}>RESTful APIs, database management</span>, and application performance optimization.
                </motion.p>
              </motion.div>
              
              {/* Button to download the CV */}
              <Link to="https://drive.google.com/file/d/11wTspcqKsR7aslgsxkKLjlNS9E8RFnWR/view?usp=drive_link" target="_blank"  rel="noreferrer">
                <Button name="Download CV" />
              </Link>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

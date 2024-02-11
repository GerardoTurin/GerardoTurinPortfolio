import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/Perfil.png";
import "../pages/about/about.css";

/**
 * Represents the About Me section.
 * Displays information about the user.
 * Not currently in use.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
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
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}>
            {/* Display the personal image */}
            <motion.img src={ aboutMeImg } alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
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
                <motion.p variants={paragraphVariants}> 
                  I have 2 years of experience in creating and maintaining web applications. My goal is to create easy to use,<span style={{ color: "var(--hl-color)" }}> scalable and secure solutions</span>  that meet the needs and expectations of my clients. I have solid knowledge in the <span style={{ color: "var(--hl-color)" }}> MERN</span> Stack.
                </motion.p>
                {/* <br />
                <motion.p variants={paragraphVariants}>
                I focus on delivering effective solutions that generate value for clients. I develop <span style={{ color: "var(--hl-color)" }}> attractive and dynamic interfaces</span> using frameworks and libraries such as React, Next.js, Tailwind CSS and Material UI, ensuring an excellent user experience.
                </motion.p> */}
              </motion.div>
              
              {/* Button to download the CV */}
              <Link to="https://drive.google.com/file/d/1a6syNfxNWF9HwYfC5N-2t7dTBkfHkGZV/view?usp=drive_link" target="_blank"  rel="noreferrer">
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

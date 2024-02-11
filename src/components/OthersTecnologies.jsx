import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import npmImg from "../images/npm.png";
import gitImg from "../images/git.png";


const OthersTecnologies = () => {
    const [ref, inView] = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    return (
        <div className="skillIcons" >
            <motion.div
                className="skillImage col-12 col-lg-6"
                ref={ref}
                initial={{ x: "10vw", opacity: 0, scale: 0.5 }}
                animate={inView ? { x: 0, opacity: 1, scale: 1 } : { y: "10vw", opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}>
                    <motion.div whileHover={{ scale: 1.10 }} title="NPM">
                        <motion.img src={ npmImg } alt="NPM" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.10 }} title="Git">
                        <motion.img src={ gitImg } alt="Git" />
                    </motion.div>
            </motion.div>
        </div>
    )
};

export default OthersTecnologies;
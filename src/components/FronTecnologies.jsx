import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import jsImg from "../images/js.png";
import reactImg from "../images/react.png";
import bootstrapImg from "../images/bootstrap.png";
import tailwindImg from "../images/tailwindcss.png";
import reduxImg from "../images/redux.png";
import muiImg from "../images/mui.png";
import typescriptImg from "../images/typescript.png";
import nextjsImg from "../images/nextjs.png";

const FronTecnologies = () => {
    const [ref, inView] = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    return (
        <div className="skillIcons" >
            <motion.div
                className="skillImage col-12 col-lg-6"
                ref={ref}
                initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
                animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}>
                    <motion.div whileHover={{ scale: 1.10 }} title="HTML5">
                        <motion.img src={ htmlImg } alt="HTML5" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.10 }} title="CSS3">
                        <motion.img src={ cssImg } alt="CSS3" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.10 }} title="JavaScript">
                        <motion.img src={ jsImg } alt="JavaScript" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.10 }} title="TypeScript">
                        <motion.img src={ typescriptImg } alt="TypeScript" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.10 }} title="React">
                        <motion.img src={ reactImg } alt="React" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.10 }} title="Next.js">
                        <motion.img src={ nextjsImg } alt="Next.js" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.10 }} title="Bootstrap">
                        <motion.img src={ bootstrapImg } alt="Bootstrap" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.10 }} title="Tailwind CSS">
                        <motion.img src={ tailwindImg } alt="Tailwind CSS" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.10 }} title="Redux">
                        <motion.img src={ reduxImg } alt="Redux" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.10 }} title="Material UI">
                        <motion.img src={ muiImg } alt="Material UI" />
                    </motion.div>
            </motion.div>
        </div>
    )
};

export default FronTecnologies;
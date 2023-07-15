import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import ServiceWrapper from "../hoc/SercicesWrapper";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
    <div className="flex justify-center">
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        Languages we are working on
        </p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
    </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceWrapper(Tech, "tech");


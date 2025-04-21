import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import TiltedCard from "../atoms/TiltedCard";



const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <TiltedCard
            key={service.title}
            imageSrc={service.icon}
            captionText={service.title}
            imageHeight="280px"
            imageWidth="250px"
            containerHeight="280px"
            containerWidth="250px"
            scaleOnHover={1.1}
            rotateAmplitude={24}
            showTooltip={true}
            displayOverlayContent={false}
            index={index} // 👉 傳給 stagger 使用
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

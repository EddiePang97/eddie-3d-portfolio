import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

// 註冊 ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const FixedVerticalTimeline = VerticalTimeline as unknown as React.FC<any>;
const FixedVerticalTimelineElement = VerticalTimelineElement as unknown as React.FC<any>;
const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <FixedVerticalTimelineElement
      className="timeline-card opacity-0 translate-y-16"
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[100%] w-[100%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </FixedVerticalTimelineElement>
  );
};

const Experience = () => {
  useEffect(() => {
    const elements = gsap.utils.toArray(".timeline-card");

    elements.forEach((el: any) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <FixedVerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </FixedVerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import toast from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const WavingHand = () => (
  <span className="inline-block animate-wave">👋</span>
);


const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  // GSAP enter animation
  useEffect(() => {
    if (leftRef.current && rightRef.current) {
      gsap.fromTo(
        leftRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      {
        title: "Contact Form",                  // 對應 {{title}}
        name: form.name,                        // 對應 {{name}}
        email: form.email,                      // 對應 {{email}}
        message: form.message,                  // 對應 {{message}}
        time: new Date().toLocaleString(),      // 對應 {{time}}
      },
      emailjsConfig.accessToken
    ).then(
        () => {
          setLoading(false);
          toast('Thank you. I will get back to you as soon as possible.',
            {
              icon: <WavingHand />,
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            }
          );
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast.error("Something went wrong.");
        }
      );
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      {/* 左邊：表單區塊 */}
    
      <div
        ref={leftRef}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8 opacity-0"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      {/* 右邊：Canvas 地球區塊 */}
      <div ref={rightRef} className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1 opacity-0">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
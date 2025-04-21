import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 進場動畫：GSAP
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }

    // 滾動變化背景 + active id
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionId = section.getAttribute("id");

        if (sectionTop < window.innerHeight * 0.3 && sectionTop + rect.height > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 transition-all duration-300 ${scrolled
          ? "bg-primary/80 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
            setActive(null);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="text-[18px] font-bold text-white">{config.html.title}</p>
        </Link>

        {/* 桌面版 */}
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[18px] font-medium transition-colors duration-200 hover:text-white ${active === nav.id ? "text-white" : "text-secondary"
                }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* 手機版 */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
         className={`absolute right-4 top-20 z-50 w-[200px] flex-col gap-4 rounded-xl bg-[#1a1a1a]/95 backdrop-blur-md p-6 shadow-xl transform origin-top-right transition-all duration-300 ease-out ${
          toggle ? "flex scale-100 opacity-100" : "hidden scale-90 opacity-0"
        }`}  >
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins text-[16px] font-medium cursor-pointer ${active === nav.id ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
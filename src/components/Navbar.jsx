import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import ThemeSwitcher from "./ThemeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary-light dark:bg-primary-dark" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2"
        >
          <div className="bg-logo-light dark:bg-logo-dark w-9 h-9 bg-cover bg-center"></div>
          <p className="text-black dark:text-white text-[18px] font-bold cursor-pointer">
            Rachel Gapasin
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
              className={`${
                active === link.title
                  ? "text-accent-light dark:text-white"
                  : "text-black dark:text-secondary"
              } hover:text-accent-light dark:hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <ThemeSwitcher />
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button onClick={() => setToggle(!toggle)} className="flex">
            {toggle ? (
              <FontAwesomeIcon
                icon={faXmark}
                className="w-5 h-5 text-black dark:text-white"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="w-5 h-5 text-black dark:text-white"
              />
            )}
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary-light dark:bg-primary-dark shadow-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            x
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  className={`${
                    active === link.title
                      ? "text-accent-light dark:text-white"
                      : "text-black dark:text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <ThemeSwitcher />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

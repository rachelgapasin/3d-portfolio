import { styles } from "../styles";
import { socialMedia } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  faEnvelope: faEnvelope,
  faLinkedin: faLinkedin,
  faGithub: faGithub,
  faInstagram: faInstagram,
};

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} w-full pb-5 md:pb-10`}>
      <div className="flex mt-16 flex-row justify-between items-center">
        <p className="text-black dark:text-white md:text-base text-sm md:font-normal font-light text-balance">
          Copyright © 2024 Rachel Gapasin
        </p>

        <div className="flex items-center gap-3">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center text-white bg-accent-light dark:bg-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-45 dark:bg-opacity-75 rounded-lg border dark:border-gray-700"
            >
              <FontAwesomeIcon
                icon={iconMap[info.icon]}
                className="w-5 h-5 text-white"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

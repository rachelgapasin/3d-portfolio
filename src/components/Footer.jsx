import { styles } from "../styles";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} w-full pb-5 md:pb-10`}>
      <div className="flex mt-16 flex-row justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-balance">
          Copyright © 2024 Rachel Gapasin
        </p>

        <div className="flex items-center gap-3">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center text-white backdrop-filter backdrop-blur-lg bg-opacity-75 bg-gray-800 rounded-lg border border-gray-700"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

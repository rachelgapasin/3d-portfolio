import React, { Suspense, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import DemoComputer from "./canvas/DemoComputer";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowLeft,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const projectCount = projects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = projects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary-light dark:text-secondary-dark mt-3 text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="hidden xs:block bg-[#abbaff] dark:bg-primary-dark rounded-lg h-96 lg:h-full">
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<Loader />}>
                <group
                  scale={0.00075}
                  position={[0, -1.5, 0]}
                  rotation={[0.1, 0, 0]}
                >
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>

        {/* Mobile Devices */}
        <video
          key={currentProject.texture}
          width="750"
          height="500"
          autoPlay
          controls
          loop
          className="xs:hidden rounded-lg"
        >
          <source src={currentProject.texture} type="video/mp4" />
        </video>

        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-xl rounded-lg">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.style}
          >
            <img src={currentProject.logo} alt="logo" className="w-10 h-10" />
          </div>

          <div className="flex flex-col gap-5 text-black dark:text-white my-5">
            <p className=" text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-md p-2 bg-accent-light dark:bg-neutral-100 bg-opacity-20 dark:bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center"
                  title={tag.name}
                >
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <div className="flex items-center sm:items-end gap-3">
              <p className="hidden xs:block text-black dark:text-white">
                Fun links:
              </p>
              <a
                href={currentProject.sourceCode}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 cursor-pointer my-auto"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-5 h-5 text-black dark:text-white"
                />
              </a>
              <a
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 cursor-pointer my-auto"
              >
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="w-5 h-5 text-black dark:text-white"
                />
              </a>
            </div>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              onClick={() => handleNavigation("previous")}
              className="arrow-btn"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="w-5 h-5 text-black dark:text-white"
              />
            </button>
            <button
              onClick={() => handleNavigation("next")}
              className="arrow-btn"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-5 h-5 text-black dark:text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "work");

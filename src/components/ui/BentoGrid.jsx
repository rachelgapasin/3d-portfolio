import { useState } from "react";
import Lottie from "react-lottie";
import { cn } from "../../utils/cn";
import { BackgroundGradientAnimation } from "./GradientAnimation";
import { GridGlobe } from "./GridGlobe";
import MagicButton from "../MagicButton";
import animationData from "../../constants/confetti.json";
import { IoDownloadOutline } from "react-icons/io5";
import { MdFileDownloadDone } from "react-icons/md";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  description,
  className,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}) => {
  const leftLists = ["ReactJS", "NextJS", "Typescript"];
  const rightLists = ["JavaScript", "MongoDB", "MySQL"];

  const [downloaded, setDownloaded] = useState(false);

  const defaultOptions = {
    loop: downloaded,
    autoplay: downloaded,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/Rachel_Gapasin_Resume.pdf";
    link.download = "Rachel_Gapasin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.4] dark:border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bg-[#abbaff] dark:bg-primary-dark",
        className
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && id !== 1 ? (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          ) : (
            <div
              className={cn(
                imgClassName,
                "bg-b1-light dark:bg-b1-dark bg-cover bg-no-repeat bg-center"
              )}
            />
          )}
        </div>
        {id !== 1 && (
          <div
            className={`absolute right-0 -bottom-5 ${
              id === 5 && "w-full opacity-80"
            } `}
          >
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className="object-cover object-center w-full h-full"
              />
            )}
          </div>
        )}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10"
          )}
        >
          {id === 6 ? (
            <>
              <div
                className={`text-black dark:text-white font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
              >
                {title}
              </div>
              <div className="text-secondary-light dark:text-secondary-dark font-sans font-extralight md:text-xs lg:text-base text-sm z-10 ">
                {description}
              </div>
            </>
          ) : (
            <>
              <div className="text-secondary-light dark:text-secondary-dark font-sans font-extralight md:max-w-36 md:text-xs lg:text-base text-sm z-10 text-balance">
                {description}
              </div>
              <div
                className={`text-black dark:text-white font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-balance`}
              >
                {title}
              </div>
            </>
          )}

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 text-black dark:text-white">
              <div className="flex flex-col gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#b5c1fc] dark:bg-[#0e1027]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#b5c1fc] dark:bg-[#0e1027]" />
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#b5c1fc] dark:bg-[#0e1027]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#b5c1fc] dark:bg-[#0e1027]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  downloaded ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={downloaded ? "You got it!" : "Download resume"}
                icon={
                  downloaded ? <MdFileDownloadDone /> : <IoDownloadOutline />
                }
                position="left"
                handleClick={handleDownload}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

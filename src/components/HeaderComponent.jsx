import { Avatar } from "@nextui-org/avatar";
import { useTranslation } from "react-i18next";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";
import vernszPP from "/images/vernszPP.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function HeaderComponent() {
  const [isDisabled, setDisabled] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setDisabled(false);
      setTimeout(() => {
        setDisabled(true);
      }, 400);
    }, 4500);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const { t } = useTranslation();

  return (
    <div
      className="slate-100 max-w-full p-3 sm:p-6 grid grid-flow-row mb-10"
    >
      <div className=" w-full flex flex-row sm:flex-auto sm:justify-center items-center gap-6 z-10">
        <motion.div
          initial={{ opacity: 0, marginLeft: "-70em" }}
          animate={{ opacity: 1, marginLeft: "0" }}
          transition={{ duration: 0.5 }}
          className=" sm:hidden"
        >
          <GlitchClip disabled={isDisabled} duration={4500}>
            <GlitchSquiggly
              disabled={isDisabled}
              baseFrequency={0.02}
              duration={20}
              scaleNoise={30}
            >
              <Avatar
                showFallback
                isBordered
                name="Vernsz"
                alt="Vernsz"
                className=" w-32 h-32 text-xl font-bold"
                src={vernszPP}
              />
            </GlitchSquiggly>
          </GlitchClip>
        </motion.div>
        <motion.span
          initial={{ opacity: 0, marginRight: "-30em", position: "absolute" }}
          animate={{ opacity: 1, marginRight: "0", position: "relative" }}
          transition={{ duration: 0.5 }}
          className="w-full text-xl font-bold sm:hidden"
        >
          {t("introName")}
          <span className="underline decoration-blue-500">Vernsz</span>
        </motion.span>
        <div className="flex flex-row-reverse items-center">
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [-20, 20],
              transition: {
                y: {
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType:"mirror"
                },
              },
            }}
            className="hidden sm:flex w-96 h-52"
          >
            <GlitchClip duration={4500} className="w-full h-72">
              <GlitchSquiggly
                disabled={isDisabled}
                baseFrequency={0.02}
                duration={20}
                scaleNoise={30}
                className="w-full h-52 flex items-center justify-center"
              >
                <Avatar
                  showFallback
                  isBordered
                  color="primary"
                  name="Vernsz"
                  alt="Vernsz"
                  className=" w-48 h-48 text-xl font-bold border-3 border-blue-200"
                  src={vernszPP}
                />
              </GlitchSquiggly>
            </GlitchClip>
          </motion.div>
          <span className="hidden sm:block w-44  text-2xl font-bold">
            {t("introName")}
            <span className="underline decoration-blue-500">Vernsz</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;

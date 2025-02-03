"use client";

import Link from "next/link";
import { RocketIcon } from "lucide-react";
import { useState } from "react";
import { SOCIAL_LINKS } from "@/const";
import { motion, AnimatePresence } from "framer-motion";

const IntroModal = ({ show }: { show: boolean }) => {
  const [showIntro, setShowIntro] = useState(show);
  const [showWelcome, setShowWelcome] = useState(false);
  const [hideAll, setHideAll] = useState(!show);

  const handleClick = () => {
    document.cookie = "intro=Have a nice day;";
    setShowIntro(false);
    setInterval(() => {
      setShowWelcome(true);
      setInterval(() => {
        setShowWelcome(true);
        setHideAll(true);
        setShowIntro(false);
      }, 600);
    }, 500);
  };

  return (
    <div
      data-hide={hideAll}
      className="fixed bg-gradient inset-0 flex items-center justify-center z-50 text-white transition-all duration-500
      data-[hide=true]:opacity-0
      data-[hide=true]:pointer-events-none"
    >
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/20 p-2 backdrop-blur-xl rounded-full cursor-pointer"
                >
                  <Link href={item.link} target="_blank">
                    <item.icon size={30} className="text-white" />
                  </Link>
                </div>
              ))}
            </div>
            <h1 className="flex gap-4 flex-wrap justify-center text-6xl font-bold text-center">
              <span>Welcome to my</span>
              <span className="bg-gradient-to-t from-[#5f72bd] to-[#9b23ea] bg-clip-text text-transparent drop-shadow-lg">
                Portfolio Website
              </span>
            </h1>
            <button
              onClick={handleClick}
              className="flex overflow-hidden items-center gap-3 text-white font-semibold text-xl cursor-none mt-6 px-6 py-3 rounded-full bg-gradient-to-t from-[#5f72bd] to-[#9b23ea]"
            >
              <span className="transition-all duration-500">Discover More</span>
              <RocketIcon className="transition-all duration-500" />
            </button>
          </motion.div>
        )}

        {showWelcome && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="absolute text-6xl font-bold"
          >
            Welcome! 🚀
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroModal;

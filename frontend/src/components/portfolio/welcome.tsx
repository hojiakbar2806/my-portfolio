"use client";

import { SOCIAL_LINKS } from "@/const";
import { Typewriter } from "react-simple-typewriter";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { LucideIcon, MailIcon, Sparkles } from "lucide-react";
import { FC, memo } from "react";
import Link from "next/link";

const Welcome = () => {
  const text = [
    "Hi, my name is Hojiakbar",
    "I&apos;m 19 years old",
    "My goal is to become a fullstack developer",
    "I have 2 years of experience",
  ];

  return (
    <section id="Home" className="w-full flex justify-center gap-12">
      <div className="container flex items-center justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="flex flex-col gap-3 text-white text-8xl font-extrabold">
            <span>Fullstack</span>
            <span className="bg-gradient-to-t from-[#5f72bd] to-[#9b23ea] bg-clip-text text-transparent drop-shadow-lg">
              Developer
            </span>
          </h1>

          <p className="w-full text-white text-lg sm:text-2xl md:text-3xl leading-relaxed">
            <Typewriter words={text} loop={true} cursor />
          </p>

          <p className="w-full text-white/60 text-base sm:text-lg leading-relaxed">
            I specialize in building high-quality web applications with a focus
            on design, performance, and user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center mt-4">
            <CTAButton href="#contact" text="Contact" icon={MailIcon} />
            <CTAButton
              href="#portfolio?tab=projects"
              text="My Projects"
              icon={Sparkles}
            />
          </div>

          <div className="flex gap-6 justify-center md:justify-start">
            {SOCIAL_LINKS.map((item, index) => (
              <SocialLink key={index} Icon={item.icon} link={item.link} />
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-[800px] aspect-video flex justify-end overflow-hidden">
            <DotLottieReact
              loop
              autoplay
              src="https://lottie.host/56128511-a35e-4d82-aaf2-94baa14cb403/ORpDxa4DZq.lottie"
              className="scale-125 translate-x-32 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

type CTAButtonProps = {
  href: string;
  text: string;
  icon: LucideIcon;
};

const CTAButton: FC<CTAButtonProps> = memo(({ href, text, icon: Icon }) => (
  <Link href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon
            className={`w-4 h-4 text-gray-200 ${
              text === "Contact"
                ? "group-hover:translate-x-1"
                : "group-hover:rotate-45"
            } transform transition-all duration-300 z-10`}
          />
        </span>
      </div>
    </button>
  </Link>
));

CTAButton.displayName = "CTAButton";

type SocialLinkProps = {
  Icon: LucideIcon;
  link: string;
};

const SocialLink: FC<SocialLinkProps> = memo(({ Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

SocialLink.displayName = "SocialLink";
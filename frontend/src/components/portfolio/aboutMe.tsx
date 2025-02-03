"use client";

import React, { FC, memo, useMemo } from "react";
import { FileText, Code, Award, Globe, Sparkles } from "lucide-react";
import Shadow from "./shadow";
import Image from "next/image";

const AboutMe = () => {
  const YearExperience = new Date().getFullYear() - 2023;
  const totalProjects = 5;
  const totalCertificates = 2;

  const statsData = useMemo(
    () => [
      {
        Icon: Code,
        color: "from-[#6366f1] to-[#a855f7]",
        value: totalProjects,
        label: "Projects",
        description: "Innovative web solutions",
      },
      {
        Icon: Award,
        color: "from-[#a855f7] to-[#6366f1]",
        value: totalCertificates,
        label: "Certificates",
        description: "Professional skills validated",
      },
      {
        Icon: Globe,
        color: "from-[#6366f1] to-[#a855f7]",
        value: YearExperience,
        label: "Years Experience",
        description: "Continuous learning journey",
      },
    ],
    [totalProjects, totalCertificates, YearExperience]
  );

  return (
    <div id="About" className="container flex flex-col gap-24">
      <div className="relative text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          About Me
        </h2>
        <p className="mt-2 text-gray-400 text-lg flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          Transforming ideas into digital experiences
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Hello, I&apos;m
            </span>
            <span className="block mt-2 text-gray-200">
              Hojiakbar Nasriddinov
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
            I am a computer networking and telecommunications student passionate
            about front-end development. I focus on creating engaging digital
            experiences and strive to deliver the best solutions in every
            project.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <a href="/CV.pdf">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium shadow-lg hover:shadow-xl flex items-center gap-2">
                <FileText className="w-5 h-5" /> Download CV
              </button>
            </a>
            <a href="#Portfolio">
              <button className="px-6 py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium hover:bg-[#a855f7]/10 flex items-center gap-2">
                <Code className="w-5 h-5" /> View Projects
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
          <div
            className="relative group"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
                <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

                <Image
                  src="https://avatars.githubusercontent.com/u/108302808?v=4"
                  width={200}
                  height={200}
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  loading="lazy"
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                  <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                </div>
              </div>
            </div>
            <Shadow />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {statsData.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default memo(AboutMe);

type StatCardProps = {
  Icon: React.ComponentType<{ className?: string }>;
  color: string;
  value: number;
  label: string;
  description: string;
};

const StatCard: FC<StatCardProps> = memo(
  ({ Icon, value, label, description }) => (
    <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span className="text-4xl font-bold text-white">{value}</span>
      </div>
      <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">
        {label}
      </p>
      <p className="text-xs text-gray-400">{description}</p>
      <Shadow opacity={15} />
    </div>
  )
);

StatCard.displayName = "StatCard";
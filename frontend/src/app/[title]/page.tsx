"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Layers,
  Code2,
  Star,
} from "lucide-react";
import Image from "next/image";
import TECH_ICONS from "@/const";
import { IProject } from "@/type";

export default function ProjectDetails() {
  const router = useRouter();

  const project = {
    title: "Project 6",
    description: "This is a sample project.",
    img: "https://lh3.googleusercontent.com/pw/AP1GczPOasnWRl6T-UawHGJs7hMU2ZcMCsP95pKAYKHJgTLRzNJs4Hsx8XHVMJHS9d25RxaPsmFxDho1Tnqe9HwcfMdBSiz2WKUtvxuja0P_usOo9rJJyHaLQm-zOvteoDdgYH003WxSOvgUkG31mRnXMWm5=w1326-h679-s-no-gm?authuser=0",
    techStack: ["React", "TailwindCSS", "NextJS"],
    demo_link: "https://example.com",
    github_link: "https://github.com",
    features: ["qwqwqwqw"],
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto" />
          <h2 className="text-xl font-bold text-white mt-4">
            Loading Project...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full container min-h-screen bg-[#030014] px-6 py-10">
      <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
        <button
          onClick={() => router.replace("/")}
          className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>
        <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50">
          <span>Projects</span>
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
          <span className="text-white/90 truncate">{project.title}</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                {project.title}
              </h1>
              <div className="relative h-1 w-16 md:w-24">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-base md:text-lg text-gray-300/90 leading-relaxed">
                Program ini dirancang untuk mempermudah pengguna dalam
                menyelesaikan soal-soal Aritmatika secara otomatis dengan
                menggunakan bahasa pemrograman Python. Tujuan utama dari program
                ini adalah untuk membantu pengguna, terutama pelajar, dalam
                menyelesaikan soal-soal Aritmatika dengan lebih cepat dan mudah
              </p>
            </div>
          </div>
          <ProjectStats project={project} />
          <div className="flex flex-wrap md:gap-4">
            <a
              href={project.demo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
            >
              <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
              <ExternalLink className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
              <span className="relative font-medium">Live Demo</span>
            </a>

            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
            >
              <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-purple-600/10 to-pink-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
              <Github className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
              <span className="relative font-medium">Github</span>
            </a>
          </div>
          <div>
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-white/90 mt-[3rem] md:mt-0 flex items-center gap-2 md:gap-3">
                <Code2 className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                Technologies Used
              </h3>
              {project.techStack.length > 0 ? (
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.techStack.map((tech, index) => (
                    <TechBadge key={index} tech={tech} />
                  ))}
                </div>
              ) : (
                <p className="text-sm md:text-base text-gray-400 opacity-50">
                  No technologies added.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src={project.img}
            alt={project.title}
            priority
            width={500}
            height={250}
            className="w-full rounded-xl"
          />
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
            <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300" />
              Key Features
            </h3>
            {project.features.length > 0 ? (
              <ul className="list-none space-y-2">
                {project.features.map((feature, index) => (
                  <FeatureItem key={index} feature={feature} />
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 opacity-50">No features added.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const TechBadge = ({ tech }: { tech: string }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS.default;

  return (
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-1.5 md:gap-2">
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

const FeatureItem: FC<{ feature: string }> = ({ feature }) => {
  return (
    <li className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
      <div className="relative mt-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
        {feature}
      </span>
    </li>
  );
};
const ProjectStats: FC<{ project: IProject }> = ({ project }) => {
  const techStackCount = project.techStack.length || 0;
  const featuresCount = project?.features?.length || 0;

  return (
    <div className="flex gap-4 w-full bg-[#0a0a1a] rounded-xl  relative">
      <div className="flex-1 z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-xl border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
        <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">
          <Code2
            className="text-blue-300 w-4 h-4 md:w-6 md:h-6"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-blue-200">
            {techStackCount}
          </div>
          <div className="text-[10px] md:text-xs text-gray-400">
            Total Teknologi
          </div>
        </div>
      </div>

      <div className="flex-1 z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
        <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-full">
          <Layers
            className="text-purple-300 w-4 h-4 md:w-6 md:h-6"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-purple-200">
            {featuresCount}
          </div>
          <div className="text-[10px] md:text-xs text-gray-400">
            Fitur Utama
          </div>
        </div>
      </div>
    </div>
  );
};

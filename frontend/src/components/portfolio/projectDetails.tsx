"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, FC } from "react";
import {
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Layers,
  Code2,
} from "lucide-react";
import Image from "next/image";

type Project = {
  id: string;
  Title: string;
  Description: string;
  Img: string;
  TechStack: string[];
  Features: string[];
  Link: string;
  Github: string;
};

const TechBadge: FC<{ tech: string }> = ({ tech }) => (
  <span className="px-3 py-2 text-sm bg-blue-500/10 border border-blue-500/20 rounded-md text-blue-300">
    {tech}
  </span>
);

const FeatureItem: FC<{ feature: string }> = ({ feature }) => (
  <li className="text-gray-300 text-sm border-b border-gray-700 py-1">
    {feature}
  </li>
);

const ProjectStats: FC<{ project: Project }> = ({ project }) => (
  <div className="grid grid-cols-2 gap-4 bg-[#0a0a1a] p-4 rounded-xl border border-white/10">
    <div className="flex items-center space-x-3 p-2 border border-blue-500/20 rounded-lg">
      <Code2 className="text-blue-300 w-5 h-5" />
      <div>
        <p className="text-lg font-semibold text-blue-200">
          {project.TechStack.length}
        </p>
        <p className="text-xs text-gray-400">Total Teknologi</p>
      </div>
    </div>
    <div className="flex items-center space-x-3 p-2 border border-purple-500/20 rounded-lg">
      <Layers className="text-purple-300 w-5 h-5" />
      <div>
        <p className="text-lg font-semibold text-purple-200">
          {project.Features.length}
        </p>
        <p className="text-xs text-gray-400">Fitur Utama</p>
      </div>
    </div>
  </div>
);

const ProjectDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedProjects: Project[] = JSON.parse(
      localStorage.getItem("projects") || "[]"
    );
    const selectedProject = storedProjects.find((p) => p.id === id);
    setProject(selectedProject || null);
  }, [id]);

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
    <div className="min-h-screen bg-[#030014] px-6 py-10">
      <button
        onClick={() => router.back()}
        className="flex items-center space-x-2 text-white/70 hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      <div className="mt-4 flex items-center space-x-2 text-sm text-white/50">
        <span>Projects</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-white">{project.Title}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <div>
          <h1 className="text-4xl font-bold text-white">{project.Title}</h1>
          <p className="text-gray-400 mt-2">{project.Description}</p>
          <ProjectStats project={project} />

          <div className="flex gap-3 mt-6">
            <a
              href={project.Link}
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
            <a
              href={project.Github}
              target="_blank"
              className="px-4 py-2 bg-gray-700 text-white rounded-lg flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>

          <h3 className="text-lg font-semibold text-white mt-6">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.TechStack.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>

          <h3 className="text-lg font-semibold text-white mt-6">
            Key Features
          </h3>
          <ul className="mt-2 space-y-1">
            {project.Features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
          </ul>
        </div>

        <div className="relative w-full h-72 lg:h-full overflow-hidden rounded-xl border border-white/10">
          <Image
            src={project.Img}
            alt={project.Title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

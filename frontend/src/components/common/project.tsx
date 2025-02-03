import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type ProjectProps = {
  title: string;
  description: string;
  img: string;
  techStack: string[];
  demo: string;
  github: string;
};

export const ProjectCard: FC<ProjectProps> = (project) => {
  return (
    <div className="static group flex flex-col col-span-1 row-span-1 gap-2 border border-white/10 p-4 rounded-xl bg-black transition-all duration-300">
      <Image
        src={project.img}
        alt={project.title}
        width={500}
        height={250}
        className="w-full rounded-xl"
      />
      <div>
        <h2 className="text-[#e2d3fd] text-3xl font-semibold">
          {project.title}
        </h2>
        <h2 className="line-clamp-2">{project.description}</h2>
      </div>
      <div className="mt-auto flex justify-between items-center">
        <Link
          href={project.demo || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex cursor-none items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          <span className="text-sm font-medium">Live Demo</span>
          <ExternalLink className="w-4 h-4" />
        </Link>

        <Link
          href={`/${project.title}`}
          className="inline-flex cursor-none items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <span className="text-sm font-medium">Details</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

type ProjectWrapperProps = {
  children: React.ReactNode;
};

export const ProjectWrapper: FC<ProjectWrapperProps> = ({ children }) => {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4">
      {children}
    </div>
  );
};

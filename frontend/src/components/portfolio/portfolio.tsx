"use client";

import { useState, FC } from "react";
import { useSearchParams } from "next/navigation";
import { ProjectCard, ProjectWrapper } from "../common/project";
import { Award, Boxes, Code, GithubIcon, Sparkles } from "lucide-react";
import Shadow from "./shadow";
import Image from "next/image";

const Portfolio = () => {
  const searchParams = useSearchParams();
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Project 1",
      description: "This is a sample project.",
      img: "https://lh3.googleusercontent.com/pw/AP1GczPOasnWRl6T-UawHGJs7hMU2ZcMCsP95pKAYKHJgTLRzNJs4Hsx8XHVMJHS9d25RxaPsmFxDho1Tnqe9HwcfMdBSiz2WKUtvxuja0P_usOo9rJJyHaLQm-zOvteoDdgYH003WxSOvgUkG31mRnXMWm5=w1326-h679-s-no-gm?authuser=0",
      techStack: ["React", "TailwindCSS", "NextJS"],
      demo: "https://example.com",
      github: "https://github.com",
      features: ["qwqwqwqw"],
    },
    {
      title: "Project 2",
      description: "This is a sample project.",
      img: "https://lh3.googleusercontent.com/pw/AP1GczPOasnWRl6T-UawHGJs7hMU2ZcMCsP95pKAYKHJgTLRzNJs4Hsx8XHVMJHS9d25RxaPsmFxDho1Tnqe9HwcfMdBSiz2WKUtvxuja0P_usOo9rJJyHaLQm-zOvteoDdgYH003WxSOvgUkG31mRnXMWm5=w1326-h679-s-no-gm?authuser=0",
      techStack: ["React", "TailwindCSS", "NextJS"],
      demo: "https://example.com",
      github: "https://github.com",
      features: ["qwqwqwqw"],
    },
    {
      title: "Project 3",
      description: "This is a sample project.",
      img: "https://lh3.googleusercontent.com/pw/AP1GczPOasnWRl6T-UawHGJs7hMU2ZcMCsP95pKAYKHJgTLRzNJs4Hsx8XHVMJHS9d25RxaPsmFxDho1Tnqe9HwcfMdBSiz2WKUtvxuja0P_usOo9rJJyHaLQm-zOvteoDdgYH003WxSOvgUkG31mRnXMWm5=w1326-h679-s-no-gm?authuser=0",
      techStack: ["React", "TailwindCSS", "NextJS"],
      demo: "https://example.com",
      github: "https://github.com",
      features: ["qwqwqwqw"],
    },
    {
      title: "Project 4",
      description: "This is a sample project.",
      img: "https://lh3.googleusercontent.com/pw/AP1GczPOasnWRl6T-UawHGJs7hMU2ZcMCsP95pKAYKHJgTLRzNJs4Hsx8XHVMJHS9d25RxaPsmFxDho1Tnqe9HwcfMdBSiz2WKUtvxuja0P_usOo9rJJyHaLQm-zOvteoDdgYH003WxSOvgUkG31mRnXMWm5=w1326-h679-s-no-gm?authuser=0",
      techStack: ["React", "TailwindCSS", "NextJS"],
      demo: "https://example.com",
      github: "https://github.com",
      features: ["qwqwqwqw"],
    },
    {
      title: "Project 5",
      description: "This is a sample project.",
      img: "https://lh3.googleusercontent.com/pw/AP1GczPOasnWRl6T-UawHGJs7hMU2ZcMCsP95pKAYKHJgTLRzNJs4Hsx8XHVMJHS9d25RxaPsmFxDho1Tnqe9HwcfMdBSiz2WKUtvxuja0P_usOo9rJJyHaLQm-zOvteoDdgYH003WxSOvgUkG31mRnXMWm5=w1326-h679-s-no-gm?authuser=0",
      techStack: ["React", "TailwindCSS", "NextJS"],
      demo: "https://example.com",
      github: "https://github.com",
      features: ["qwqwqwqw"],
    },
    {
      title: "Project 6",
      description: "This is a sample project.",
      img: "https://lh3.googleusercontent.com/pw/AP1GczPOasnWRl6T-UawHGJs7hMU2ZcMCsP95pKAYKHJgTLRzNJs4Hsx8XHVMJHS9d25RxaPsmFxDho1Tnqe9HwcfMdBSiz2WKUtvxuja0P_usOo9rJJyHaLQm-zOvteoDdgYH003WxSOvgUkG31mRnXMWm5=w1326-h679-s-no-gm?authuser=0",
      techStack: ["React", "TailwindCSS", "NextJS"],
      demo: "https://example.com",
      github: "https://github.com",
      features: ["qwqwqwqw"],
    },
    {
      title: "Project 7",
      description: "Another cool project.",
      img: "https://lh3.googleusercontent.com/pw/AP1GczPOasnWRl6T-UawHGJs7hMU2ZcMCsP95pKAYKHJgTLRzNJs4Hsx8XHVMJHS9d25RxaPsmFxDho1Tnqe9HwcfMdBSiz2WKUtvxuja0P_usOo9rJJyHaLQm-zOvteoDdgYH003WxSOvgUkG31mRnXMWm5=w1326-h679-s-no-gm?authuser=0",
      techStack: ["React", "Next.js", "Framer Motion"],
      demo: "https://example.com",
      github: "https://github.com",
      features: ["qwqwqwqw"],
    },
    {
      title: "Project 8",
      description: "Another cool project.",
      img: "https://lh3.googleusercontent.com/pw/AP1GczPOasnWRl6T-UawHGJs7hMU2ZcMCsP95pKAYKHJgTLRzNJs4Hsx8XHVMJHS9d25RxaPsmFxDho1Tnqe9HwcfMdBSiz2WKUtvxuja0P_usOo9rJJyHaLQm-zOvteoDdgYH003WxSOvgUkG31mRnXMWm5=w1326-h679-s-no-gm?authuser=0",
      techStack: ["React", "Next.js", "Framer Motion"],
      demo: "https://example.com",
      github: "https://github.com",
      features: ["qwqwqwqw"],
    },
    {
      title: "Project 9",
      description: "Another cool project.",
      img: "https://lh3.googleusercontent.com/pw/AP1GczPOasnWRl6T-UawHGJs7hMU2ZcMCsP95pKAYKHJgTLRzNJs4Hsx8XHVMJHS9d25RxaPsmFxDho1Tnqe9HwcfMdBSiz2WKUtvxuja0P_usOo9rJJyHaLQm-zOvteoDdgYH003WxSOvgUkG31mRnXMWm5=w1326-h679-s-no-gm?authuser=0",
      techStack: ["React", "Next.js", "Framer Motion"],
      demo: "https://example.com",
      github: "https://github.com",
      features: ["qwqwqwqw"],
    },
  ];

  const tabs = [
    { name: "Projects", icon: Code },
    { name: "Certificates", icon: Award },
    { name: "Skils", icon: Boxes },
  ];

  const certificates = [
    { title: "Certificate 1", img: "/certificate1.jpg", icon: GithubIcon },
  ];

  const skilTabs = ["🔹 Hard skils", "🔹 Soft Skills", "🔹 Additional Skills"];

  const activeTab = searchParams.get("tab") || tabs[0].name;

  const activeSkilTab = searchParams.get("skil") || skilTabs[0];

  const techStacks = [
    { icon: "/icons/html.svg", skill: "HTML" },
    { icon: "/icons/css.svg", skill: "CSS" },
    { icon: "/icons/javascript.svg", skill: "JavaScript" },
    { icon: "/icons/tailwind.svg", skill: "Tailwind CSS" },
    { icon: "/icons/reactjs.svg", skill: "ReactJS" },
    { icon: "/icons/vite.svg", skill: "Vite" },
    { icon: "/icons/nodejs.svg", skill: "Node JS" },
    { icon: "/icons/bootstrap.svg", skill: "Bootstrap" },
    { icon: "/icons/MUI.svg", skill: "Material UI" },
    { icon: "/icons/vercel.svg", skill: "Vercel" },
  ];

  const softSkills = [
    { icon: "/icons/communication.svg", skill: "Communication" },
    { icon: "/icons/teamwork.svg", skill: "Teamwork" },
    { icon: "/icons/problem-solving.svg", skill: "Problem Solving" },
    { icon: "/icons/time-management.svg", skill: "Time Management" },
    { icon: "/icons/leadership.svg", skill: "Leadership" },
    { icon: "/icons/creativity.svg", skill: "Creativity" },
    {
      icon: "/icons/emotional-intelligence.svg",
      skill: "Emotional Intelligence",
    },
    { icon: "/icons/adaptability.svg", skill: "Adaptability" },
    { icon: "/icons/critical-thinking.svg", skill: "Critical Thinking" },
    { icon: "/icons/decision-making.svg", skill: "Decision Making" },
  ];

  const additionalSkills = [
    { icon: "/icons/ux-ui.svg", skill: "UX/UI Design" },
    { icon: "/icons/graphic-design.svg", skill: "Graphic Design" },
    { icon: "/icons/project-management.svg", skill: "Project Management" },
    { icon: "/icons/agile.svg", skill: "Agile & Scrum" },
    { icon: "/icons/seo.svg", skill: "SEO Optimization" },
    { icon: "/icons/content-creation.svg", skill: "Content Creation" },
    { icon: "/icons/marketing.svg", skill: "Digital Marketing" },
    { icon: "/icons/open-source.svg", skill: "Open Source Contribution" },
    { icon: "/icons/business-strategy.svg", skill: "Business Strategy" },
    { icon: "/icons/public-speaking.svg", skill: "Public Speaking" },
  ];

  const setActiveTab = (tab: string, type: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (type === "main") {
      params.set("tab", tab);
    } else {
      params.set("skil", tab);
    }
    window.history.pushState(null, "", `/?${params.toString()}`);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div
      id="Portofolio"
      className="w-full flex flex-col gap-6 items-center container text-white"
    >
      <div className="text-center lg:mb-8 mb-2 px-[5%]">
        <div className="inline-block relative group">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            My Portfolio
          </h2>
        </div>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          Transforming ideas into digital experiences
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>

      <ul className="w-full max-w-4xl relative flex justify-center gap-4 p-2 border border-white/10 rounded-xl">
        {tabs.map((tab, index) => (
          <li
            key={index}
            data-active={tab.name === activeTab}
            onClick={() => setActiveTab(tab.name, "main")}
            className={`flex-1 flex flex-col items-center justify-center p-4 rounded-lg hover:bg-white/10 transition-colors
              data-[active=true]:bg-white/10
              data-[active=true]:text-white`}
          >
            <span>
              <tab.icon className="w-5 h-5" />
            </span>
            {tab.name}
          </li>
        ))}
        <Shadow />
      </ul>
      <TabWrapper>
        <Tab active={activeTab === "Projects"}>
          <ProjectWrapper>
            {displayedProjects.map((item, index) => (
              <ProjectCard key={index} {...item} />
            ))}
          </ProjectWrapper>
          {projects.length > 2 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-8 cursor-none mx-auto block bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </Tab>

        <Tab active={activeTab === "Certificates"}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-[#1f1f1f] rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-300"
              ></div>
            ))}
          </div>
        </Tab>

        <Tab active={activeTab === "Skils"}>
          <div className="w-full flex flex-col border border-white/10 rounded-xl">
            <ul className="flex basis-1/3 gap-4 p-4 border-b border-white/10">
              {skilTabs.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => setActiveTab(tab, "skil")}
                  className=" flex-1 text-center hover:text-white/80 transition-colors p-4 bg-white/10 rounded-lg"
                >
                  {tab}
                </li>
              ))}
            </ul>
            <SkilsTabWrapper>
              <SkilsTab active={activeSkilTab === "🔹 Hard skils"}>
                {techStacks.map((tech, index) => (
                  <SkillCard key={index} icon={tech.icon} skill={tech.skill} />
                ))}
              </SkilsTab>
              <SkilsTab active={activeSkilTab === "🔹 Soft Skills"}>
                {softSkills.map((tech, index) => (
                  <SkillCard key={index} icon={tech.icon} skill={tech.skill} />
                ))}
              </SkilsTab>
              <SkilsTab active={activeSkilTab === "🔹 Additional Skills"}>
                {additionalSkills.map((tech, index) => (
                  <SkillCard key={index} icon={tech.icon} skill={tech.skill} />
                ))}
              </SkilsTab>
            </SkilsTabWrapper>
          </div>
        </Tab>
      </TabWrapper>
    </div>
  );
};

export default Portfolio;

const Tab: FC<{
  active: boolean;
  children: React.ReactNode;
}> = ({ active, children }) => {
  return (
    <div
      data-active={active}
      className="w-full flex flex-col items-center justify-center transition-all duration-300
      top-10 opacity-0 pointer-events-none
      data-[active=false]:absolute
      data-[active=true]:top-0
      data-[active=true]:z-10
      data-[active=true]:opacity-100
      data-[active=true]:pointer-events-auto"
    >
      {children}
    </div>
  );
};

const TabWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-full relative">{children}</div>;
};

const SkilsTab: FC<{ active: boolean; children: React.ReactNode }> = ({
  active,
  children,
}) => {
  return (
    <div
      data-active={active}
      className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-4 transition-all duration-300
      top-10 opacity-0 pointer-events-none
      data-[active=false]:absolute
      data-[active=true]:top-0
      data-[active=true]:z-10
      data-[active=true]:opacity-100
      data-[active=true]:pointer-events-auto"
    >
      {children}
    </div>
  );
};

const SkilsTabWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-full relative">{children}</div>;
};

const SkillCard: FC<{ icon: string; skill: string }> = ({ icon, skill }) => {
  return (
    <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <Image
          width={50}
          height={50}
          src={icon}
          alt={`${skill} icon`}
          className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
        />
      </div>
      <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
        {skill}
      </span>
    </div>
  );
};

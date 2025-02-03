import { Fragment } from "react";
import AboutMe from "@/components/portfolio/aboutMe";
import { Background } from "@/components/portfolio/background";
import PortfolioNavbar from "@/components/portfolio/navbar";
import IntroModal from "@/components/portfolio/introModal";
import Welcome from "@/components/portfolio/welcome";
import { cookies } from "next/headers";
import Portfolio from "@/components/portfolio/portfolio";
import { Contact } from "@/components/portfolio/contact";
import PortfolioFooter from "@/components/portfolio/footer";

export default async function Home() {
  const cookieStore = await cookies();
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-28 bg-[#030014]">
      <Fragment>
        <PortfolioNavbar />
        <Welcome />
        <AboutMe />
        <Portfolio />
        <Contact />
        <PortfolioFooter />
        <Background />
        <IntroModal show={!Boolean(cookieStore.get("intro"))} />
      </Fragment>
    </div>
  );
}

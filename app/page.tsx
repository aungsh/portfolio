import Congrats from "@/components/layout/Congrats";
import Contact from "@/components/layout/Contact";
import Education from "@/components/layout/Education";
import Experience from "@/components/layout/Experience";
import Hero from "@/components/layout/Hero";
import Now from "@/components/layout/Now";
import Projects from "@/components/layout/Projects";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Now />
        <Contact />
        <Congrats />
      </div>
    </>
  );
}

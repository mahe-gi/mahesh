import About from "@/components/About";
import Education from "@/components/Education";
import Notes from "@/components/notes/Notes";
import Projects from "@/components/Projects";
import TechStackComponent from "@/components/TechStack";

export default function Home() {
  return (
    <div>
      <Notes />
      <About />
      <TechStackComponent />
      <Projects />
      <Education />
    </div>
  );
}

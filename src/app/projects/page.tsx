import { ProjectCard2 } from "@/components/ProjectCard";
import { MyProjects } from "@/lib/Projects";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-xl sm:text-2xl my-2">My Projects 👨🏼‍💻</h1>
      <div className="flex flex-col gap-2">
        {MyProjects.map((p, index) => (
          <ProjectCard2
            key={index}
            title={p.projectName}
            description={p.projectDescription}
            githubLink={p.projectGithubLink}
            liveLink={p.projectLiveLink}
            techStack={p.projectTech}
            blogLink={p.projectBlogLink}
          />
        ))}
      </div>
    </div>
  );
}

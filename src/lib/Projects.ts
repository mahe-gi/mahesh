export type Projects = {
  projectName: string;
  projectDescription: string[];
  projectLogo: string;
  projectTech: string[];
  projectGithubLink: string;
  projectLiveLink?: string; // Optional if some projects don't have live links
  projectBlogLink?: string; // Optional if some projects don't have article links
};

export const MyProjects: Projects[] = [
  {
    projectName: "101dev-Blog Application",
    projectDescription: [
      "user Authentication using jwt and zod .",
      "created backend using serverless framework and deployed in cloudflare workers.",
      "implemented prisma accelarate connection polling for database querys.",
    ],
    projectLogo: "/blog101dev.jpg",
    projectTech: [
      "Typescript",
      "React",
      "Prisma",
      "PostgreSQL",
      "Hono",
      "Docker",
    ],
    projectGithubLink: "https://github.com/mahe-gi/blog",
    projectLiveLink: "https://101dev.tech",
  },
  {
    projectName: "Bookstore",
    projectDescription: [
      "An online book store /record manneger .",
      "created using MERN stack -CRUD application.",
    ],
    projectLogo: "/bookstore.jpg",
    projectTech: [
      "Typescript",
      "React",
      "Express",
      "MongoDB",
      "Mongoose",
      "Docker",
      "Express",
    ],
    projectGithubLink: "https://github.com/mahe-gi/bookstore",
    // projectLiveLink: "https://bookstore-mahe-gi.vercel.app/",
  },
];

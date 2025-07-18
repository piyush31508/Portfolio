import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Blogify – Full-Stack Blog Platform",
    description:
      "Built a secure blogging platform with Spring Boot and Vite. Features authentication, RESTful APIs, and pagination for scalable content delivery.",
    tags: ["Spring Boot", "MongoDB", "Vite", "TailwindCSS"],
    demoUrl: "https://blogify-five-murex.vercel.app/",
    githubUrl: "https://github.com/piyush31508/Blogify",
    image: new URL(`/projects/projects3.png`, import.meta.url).href,
  },
  {
    id: 2,
    title: "Flavor Express – Online Cafe",
    description:
      "Developed role-based dashboards, Razorpay payment integration, JWT auth, and real-time admin features using Express and React.",
    tags: ["React.js", "Express.js", "JWT", "Razorpay"],
    demoUrl: "https://flavor-express-git-master-pcs-projects-fd8a2d3a.vercel.app/",
    githubUrl: "https://github.com/piyush31508/Flavor-Express",
    image: new URL(`/projects/project5.png`, import.meta.url).href,
  },
  {
    id: 3,
    title: "Library Management System",
    description:
      "Created a Java-based system with Hibernate and MySQL to handle book inventory, user logins, borrowing history, and admin controls.",
    tags: ["Java", "Hibernate", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/piyush31508/Library-Management-System",
    image: new URL(`/projects/project1.png`, import.meta.url).href,
  },
  {
    id: 4,
    title: "Assistify – AI Chatbot",
    description:
      "Integrated Google Gemini API to build a conversational AI chatbot. Ensured secure messaging using JWT and Express-based APIs.",
    tags: ["React.js", "Express.js", "JWT", "Gemini API"],
    demoUrl: "https://assistify-sigma.vercel.app/",
    githubUrl: "https://github.com/piyush31508/Assistify",
    image: new URL(`/projects/project2.png`, import.meta.url).href,
  },
  {
    id: 5,
    title: "Online Banking System",
    description:
      "Designed a complete banking backend in Java using JDBC with features like account creation, money transfer, transaction logs, and loan management.",
    tags: ["Java", "JDBC", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/piyush31508/ANP-C8706/tree/main/Online_Banking",
    image: new URL(`/projects/project6.jpg`, import.meta.url).href,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-primary">Projects</span> I've Built
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These real-world projects showcase my ability to solve complex problems using modern full-stack technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl shadow-md border border-border overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-left text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex items-center justify-center space-x-4 mt-6">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground justify-center hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/piyush31508"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit mx-auto flex items-center gap-2"
          >
            See More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Maya Voice Assistant",
    description:
      "An AI-powered mobile voice assistant built with Python and Kivy. Supports multilingual interaction, speech recognition, and smart commands.",
    image: "/projects/maya.png", // place a thumbnail inside /public/projects/
    tags: ["Python", "Kivy", "Vosk", "TFLite"],
    demoUrl: null, // no live demo
    githubUrl: "https://github.com/CodewithIshan/Maya_voice_assistant",
  },
  {
    id: 2,
    title: "Student Management System",
    description:
      "A React-based system with registration, login, and dashboard features to manage student records efficiently.",
    image: "projects/sms.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: null,
    githubUrl: "https://github.com/CodewithIshan/student-management-system",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React and Tailwind CSS to showcase projects, skills, and achievements.",
    image: "/public/projects/portfolio.png",
    tags: ["React", "TailwindCSS", "Vite"],
    demoUrl: "https://your-portfolio-demo-link.netlify.app", // add when deployed
    githubUrl: "https://github.com/CodewithIshan/beautiful-react-tailwind-portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects that combine web development and data-driven thinking.  
          Each project reflects my focus on clean design, functionality, and real-world problem solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/CodewithIshan"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};


import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const projects = [
    {
      title: "Coza Store Clone",
      description: "A responsive e-commerce front-end for browsing fashion products with a clean, user-friendly design. Built with React.js and modern UI libraries.",
      image: project2,
      technologies: ["React.js", "Bootstrap", "API Integration"],
      liveLink: "https://coza-store-app.netlify.app/",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio site showcasing projects and skills with smooth navigation and elegant animations.",
      image: project3,
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://portfolio-site-design.netlify.app/",
      githubLink: "#",
    },
    {
      title: "Full Stack Project",
      description: "A comprehensive full-stack application demonstrating both frontend and backend skills with modern technologies and best practices.",
      image: project1,
      technologies: ["React.js", "Node.js", "REST API"],
      liveLink: "#",
      githubLink: "#",
    },
  ];
Aos.init();
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 text-lg">
              Some of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {projects.map((project, index) => (
              <Card
              data-aos="zoom-in"
                key={index}
                className="flex flex-col h-full overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Card } from "@/components/ui/card";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
  SiGit,
  SiWordpress,
} from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";

const TechStack = () => {
  const technologies = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Material UI", icon: SiMui, color: "#007FFF" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  ];

  const skills = [
    "PWA Development",
    "API Integration",
    "Responsive Design",
    "Version Control",
    "Agile Methodologies",
    "Performance Optimization",
  ];
  Aos.init();
  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 text-lg">
              Technologies and tools I work with
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <Card
                  data-aos="flip-down"
                  key={index}
                  className="p-6 flex flex-col items-center justify-center gap-4 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in glass"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <tech.icon
                    className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 "
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Skills & Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="
          p-4 text-center 
          transition-all duration-300 ease-in-out 
          hover:-translate-y-1 
          animate-fade-in glass 
          bg-transparent
          hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 
          hover:text-white
          shadow-md hover:shadow-lg
        "
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-medium">{skill}</span>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;

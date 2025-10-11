import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "ESCASA SOFTWARE HOUSE",
      location: "Faisalabad, Pakistan",
      period: "May 2025 - Present",
      description: [
        "Built responsive web interfaces using React.js and Bootstrap for cross-device compatibility",
        "Integrated RESTful APIs to enable dynamic and interactive front-end features",
        "Collaborated with Agile teams to deliver sprint-based development tasks efficiently",
        "Designed modular and reusable components to improve code maintainability and scalability",
        "Enhanced front-end performance through optimized rendering and clean architecture",
      ],
    },
    {
      title: "Frontend Developer",
      company: "THE PARADISE WORKSPACE",
      location: "Faisalabad, Pakistan",
      period: "Nov 2024 - May 2025",
      description: [
        "Developed and customized websites using WordPress and page builders like Elementor",
        "Created responsive layouts tailored to the needs of various business clients",
        "Gained hands-on experience with Git for version control and collaborative workflows",
        "Worked on small team projects, contributing to design, development, and deployment",
      ],
    },
  ];
  AOS.init();
  return (
    <section id="experience" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            {/* Mobile Vertical Line - Only visible on mobile */}
            <div className="md:hidden absolute left-4 sm:left-6 top-0 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 animate-fade-in ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  data-aos={
                    index % 2 === 0
                      ? "zoom-out-right"
                      : "zoom-out-left"
                  }
                  data-aos-delay={index * 200}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 sm:border-4 border-background z-10 shadow-lg"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ml-8 sm:ml-12 md:ml-0 ${index % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="p-4 sm:p-6 md:p-8 hover:shadow-elegant transition-all duration-300 group border-l-4 border-l-primary">
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="text-lg md:text-xl text-primary font-semibold mb-3">
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4 md:mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 md:space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-muted-foreground">
                            <span className="text-primary mt-1 flex-shrink-0">▹</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  {/* Spacer for desktop zigzag layout */}
                  <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
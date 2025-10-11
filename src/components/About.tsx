import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful, responsive interfaces with attention to detail",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
  ];
Aos.init();
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 " data-aos="fade-right">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Frontend Developer with hands-on experience building responsive and 
                user-friendly web applications. Currently working at <span className="text-primary font-semibold">ESCASA SOFTWARE HOUSE</span>, 
                where I develop modern web interfaces using React.js and integrate RESTful APIs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I hold a Bachelor's degree in Computer Science from Government College University 
                Faisalabad (2024) and am passionate about writing clean, maintainable code while 
                continuously improving UI/UX performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm also expanding my expertise into full-stack development, learning backend 
                technologies to become a more versatile developer.
              </p>
            </div>

            <div className="grid gap-6" >
              {features.map((feature, index) => (
                <Card
                data-aos="fade-left"
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in glass"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4" >
                    <div className="p-3 gradient-primary rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

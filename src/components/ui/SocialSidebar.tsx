import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

// Add smooth floating animation for first circle
const styles = `
  @keyframes smooth-float {
    0%, 100% { 
      transform: translateY(0px);
    }
    50% { 
      transform: translateY(-15px);
    }
  }
  
  .animate-smooth-float {
    animation: smooth-float 1.5s ease-in-out infinite;
  }
`;

const SocialSidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:mianahmad93000@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+923219300028",
      label: "Phone",
    },
    {
      icon: Github,
      href: "https://github.com/mianahmad93",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/muhammad-ahmad93/", 
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group relative animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`bg-white hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                index === 0 ? "animate-smooth-float" : ""
              }`}
            >
              <link.icon className="w-5 h-5 text-gray-800" />
            </div>
            
          </a>
        ))}
      </div>
      <div className="md:hidden fixed left-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`bg-white hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all duration-300 animate-fade-in ${
              index === 0 ? "animate-smooth-float" : ""
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <link.icon className="w-4 h-4 text-gray-800" />
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialSidebar;
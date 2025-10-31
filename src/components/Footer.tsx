import { Heart } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold gradient-text mb-2">Muhammad Ahmad</h3>
              <p className="text-sm text-muted-foreground">
                Frontend Developer | Building the web, one component at a time
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/muhammad-ahmad93/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:mianahmad93000@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-blue-500 animate-pulse-glow" /> by Muhammad Ahmad © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

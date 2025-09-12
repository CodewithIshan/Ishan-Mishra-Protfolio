import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 relative border-t border-border mt-12 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
      {/* Left: Copyright */}
      <p className="text-sm text-muted-foreground text-center md:text-left">
        &copy; {new Date().getFullYear()} Ishan Mishra. All rights reserved.
      </p>

      {/* Center: Social Links */}
      <div className="flex space-x-6">
        <a
          href="mailto:ishanmishra9005@gmail.com"
          className="hover:text-primary transition-colors"
        >
          <Mail />
        </a>
        <a
          href="https://linkedin.com/in/ishanmishra9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/CodewithIshan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <Github />
        </a>
      </div>

      {/* Right: Scroll to Top */}
      <a
        href="#hero"
        className="text-primary hover:text-primary/80 transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

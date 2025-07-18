import { ArrowUp, Github, Linkedin, Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 pt-8 flex flex-wrap justify-center items-center text-sm text-muted-foreground">
      <div>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/piyushchawla-webdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            Piyush Chawla
          </a>{" "}
          – Full Stack Developer. All rights reserved.
        </p>

        {/* Optional Social Icons Inline */}
        <div className="flex space-x-3 mt-2 justify-center">
          <a
            href="https://github.com/piyush31508"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/piyushchawla-webdev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://leetcode.com/u/piyush31508/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="hover:text-primary transition-colors"
          >
            <Code2 size={18} />
          </a>
        </div>
      </div>

      <a
        href="#hero"
        aria-label="Back to top"
        title="Back to Top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-sm justify-end"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

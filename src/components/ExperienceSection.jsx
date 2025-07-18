import { Briefcase, ExternalLink, Linkedin } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Experience</span> Timeline
        </h2>

        <div className="relative border-l border-primary/30 pl-6 space-y-12">

          {/* Harsh Hasthkala */}
          <div className="group relative">
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
              <Briefcase size={16} />
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-semibold">
                  Web Developer Intern –{" "}
                  <span className="text-primary">Harsh Hasthkala</span>
                </h3>
                <span className="text-sm text-muted-foreground">
                  May 2024 – August 2024
                </span>
              </div>
              <p className="text-muted-foreground text-left mb-3">
                Engineered responsive UI components in React.js with optimized loading and accessibility. 
                Enhanced frontend performance by 25% through lazy loading and effective state management. 
                Integrated 5+ REST APIs for real-time functionality. Participated in code reviews and peer sessions to elevate code quality.
              </p>

              <div className="flex flex-wrap gap-2 text-sm mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">React.js</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">REST API</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">State Management</span>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://harshhasthkala.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/harsh-hasthkala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  LinkedIn <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Oceansfay */}
          <div className="group relative">
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
              <Briefcase size={16} />
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-semibold">
                  Digital Marketing Intern –{" "}
                  <span className="text-primary">Oceans fay</span>
                </h3>
                <span className="text-sm text-muted-foreground">
                  August 2023 – September 2023
                </span>
              </div>
              <p className="text-muted-foreground text-left mb-3">
                Designed 5+ responsive landing pages using HTML/CSS for product promotions. 
                Boosted organic traffic by 20% through mobile optimization and content enhancements. 
                Managed ad creatives for 4+ social media campaigns, and created promotional banners and HTML email templates.
              </p>

              <div className="flex flex-wrap gap-2 text-sm mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">HTML</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">CSS</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Digital Marketing</span>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://oceansfay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  View Website <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/oceansfay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  LinkedIn <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

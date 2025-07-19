import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center"
        >
          About <span className="bg-gradient-to-r from-primary to-[#90D1CA] bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left - Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
              Full Stack Developer | Problem Solver | Tech Explorer
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed text-left">
              I'm <strong>Piyush Chawla</strong>, a detail-oriented developer skilled in building scalable, real-world applications using <strong>React.js</strong>, <strong>Spring Boot</strong>, and <strong>Node.js</strong>.
            </p>

            <p className="text-muted-foreground text-left text-lg leading-relaxed">
              My projects like <em>Blogify</em>, <em>Flavor Express</em>, and <em>Assistify</em> reflect my hands-on experience in full-stack development, API integration, and performance optimization.
            </p>

            <p className="text-muted-foreground text-left text-lg leading-relaxed">
              I have a solid understanding of <em>OOP</em>, <em>DSA</em>, and <em>DBMS</em>, and consistently practice on <em>LeetCode</em> to enhance my problem-solving skills.
            </p>

            <div className="flex flex-col justify-center sm:flex-row gap-4 pt-6">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1Ac17VFDgHvBw07u92dba2qYC03d--Urh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 font-medium transition-all duration-300"
              >
                View CV
              </a>
            </div>
          </motion.div>

          {/* Right - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Full-Stack Development",
                desc: "Built secure, responsive web apps using React, Node.js and Spring Boot.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "10+ Projects Completed",
                desc: "Deployed multiple real-world apps including Blogify, Assistify & more.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Internships & Freelance Work",
                desc: "Worked with Harsh Hasthkala & Oceansfay delivering production-ready UI and marketing solutions.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">{card.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-left">{card.title}</h4>
                    <p className="text-muted-foreground text-left">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

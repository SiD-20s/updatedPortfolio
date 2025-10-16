import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Code2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import avatarImage from "@/assets/avatar3.jpeg";

const skills = [
  "Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Java", "JavaScript", 
  "HTML", "CSS", "Tailwind CSS", "Bootstrap", "AWS (EC2, S3, IAM, VPC, CloudWatch)", "Docker", 
  "MySQL", "GitHub", "Git", "Github Actions", "Postman", "Figma", "IntelliJ", "VS Code"
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/SiD-20s" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/siddharth-b-bb6609258/" },
  { name: "LeetCode", icon: Code2, href: "https://leetcode.com/u/_siddharth__/" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/SidinTech" },
];

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Content - 60% */}
          <motion.div
            className="lg:col-span-3 text-center lg:text-left px-4 sm:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="text-gradient">Sid</span>
            </motion.h1>
            
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl text-portfolio-text-muted mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Siddharth B | SidinTech
            </motion.h2>
            
            <motion.div
              className="w-24 h-1 bg-portfolio-primary mx-auto lg:mx-0 mb-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
            
            <motion.p
              className="text-lg text-portfolio-text mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              MERN stack developer in the making, eager to craft scalable web apps, tackle real-world challenges, and keep growing through continuous learning.
            </motion.p>
            
            {/* Skills */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-sm font-semibold text-portfolio-text-muted mb-4 uppercase tracking-wider">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start max-w-full">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="bg-portfolio-surface-light border-portfolio-border text-portfolio-text hover:bg-portfolio-primary hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Currently Exploring */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <p className="text-portfolio-text-muted">
                <span className="text-portfolio-accent font-medium">Currently Exploring:</span>{" "}
                Cloud (AWS) and DevOps tools
              </p>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <h3 className="text-sm font-semibold text-portfolio-text-muted mb-4 uppercase tracking-wider">
                Let's Connect
              </h3>
              <p className="text-portfolio-text-muted mb-4">
                Explore my contributions, projects, and collaborations on:
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-portfolio-border bg-portfolio-card text-portfolio-text hover:bg-portfolio-primary hover:border-portfolio-primary hover:text-white transition-all duration-300 group"
                        asChild
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <Icon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                          {link.name}
                        </a>
                      </Button>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                >
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-portfolio-primary hover:bg-portfolio-primary-dark text-white glow-effect transition-all duration-300"
                    asChild
                  >
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=siddhartb.20@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Me
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Image - 40% */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-portfolio-primary glow-effect">
                <img
                  src={avatarImage}
                  alt="Siddharth B - CodeWithSid"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-portfolio-primary to-portfolio-secondary opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
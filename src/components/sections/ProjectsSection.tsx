import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "MERN DevOps Project – Habit Tracker CI/CD",
    description:
      "Integrating a Habit Tracker MERN application into a full CI/CD pipeline using DevOps tools. This project involves automated deployment, Docker containerization, shell scripting, GitHub Actions, and AWS services to ensure smooth development and delivery.",
    timeline: "Oct 2025 – Present (Work in Progress)",
    technologies: [
      "React.js",
      "MongoDB",
      "Express.js",
      "Docker",
      "AWS",
      "Shell Scripting",
      "Git",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/SiD-20s/DevopsInMERN.git",
    demoUrl: "",
  },

  {
    title: "E-commerce Website",
    description:
      "Fashion e-commerce website for customers and admins. Customers can browse, search, filter, and purchase products via PayPal. Admins can manage products, track orders, and monitor sales. Fully responsive across all devices.",
    timeline: "May 2025 – Jun 2025",
    technologies: ["React.js", "Tailwind CSS", "PayPal API"],
    githubUrl: "https://github.com/SiD-20s/e-com_frontend",
    demoUrl: "https://levant-lilac.vercel.app/",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Secure chat platform with real-time bi-directional messaging. Uses Socket.io for instant communication and JWT for user authentication. Features a responsive interface and ensures secure, seamless messaging between users.",
    timeline: "Jun 2025 – Jul 2025",
    technologies: ["MERN", "Socket.io", "Tailwind CSS", "DaisyUI"],
    githubUrl: "https://github.com/SiD-20s/chat-app",
    demoUrl: "",
  },
  {
    title: "File-Share",
    description:
      "Secure file sharing web app that allows users to upload files up to 2MB, optionally encrypt them, and send directly via email.",
    timeline: "Sept 2025 – Sept 2025",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "HyperUI",
      "Express.js",
      "Nodemailer",
      "Supabase",
      "Clerk",
    ],
    githubUrl: "https://github.com/SiD-20s/File-Share.git",
    demoUrl: "https://file-share-demo.vercel.app/",
  },
  {
    title: "ReadEase Browser Extension",
    description:
      "A lightweight browser extension built to learn vanilla JavaScript DOM manipulation. It allows users to customize background and text colors for better readability.",
    timeline: "Jan 2025 – Jan 2025",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl:
      "https://github.com/SiD-20s/Text-Background-Color-Customizer.git",
    demoUrl: "https://read-ease-demo.example.com",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Latest <span className="text-gradient">Work</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-portfolio-primary mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-portfolio-card border-portfolio-border hover:border-portfolio-primary transition-all duration-300 card-gradient">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-portfolio-text group-hover:text-portfolio-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-portfolio-text-muted">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{project.timeline}</span>
                    </div>
                  </div>
                  <CardDescription className="text-portfolio-text-muted">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-portfolio-surface-light border-portfolio-border text-portfolio-text hover:bg-portfolio-primary hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-portfolio-border bg-portfolio-card text-portfolio-text hover:bg-portfolio-primary hover:border-portfolio-primary hover:text-white transition-all duration-300 group"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      className="bg-portfolio-primary hover:bg-portfolio-primary-dark text-white transition-all duration-300 group"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-portfolio-border bg-portfolio-card text-portfolio-text hover:bg-portfolio-primary hover:border-portfolio-primary hover:text-white transition-all duration-300"
            asChild
          >
            <a
              href="https://github.com/SiD-20s?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

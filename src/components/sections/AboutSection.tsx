import { motion } from "framer-motion";
import { Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-portfolio-primary mx-auto mb-12 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-lg text-portfolio-text leading-relaxed mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A curious learner and aspiring MERN stack developer passionate about building impactful web applications and solving real-world problems. 
            I enjoy working with modern web technologies and I’m currently exploring cloud technology in AWS and DevOps tools. 
            Outside of coding, I like learning about personal finance, investing, and self-development while pursuing hobbies that keep me creative and balanced.
          </motion.p>
          
          <motion.div
            className="card-gradient p-8 rounded-2xl border border-portfolio-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-portfolio-text mb-4">
              Let's connect on Twitter to share ideas and grow together
            </h3>
            <Button
              variant="default"
              size="lg"
              className="bg-portfolio-primary hover:bg-portfolio-primary-dark text-white glow-effect transition-all duration-300 group"
              asChild
            >
              <a href="https://x.com/SidinTech" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Follow me on Twitter
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
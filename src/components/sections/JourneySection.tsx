import { motion } from "framer-motion";
import { GraduationCap, Code, Briefcase, Trophy, Cloud } from "lucide-react";

const journeySteps = [
  {
    icon: GraduationCap,
    title: "College Discovery",
    description: "My journey began in college, where I discovered a deep interest in programming and problem-solving through data structures and algorithms.",
  },
  {
    icon: Briefcase,
    title: "Industry Exposure",
    description: "In 2024, I gained industry exposure as an intern at GD Industries, where I learned to approach problems with a practical, solution-driven mindset.",
  },
  {
    icon: Trophy,
    title: "Technical Recognition",
    description: "Along the way, I've earned recognition by participating in prestigious competitions like the Smart India Hackathon, Maze Solver, and Line Follower, which further fueled my drive to keep learning.",
  },
  {
    icon: Code,
    title: "Personal Projects",
    description: "I built personal projects to sharpen my skills and quickly realized how much I enjoy bringing ideas to life through code.",
  },
  {
    icon: Cloud,
    title: "Current Exploration",
    description: "Currently, I am exploring Linux, Cloud (AWS), and DevOps to strengthen my foundation in modern software development and deployment practices.",
  },
];

export const JourneySection = () => {
  return (
    <section id="journey" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
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
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-portfolio-primary mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <div className="space-y-12">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full">
                  <div className={`card-gradient p-6 rounded-2xl border border-portfolio-border text-center lg:${!isEven ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-center gap-4 mb-4 justify-center lg:${!isEven ? 'justify-end' : 'justify-start'}`}>
                      <div className={`p-3 rounded-full bg-portfolio-primary/20 ${!isEven ? 'order-last' : ''}`}>
                        <Icon className="h-6 w-6 text-portfolio-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-portfolio-text">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-portfolio-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline connector */}
                <div className="hidden lg:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-portfolio-primary border-4 border-portfolio-surface" />
                  {index < journeySteps.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-portfolio-primary to-portfolio-secondary opacity-50" />
                  )}
                </div>
                
                <div className="flex-1 lg:block hidden" />
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          className="text-center mt-16 card-gradient p-8 rounded-2xl border border-portfolio-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-portfolio-text leading-relaxed">
            Today, as a fresher, I'm eager to apply this blend of technical skills, leadership experience, 
            and curiosity to meaningful projects and professional opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
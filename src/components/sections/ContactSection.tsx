import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/SiD-20", color: "hover:text-white" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/siddharth-b-bb6609258/", color: "hover:text-blue-400" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/SidinTech", color: "hover:text-blue-400" },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_cugeaea",     // ✅ replace with your EmailJS service ID
      "template_t2ureml",    // ✅ replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "FqxC2S_D-AYZ9oKCL"      // ✅ replace with your EmailJS public key
    );

    toast({
      title: "Message sent! 🎉",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again later.",
    });
  } finally {
    setIsSubmitting(false);
  }
};



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
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
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-portfolio-primary mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-portfolio-card border-portfolio-border card-gradient">
              <CardHeader>
                <CardTitle className="text-portfolio-text">Send me a message</CardTitle>
                <CardDescription className="text-portfolio-text-muted">
                  I'd love to hear about your projects and ideas!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-portfolio-surface-light border-portfolio-border text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-portfolio-surface-light border-portfolio-border text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-portfolio-surface-light border-portfolio-border text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-portfolio-primary hover:bg-portfolio-primary-dark text-white glow-effect transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-portfolio-text mb-6">
                Or connect with me on social media
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full justify-start border-portfolio-border bg-portfolio-card text-portfolio-text hover:bg-portfolio-primary hover:border-portfolio-primary hover:text-white transition-all duration-300 group"
                        asChild
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <Icon className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                          Follow me on {link.name}
                        </a>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            <motion.div
              className="card-gradient p-6 rounded-2xl border border-portfolio-border text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-portfolio-text-muted mb-4">
                Open to collaborations, freelance projects, and full-time opportunities
              </p>
              <Button
                variant="default"
                className="bg-portfolio-secondary hover:bg-portfolio-secondary/90 text-white font-medium"
                asChild
              >
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=siddhartb.20@gmail.com">
                  Email Me Directly
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Footer */}
        <motion.footer
          className="text-center mt-20 pt-8 border-t border-portfolio-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-portfolio-text-muted flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Siddharth B | © 2025
          </p>
        </motion.footer>
      </div>
    </section>
  );
};
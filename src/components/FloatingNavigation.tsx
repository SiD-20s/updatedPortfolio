import { motion } from "framer-motion";
import { Home, User, Briefcase, MapPin, Mail } from "lucide-react";
import { useState } from "react";

interface NavItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", icon: Home, href: "#hero" },
  { name: "About", icon: User, href: "#about" },
  { name: "Projects", icon: Briefcase, href: "#projects" },
  { name: "Journey", icon: MapPin, href: "#journey" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export const FloatingNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.slice(1));
    }
  };

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 z-50 rounded-full px-6 py-3 floating-nav"
      initial={{ y: 100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center space-x-4">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.slice(1);
          
          return (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`group relative flex flex-col items-center p-2 transition-all duration-300 ${
                isActive ? "text-portfolio-primary" : "text-portfolio-text-muted hover:text-portfolio-primary"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Icon className="h-5 w-5" />
              <span className="mt-1 text-xs hidden sm:block">{item.name}</span>
              
              {isActive && (
                <motion.div
                  className="absolute -bottom-1 h-1 w-6 rounded-full bg-portfolio-primary"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};
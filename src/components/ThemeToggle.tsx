import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-6 right-6 z-50 rounded-full border-portfolio-border bg-portfolio-card/80 hover:bg-portfolio-surface-light transition-all duration-300 backdrop-blur-sm"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4 text-portfolio-accent" />
        ) : (
          <Moon className="h-4 w-4 text-portfolio-primary" />
        )}
      </motion.div>
    </Button>
  );
};
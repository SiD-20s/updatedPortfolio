export const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/10 via-transparent to-portfolio-secondary/10 animate-pulse" />
      {/* Animated dots pattern */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-portfolio-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
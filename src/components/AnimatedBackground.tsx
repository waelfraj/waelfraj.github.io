import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  variant?: "default" | "hero" | "subtle" | "gradient";
  className?: string;
}

const AnimatedBackground = ({ variant = "default", className }: AnimatedBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* Floating orbs with enhanced effects - Style Cyber */}
      {variant === "hero" && (
        <>
          {/* Large cyan orb */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/25 via-primary/15 to-transparent rounded-full blur-3xl animate-float-rotate shadow-neon-blue" />
          
          {/* Orange accent orb */}
          <div 
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-accent/25 via-accent/15 to-transparent rounded-full blur-3xl animate-float shadow-neon-orange" 
            style={{ animationDelay: "-3s" }} 
          />
          
          {/* Medium cyan orb */}
          <div 
            className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-2xl animate-float" 
            style={{ animationDelay: "-1.5s" }} 
          />
          
          {/* Small orange orb */}
          <div 
            className="absolute top-3/4 left-1/3 w-[300px] h-[300px] bg-gradient-to-tr from-accent/20 via-accent/10 to-transparent rounded-full blur-xl animate-float-rotate" 
            style={{ animationDelay: "-5s" }} 
          />
          
          {/* Additional floating particles */}
          <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-primary/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "-2s" }} />
          <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-accent/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "-4s" }} />
          
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent" />
        </>
      )}

      {variant === "default" && (
        <>
          <div 
            className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-primary/8 via-primary/4 to-transparent dark:from-primary/15 dark:via-primary/8 rounded-full blur-3xl animate-pulse-slow"
          />
          <div 
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tl from-accent/8 via-accent/4 to-transparent dark:from-accent/15 dark:via-accent/8 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "-2s" }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "-4s" }}
          />
        </>
      )}

      {variant === "subtle" && (
        <>
          <div 
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent dark:from-primary/12 dark:via-primary/5 rounded-full blur-3xl animate-drift"
          />
          <div 
            className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-gradient-to-tl from-accent/5 via-accent/2 to-transparent dark:from-accent/12 dark:via-accent/5 rounded-full blur-3xl animate-drift"
            style={{ animationDelay: "-4s" }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-r from-primary/3 via-accent/3 to-primary/3 dark:from-primary/8 dark:via-accent/8 dark:to-primary/8 rounded-full blur-2xl animate-drift"
            style={{ animationDelay: "-6s" }}
          />
        </>
      )}

      {variant === "gradient" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent via-50% to-accent/5 dark:from-primary/12 dark:to-accent/12" />
          <div 
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-primary/8 via-primary/4 to-transparent dark:from-primary/18 dark:via-primary/8 rounded-full blur-3xl animate-pulse-slow"
          />
          <div 
            className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-accent/8 via-accent/4 to-transparent dark:from-accent/18 dark:via-accent/8 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "-3s" }}
          />
        </>
      )}

      {/* Enhanced grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Animated lines pattern - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-shimmer" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-shimmer" style={{ animationDelay: "-1s" }} />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent animate-shimmer" style={{ animationDelay: "-3s" }} />
        {/* Diagonal lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-12 animate-shimmer" style={{ animationDelay: "-1.5s" }} />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent -rotate-12 animate-shimmer" style={{ animationDelay: "-2.5s" }} />
      </div>

      {/* Enhanced Geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/30 rotate-45 animate-pulse-slow group-hover:border-primary/50" />
      <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-accent/30 rounded-full animate-pulse-slow" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-primary/25 rotate-12 animate-float" />
      <div className="absolute bottom-20 right-32 w-20 h-20 border-2 border-accent/25 rounded-lg rotate-45 animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-primary/20 rotate-45 animate-float-rotate" style={{ animationDelay: "-4s" }} />
      <div className="absolute bottom-1/3 left-1/4 w-14 h-14 border border-accent/20 rounded-full animate-float-rotate" style={{ animationDelay: "-5s" }} />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/40 rounded-full animate-float blur-sm" style={{ animationDelay: "-1s" }} />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-accent/40 rounded-full animate-float blur-sm" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/30 rounded-full animate-float blur-sm" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-3/4 right-1/3 w-2.5 h-2.5 bg-accent/35 rounded-full animate-float blur-sm" style={{ animationDelay: "-4s" }} />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          radial-gradient(at 20% 30%, hsl(217 91% 60% / 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 70%, hsl(142 71% 45% / 0.1) 0px, transparent 50%),
          radial-gradient(at 50% 50%, hsl(199 89% 48% / 0.08) 0px, transparent 50%)
        `
      }} />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;

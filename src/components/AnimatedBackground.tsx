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
          {/* Large cyan orb - Optimized */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-primary/12 to-transparent rounded-full blur-2xl animate-float-rotate" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />
          
          {/* Orange accent orb - Optimized */}
          <div 
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-accent/20 via-accent/12 to-transparent rounded-full blur-2xl animate-float" 
            style={{ animationDelay: "-3s", willChange: 'transform', transform: 'translateZ(0)' }} 
          />
          
          {/* Medium cyan orb - Optimized */}
          <div 
            className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-primary/15 via-primary/8 to-transparent rounded-full blur-xl animate-float" 
            style={{ animationDelay: "-1.5s", willChange: 'transform', transform: 'translateZ(0)' }} 
          />
          
          {/* Small orange orb - Optimized */}
          <div 
            className="absolute top-3/4 left-1/3 w-[300px] h-[300px] bg-gradient-to-tr from-accent/15 via-accent/8 to-transparent rounded-full blur-lg animate-float-rotate" 
            style={{ animationDelay: "-5s", willChange: 'transform', transform: 'translateZ(0)' }} 
          />
          
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent" />
        </>
      )}

      {variant === "default" && (
        <>
          <div 
            className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-br from-primary/6 via-primary/3 to-transparent rounded-full blur-2xl animate-pulse-slow"
            style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
          />
          <div 
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tl from-accent/6 via-accent/3 to-transparent rounded-full blur-2xl animate-pulse-slow"
            style={{ animationDelay: "-2s", willChange: 'opacity, transform', transform: 'translateZ(0)' }}
          />
        </>
      )}

      {variant === "subtle" && (
        <>
          <div 
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/4 via-primary/2 to-transparent rounded-full blur-2xl animate-drift"
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          />
          <div 
            className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-gradient-to-tl from-accent/4 via-accent/2 to-transparent rounded-full blur-2xl animate-drift"
            style={{ animationDelay: "-4s", willChange: 'transform', transform: 'translateZ(0)' }}
          />
        </>
      )}

      {variant === "gradient" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent via-50% to-accent/4" />
          <div 
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/6 via-primary/3 to-transparent rounded-full blur-2xl animate-pulse-slow"
            style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
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
      
      {/* Animated lines pattern - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ willChange: 'background-position' }} />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" style={{ animationDelay: "-2s", willChange: 'background-position' }} />
      </div>

      {/* Reduced Geometric shapes for performance */}
      <div className="absolute top-20 right-20 w-24 h-24 border border-primary/20 rotate-45" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
      <div className="absolute bottom-32 left-16 w-20 h-20 border border-accent/20 rounded-full" style={{ animationDelay: "-2s", willChange: 'opacity', transform: 'translateZ(0)' }} />
      
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

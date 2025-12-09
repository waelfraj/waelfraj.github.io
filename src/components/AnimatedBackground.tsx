import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  variant?: "default" | "hero" | "subtle" | "gradient";
  className?: string;
}

const AnimatedBackground = ({ variant = "default", className }: AnimatedBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* Floating orbs */}
      {variant === "hero" && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl animate-float" />
          <div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 dark:bg-accent/20 rounded-full blur-3xl animate-float" 
            style={{ animationDelay: "-3s" }} 
          />
          <div 
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 dark:bg-primary/15 rounded-full blur-2xl animate-float" 
            style={{ animationDelay: "-1.5s" }} 
          />
        </>
      )}

      {variant === "default" && (
        <>
          <div 
            className="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse-slow"
          />
          <div 
            className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "-2s" }}
          />
        </>
      )}

      {variant === "subtle" && (
        <>
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/3 to-transparent dark:from-primary/8 rounded-full blur-3xl animate-drift"
          />
          <div 
            className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent/3 to-transparent dark:from-accent/8 rounded-full blur-3xl animate-drift"
            style={{ animationDelay: "-4s" }}
          />
        </>
      )}

      {variant === "gradient" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 dark:from-primary/10 dark:to-accent/10" />
          <div 
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl animate-pulse-slow"
          />
        </>
      )}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;

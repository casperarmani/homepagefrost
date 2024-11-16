import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-100 shadow-lg overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
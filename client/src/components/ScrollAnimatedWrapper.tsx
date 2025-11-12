import { useScrollAnimation, AnimationType } from "@/hooks/useScrollAnimation";

interface ScrollAnimatedWrapperProps {
  children: React.ReactNode;
  animationType?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollAnimatedWrapper({
  children,
  animationType = "fade-in",
  delay = 0,
  threshold = 0.1,
  className = "",
}: ScrollAnimatedWrapperProps) {
  const animation = useScrollAnimation(animationType, { delay, threshold });

  return (
    <div ref={animation.ref} className={`${animation.className} ${className}`}>
      {children}
    </div>
  );
}

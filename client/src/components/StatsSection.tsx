import { useEffect, useState, useRef } from "react";
import SwissGrid from "./SwissGrid";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 50, suffix: "+", label: "PROJECTS DELIVERED" },
    { number: 25, suffix: "+", label: "HAPPY CLIENTS" },
    { number: 4, suffix: "", label: "TEAM MEMBERS" },
    { number: 3, suffix: "+", label: "YEARS OF EXCELLENCE" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 relative"
      data-testid="section-stats"
    >
      <SwissGrid />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              targetNumber={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
              delay={index * 100}
              data-testid={`stat-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCounterProps {
  targetNumber: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
  "data-testid"?: string;
}

function StatCounter({ targetNumber, suffix, label, isVisible, delay, "data-testid": testId }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, targetNumber, delay]);

  return (
    <div className="text-center" data-testid={testId}>
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground font-medium tracking-wider">
        {label}
      </div>
    </div>
  );
}

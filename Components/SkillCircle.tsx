import { useEffect, useState } from 'react';

interface SkillCircleProps {
  name: string;
  level: number;
  delay?: number;
}

const SkillCircle = ({ name, level, delay = 0 }: SkillCircleProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Animate the water level
      const animationTimer = setTimeout(() => {
        setAnimatedLevel(level);
      }, 200);
      return () => clearTimeout(animationTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [level, delay]);

  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedLevel / 100) * circumference;

  return (
    <div className={`flex flex-col items-center space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="relative w-32 h-32">
        {/* Background circle */}
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="8"
            fill="none"
          />
          {/* Animated water level */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#waterGradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-2000 ease-out"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
        </svg>

        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-blue-400">
            {Math.round(animatedLevel)}%
          </span>
        </div>
      </div>

      {/* Skill name */}
      <h3 className="text-white font-semibold text-center">{name}</h3>
    </div>
  );
};

export default SkillCircle;
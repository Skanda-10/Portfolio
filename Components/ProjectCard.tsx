import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleClick = () => {
    window.open(project.link, '_blank');
  };

  return (
    <Card
      className={`group cursor-pointer transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 bg-gray-900/50 border-gray-700 backdrop-blur-sm ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <CardContent className="p-0 relative overflow-hidden">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="text-center text-white p-4">
              <p className="text-sm leading-relaxed">{project.description}</p>
              <ExternalLink className="w-8 h-8 mx-auto mt-4 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
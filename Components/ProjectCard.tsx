'use client';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/Components/ui/card';

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

  const handleClick = () => {
    console.log('✅ Card clicked, redirecting to:', project.link);
    window.open(project.link, '_blank');
  };

  return (
    <div
      className="relative z-10"
      onClick={handleClick}
      onMouseEnter={() => {
        setIsHovered(true);
        console.log('🔥 Hover start');
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        console.log('💨 Hover end');
      }}
    >
      <Card className="cursor-pointer bg-gray-800 border border-blue-500 hover:bg-gray-700 transition-all duration-300">
        <CardContent className="p-0 relative overflow-hidden">
          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Visual overlay (does not block clicks) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

            {/* Hover Description */}
            {isHovered && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white p-4 text-center pointer-events-none">
                <p>{project.description}</p>
              </div>
            )}
          </div>

          {/* Text content */}
          <div className="p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 bg-blue-700/30 text-blue-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;

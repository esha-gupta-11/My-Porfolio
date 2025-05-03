import React, { useState } from 'react';
import { projects } from '../data/projects';
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
    
  const toggleProject = (projectId: string) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Featured works showcasing my skills and expertise"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={project.id} className="flex flex-col h-full" delay={index * 100}>
            <div className="relative overflow-hidden group h-48">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3F2305]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                      >
                        <Github size={16} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-semibold text-[#3F2305] dark:text-[#F5F5DC] mb-2">
                {project.title}
              </h3>
              <p className="text-[#3F2305]/80 dark:text-[#F5F5DC]/80 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-[#F5F5DC] dark:bg-[#3F2305] text-[#8B5A2B] dark:text-[#D2B48C] rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto">
                <button
                  onClick={() => toggleProject(project.id)}
                  className="flex items-center text-[#8B5A2B] dark:text-[#D2B48C] text-sm font-medium hover:underline"
                >
                  {expandedProject === project.id ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp size={16} className="ml-1" />
                    </>
                  ) : (
                    <>
                      <span>Show Details</span>
                      <ChevronDown size={16} className="ml-1" />
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {expandedProject === project.id && (
              <div className="p-6 pt-0 border-t border-[#F5F5DC] dark:border-[#3F2305]">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">Overview</h4>
                    <p className="text-[#3F2305]/80 dark:text-[#F5F5DC]/80 text-sm">
                      {project.details.overview}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">Key Features</h4>
                    <ul className="text-[#3F2305]/80 dark:text-[#F5F5DC]/80 text-sm space-y-1">
                      {project.details.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#8B5A2B] dark:text-[#D2B48C] mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="flex items-center">
                        <span>Live Demo</span>
                        <ExternalLink size={14} className="ml-1" />
                      </Button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex items-center">
                        <span>Source Code</span>
                        <Github size={14} className="ml-1" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
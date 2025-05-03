import React from 'react';
import { skills } from '../data/skills';
import Section from './ui/Section';
import Card from './ui/Card';
import { 
  Database, Server, Code, Terminal, FileCode, 
  Paintbrush, Network, GitBranch, Cloud, Flame 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'database': <Database size={24} />,
  'server': <Server size={24} />,
  'code': <Code size={24} />,
  'terminal': <Terminal size={24} />,
  'file-code': <FileCode size={24} />,
  'paintbrush': <Paintbrush size={24} />,
  'network': <Network size={24} />,
  'git-branch': <GitBranch size={24} />,
  'cloud': <Cloud size={24} />,
  'flame': <Flame size={24} />
};

const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies I work with"
      className="bg-[#F5F5DC]/30 dark:bg-[#3F2305]/30"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <Card key={skill.name} className="p-4 text-center" delay={index * 50}>
            <div className="flex justify-center mb-3">
              <div className="p-2 bg-[#8B5A2B]/10 dark:bg-[#8B5A2B]/20 rounded-md text-[#8B5A2B] dark:text-[#D2B48C]">
                {iconMap[skill.icon]}
              </div>
            </div>
            <h3 className="text-lg font-medium text-[#3F2305] dark:text-[#F5F5DC]">
              {skill.name}
            </h3>
          </Card>
        ))}
      </div>
      
      <Card className="mt-12 p-6" delay={500}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#3F2305]/80 dark:text-[#F5F5DC]/80 mb-6">
            As a Frontend developer, I specialize in building Frontend web applications using JavaScript, React, and TypeScript. 
            My expertise extends to React.js, modern CSS frameworks like Tailwind, and state management solutions.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-[#F5F5DC] dark:bg-[#3F2305] rounded-md">
              <h4 className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">Frontend</h4>
              <p className="text-sm text-[#3F2305]/70 dark:text-[#F5F5DC]/70">React, TypeScript</p>
            </div>
            <div className="text-center p-3 bg-[#F5F5DC] dark:bg-[#3F2305] rounded-md">
              <h4 className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">Backend</h4>
              <p className="text-sm text-[#3F2305]/70 dark:text-[#F5F5DC]/70">Node.js, Express</p>
            </div>
            <div className="text-center p-3 bg-[#F5F5DC] dark:bg-[#3F2305] rounded-md">
              <h4 className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">Database</h4>
              <p className="text-sm text-[#3F2305]/70 dark:text-[#F5F5DC]/70">MongoDB</p>
            </div>
            <div className="text-center p-3 bg-[#F5F5DC] dark:bg-[#3F2305] rounded-md">
              <h4 className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">Tools</h4>
              <p className="text-sm text-[#3F2305]/70 dark:text-[#F5F5DC]/70">Git, GitHub</p>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default Skills;
import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know who I am and what drives me"
      className="bg-[#F5F5DC]/30 dark:bg-[#3F2305]/30"
    >
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <div className="space-y-6 text-[#3F2305]/80 dark:text-[#F5F5DC]/80">
            <p className="text-lg">
            I'm a passionate frontend developer specializing in the React ecosystem, with a focus on creating modern, responsive, and user-centric web applications. With a strong command of React, TypeScript, Tailwind CSS, and component-driven architecture, I craft seamless digital experiences that balance performance, functionality, and beautiful UI design.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-[#8B5A2B] dark:text-[#D2B48C] mb-4">
                  Education
                </h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">
                      Bachelor of Science in Computer Application
                    </p>
                    <p className="text-[#3F2305]/80 dark:text-[#F5F5DC]/80">
                      Mahatma Gandhi Kashi Vidhyapith University
                    </p>
                  </li>
                  <li>
                    <p className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">
                       MERN Stack Developemt
                    </p>
                    <p className="text-[#3F2305]/80 dark:text-[#F5F5DC]/80">
                      GeeksForGeeks, 2024
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#8B5A2B] dark:text-[#D2B48C] mb-4">
                  Skills & Technologies
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-[#F5F5DC] dark:bg-[#3F2305] rounded-md text-center">
                    <span className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">React.js</span>
                  </div>
                  <div className="p-2 bg-[#F5F5DC] dark:bg-[#3F2305] rounded-md text-center">
                    <span className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">JavaScript</span>
                  </div>
                  <div className="p-2 bg-[#F5F5DC] dark:bg-[#3F2305] rounded-md text-center">
                    <span className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">Tailwind.css</span>
                  </div>
                  <div className="p-2 bg-[#F5F5DC] dark:bg-[#3F2305] rounded-md text-center">
                    <span className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default About;
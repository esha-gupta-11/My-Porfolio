import React, { useEffect, useState } from 'react';
import Button from './ui/Button';
import Img from '../assets/profilePic.jpeg';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F5F5DC]/30 dark:bg-[#3F2305]/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#D2B48C]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5A2B]/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3F2305] dark:text-[#F5F5DC] mb-4">
              Hello, I'm <span className="text-[#8B5A2B] dark:text-[#D2B48C]">Esha</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#6B4423] dark:text-[#D2B48C] mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-[#3F2305]/80 dark:text-[#F5F5DC]/80 mb-8 max-w-lg">
              I specialize in creating beautiful, responsive web applications with React and modern web technologies. 
              With full-stack knowledge, I build complete solutions that deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <img 
                src={Img}
                alt="Developer" 
                className="w-full h-full object-cover rounded-full border-4 border-[#D2B48C] dark:border-[#8B5A2B]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
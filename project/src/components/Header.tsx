import React, { useState, useEffect } from 'react';
import { navigation } from '../data/navigation';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Moon, Sun, Menu, X } from 'lucide-react';


const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check for dark mode preference
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    // Set up intersection observer for sections
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-60px 0px -60% 0px',
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrollPosition > 50 
        ? 'bg-white/90 dark:bg-[#3F2305]/90 backdrop-blur-md shadow-md py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/home" className="text-2xl font-bold text-[#8B5A2B] dark:text-[#D2B48C]">
            Esha
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                  text-[#3F2305] dark:text-[#F5F5DC] hover:text-[#8B5A2B] dark:hover:text-[#D2B48C] transition-colors
                  relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#8B5A2B] after:transition-all
                  ${activeSection === item.href.substring(1) 
                    ? 'after:w-full' 
                    : 'after:w-0 hover:after:w-full'}
                `}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-[#F5F5DC] dark:bg-[#3F2305] text-[#3F2305] dark:text-[#F5F5DC] hover:bg-[#D2B48C] dark:hover:bg-[#6B4423] transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-[#F5F5DC] dark:bg-[#3F2305] text-[#3F2305] dark:text-[#F5F5DC]"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-[#3F2305] dark:text-[#F5F5DC]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 top-[60px] bg-white dark:bg-[#3F2305] z-40 transition-transform duration-300 ease-in-out transform
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden
      `}>
        <nav className="flex flex-col items-center justify-center h-full">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`
                py-4 text-xl font-medium text-[#3F2305] dark:text-[#F5F5DC] hover:text-[#8B5A2B] dark:hover:text-[#D2B48C]
                ${activeSection === item.href.substring(1) ? 'text-[#8B5A2B] dark:text-[#D2B48C]' : ''}
              `}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
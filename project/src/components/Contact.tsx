import React, { useState } from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';
import { MapPin, Mail,  Send, Check } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have NavLink project in mind or want to chat? Feel free to reach out!"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-[#8B5A2B] dark:text-[#D2B48C] mb-6">
              Send Me NavLink Message
            </h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <Check size={32} className="text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-lg font-medium text-[#3F2305] dark:text-[#F5F5DC] mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-[#3F2305]/70 dark:text-[#F5F5DC]/70 text-center">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#3F2305] dark:text-[#F5F5DC] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-[#D2B48C] dark:border-[#8B5A2B] bg-white dark:bg-[#3F2305]/50 text-[#3F2305] dark:text-[#F5F5DC] focus:outline-none focus:ring-2 focus:ring-[#8B5A2B] dark:focus:ring-[#D2B48C]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#3F2305] dark:text-[#F5F5DC] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-[#D2B48C] dark:border-[#8B5A2B] bg-white dark:bg-[#3F2305]/50 text-[#3F2305] dark:text-[#F5F5DC] focus:outline-none focus:ring-2 focus:ring-[#8B5A2B] dark:focus:ring-[#D2B48C]"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#3F2305] dark:text-[#F5F5DC] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-[#D2B48C] dark:border-[#8B5A2B] bg-white dark:bg-[#3F2305]/50 text-[#3F2305] dark:text-[#F5F5DC] focus:outline-none focus:ring-2 focus:ring-[#8B5A2B] dark:focus:ring-[#D2B48C]"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#3F2305] dark:text-[#F5F5DC] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-[#D2B48C] dark:border-[#8B5A2B] bg-white dark:bg-[#3F2305]/50 text-[#3F2305] dark:text-[#F5F5DC] focus:outline-none focus:ring-2 focus:ring-[#8B5A2B] dark:focus:ring-[#D2B48C] resize-none"
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="flex items-center" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
        
        <div className="flex flex-col gap-6">
          <Card className="p-6" delay={200}>
            <h3 className="text-xl font-semibold text-[#8B5A2B] dark:text-[#D2B48C] mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-2 bg-[#8B5A2B]/10 dark:bg-[#8B5A2B]/20 rounded-md text-[#8B5A2B] dark:text-[#D2B48C] mr-3">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">Location</h4>
                  <p className="text-[#3F2305]/70 dark:text-[#F5F5DC]/70">Noida</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-[#8B5A2B]/10 dark:bg-[#8B5A2B]/20 rounded-md text-[#8B5A2B] dark:text-[#D2B48C] mr-3">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">Email</h4>
                  <NavLink to="mailto:hello@esha.dev" className="text-[#3F2305]/70 dark:text-[#F5F5DC]/70 hover:text-[#8B5A2B] dark:hover:text-[#D2B48C]">
                    eshagupta519@gmail.com
                  </NavLink>
                </div>
              </div>
              
           
            </div>
          </Card>
          
          <Card className="p-6 flex-grow" delay={400}>
            <h3 className="text-xl font-semibold text-[#8B5A2B] dark:text-[#D2B48C] mb-6">
              Let's Connect
            </h3>
            <p className="text-[#3F2305]/80 dark:text-[#F5F5DC]/80 mb-6">
              Follow me on social media or check out my work on various platforms.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <NavLink
                to="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-[#F5F5DC] dark:bg-[#3F2305] rounded-md hover:bg-[#D2B48C]/50 dark:hover:bg-[#8B5A2B]/50 transition-colors"
              >
                <span className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">GitHub</span>
              </NavLink>
              <NavLink
                to="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-[#F5F5DC] dark:bg-[#3F2305] rounded-md hover:bg-[#D2B48C]/50 dark:hover:bg-[#8B5A2B]/50 transition-colors"
              >
                <span className="font-medium text-[#3F2305] dark:text-[#F5F5DC]">LinkedIn</span>
              </NavLink>
            
             
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
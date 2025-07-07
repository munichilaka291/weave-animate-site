
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const socialIcons = gsap.utils.toArray('.social-icon');
    
    gsap.fromTo(socialIcons,
      { opacity: 0, scale: 0, rotation: -180 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%"
        }
      }
    );

    // Form animation
    gsap.fromTo(formRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  const socialLinks = [
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
  ];

  return (
    <section id="contact" className="portfolio-section min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={contactRef}>
            <h3 className="text-3xl font-semibold mb-8 text-purple-400">
              Ready to work together?
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              I'm always excited to collaborate on new projects and bring 
              innovative ideas to life. Whether you need a complete web 
              application or want to add some creative flair to your existing 
              project, let's discuss how we can work together.
            </p>
            
            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="social-icon p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 hover:border-purple-400/60 hover:scale-110 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
          
          <form ref={formRef} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none transition-colors duration-300 text-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none transition-colors duration-300 text-white"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none transition-colors duration-300 text-white resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

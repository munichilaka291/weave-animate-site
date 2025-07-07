
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProjectsSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projectCards = gsap.utils.toArray('.project-card');
    
    gsap.fromTo(projectCards,
      { opacity: 0, y: 100, rotationX: -15 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  const projects = [
    {
      title: "3D Portfolio Website",
      description: "Interactive portfolio built with Three.js and React, featuring particle systems and smooth animations.",
      tech: ["React", "Three.js", "GSAP", "TypeScript"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "from-blue-500 to-teal-500"
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning dashboard for data visualization and predictive analytics with interactive charts.",
      tech: ["Python", "React", "D3.js", "TensorFlow"],
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="projects" className="portfolio-section min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors duration-300">
                    Live Demo
                  </button>
                  <button className="px-6 py-2 border border-purple-400 hover:bg-purple-400 hover:text-black rounded-lg transition-all duration-300">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

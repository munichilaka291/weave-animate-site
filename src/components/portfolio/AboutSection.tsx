
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skills = gsap.utils.toArray('.skill-item');
    
    gsap.fromTo(skills,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  const skills = [
    'React & Next.js',
    'TypeScript',
    'Three.js & WebGL',
    'GSAP Animations',
    'Node.js',
    'Python',
    'UI/UX Design',
    'Cloud Architecture'
  ];

  return (
    <section id="about" className="portfolio-section min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div ref={aboutRef}>
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate full-stack developer with a love for creating immersive 
            digital experiences. With expertise in modern web technologies and a keen 
            eye for design, I transform complex ideas into elegant, functional solutions.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, 
            contributing to open-source projects, or experimenting with creative 
            coding and generative art.
          </p>
        </div>
        
        <div ref={skillsRef} className="space-y-4">
          <h3 className="text-3xl font-semibold mb-8 text-purple-400">Skills & Technologies</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="skill-item p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105"
              >
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

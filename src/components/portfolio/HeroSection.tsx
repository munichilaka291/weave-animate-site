
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Download } from 'lucide-react';

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 });
    
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Floating animation for the entire hero section
    gsap.to(heroRef.current, {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  const handleDownloadResume = () => {
    // Create a sample resume download - in a real scenario, you'd link to your actual resume file
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf'; // Update this path to your actual resume file
    link.download = 'Malleswari_Kurangi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="portfolio-section min-h-screen flex items-center justify-center relative">
      <div ref={heroRef} className="text-center z-10 max-w-4xl mx-auto px-6">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          Malleswari Kurangi
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
        >
          Full Stack Web Developer crafting digital experiences with modern technologies,
          <br />
          bringing ideas to life through code and creativity.
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            View My Work
          </button>
          <button className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300">
            Get In Touch
          </button>
          <button 
            onClick={handleDownloadResume}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex items-center gap-2 justify-center"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

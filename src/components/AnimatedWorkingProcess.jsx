import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiTarget, FiEdit3, FiEye, FiMessageSquare, FiCheckCircle, FiNavigation } from 'react-icons/fi';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedWorkingProcess = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "We discuss your vision, brand style, and audience via email, chat, or call, then provide a clear proposal with timelines, pricing, and deliverables.",
      icon: <FiTarget className="w-6 h-6" />,
      align: "right"
    },
    {
      id: 2,
      title: "Asset Collection",
      description: "You securely share raw footage, voiceovers, and materials. We guide you on formats and quality standards to ensure the best editing results.",
      icon: <FiEdit3 className="w-6 h-6" />,
      align: "left"
    },
    {
      id: 3,
      title: "Editing & Revisions",
      description: "We transform your footage with precise cuts, transitions, color grading, and effects. You review and provide feedback, and we fine-tune until perfect.",
      icon: <FiEye className="w-6 h-6" />,
      align: "right"
    },
    {
      id: 4,
      title: "Final Delivery",
      description: "Your video is delivered in your desired format, optimized for your chosen platforms, and ready to impress your audience.",
      icon: <FiCheckCircle className="w-6 h-6" />,
      align: "left"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    
    if (!container) return;

    // Detect if mobile device using matchMedia
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // Get all step elements and dots
    const steps = processSteps.map(step => container.querySelector(`#step-${step.id}`));
    const dots = container.querySelectorAll('.timeline-dot');

    // Reset function to hide all elements with horizontal positioning
    const resetAnimations = () => {
      steps.forEach(step => {
        if (step) {
          const stepElement = step;
          const align = stepElement.dataset.align;
          const xOffset = align === 'left' ? 100 : -100;
          gsap.set(step, { opacity: 0, x: xOffset, y: 0 });
        }
      });
      
      dots.forEach(dot => {
        gsap.set(dot, { scale: 0 });
      });
    };

    if (isMobile) {
      // On mobile, disable animations, show all steps and dots statically
      steps.forEach(step => {
        if (step) {
          gsap.set(step, { opacity: 1, x: 0, y: 0 });
        }
      });
      dots.forEach(dot => {
        gsap.set(dot, { scale: 1 });
      });

      // No scroll triggers on mobile
      return;
    }

    // On desktop, enable scroll-triggered animations
    resetAnimations();

    const triggers = [];
    steps.forEach((step, index) => {
      if (step) {
        const stepElement = step;
        const align = stepElement.dataset.align;
        const xOffset = align === 'left' ? 100 : -100;
        triggers.push(
          ScrollTrigger.create({
            trigger: step,
            start: 'top 80%',
            once: true, // Trigger only once
            onEnter: () => {
              gsap.to(step, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power2.out'
              });
              if (dots[index]) {
                gsap.to(dots[index], {
                  scale: 1,
                  duration: 0.5,
                  ease: 'back.out(1.7)'
                });
              }
            }
          })
        );
      }
    });

    return () => {
      triggers.forEach(trigger => trigger.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [processSteps]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-custom overflow-hidden">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Seamless Workflow
          </h2>
          <p className="text-lg mx-auto text-center text-purple-100/70 w-full md:w-[60ch]">
            From start to finish, we ensure your vision comes to life with unmatched precision, creativity, and efficiency.
          </p>
        </div>

        <div ref={containerRef} className="relative max-w-6xl mx-auto px-4 overflow-hidden">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-600 via-violet-700 to-violet-900 rounded-full"></div>
        
        {/* Process steps */}
        <div className="space-y-32 relative">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              id={`step-${step.id}`}
              className="relative flex items-center"
              data-align={step.align}
            >
              {/* Left/Right cards based on alignment */}
              <div className={`w-full md:w-5/12 ${step.align === 'left' ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}>
                <div className={`card hover:bg-neutral-800/30 transition-all duration-300 ${step.align === 'left' ? 'md:text-right' : ''}`}>
                  <div className={`flex items-center gap-4 mb-4 ${step.align === 'left' ? 'md:justify-end' : ''}`}>
                    <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center text-white text-2xl">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <span className="text-sm text-violet-300">Step {index + 1}</span>
                    </div>
                  </div>
                  <p className="text-violet-100/80 leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="timeline-dot w-6 h-6 bg-violet-600 rounded-full border-4 border-violet-950 shadow-lg shadow-violet-600/50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default AnimatedWorkingProcess;
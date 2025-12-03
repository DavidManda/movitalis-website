'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../layout/container';
import FadeIn from '../animations/fade-in';
import Badge from '../ui/badge';
import { SOCIAL_PROOF } from '@/lib/content';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonials = SOCIAL_PROOF.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {SOCIAL_PROOF.headline}
          </h2>

          {/* Product Hunt Badge */}
          <div className="flex justify-center mb-12">
            <Badge variant="default" className="bg-primary/10 border-primary/20">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary">{SOCIAL_PROOF.productHunt.badge}</span>
            </Badge>
          </div>
        </FadeIn>

        {/* Testimonial carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote mark */}
            <div className="text-6xl text-primary opacity-20 absolute top-4 left-4">"</div>

            {/* Testimonial content */}
            <div className="relative z-10 overflow-hidden">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  initial={{
                    x: direction > 0 ? 50 : -50,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: direction > 0 ? -50 : 50,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  <p className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                    {testimonials[currentTestimonial].quote}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-2">
                      <motion.button
                        onClick={prevTestimonial}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Previous testimonial"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                      </motion.button>
                      <motion.button
                        onClick={nextTestimonial}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Next testimonial"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentTestimonial ? 1 : -1);
                    setCurrentTestimonial(index);
                  }}
                  className={`h-2 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? 'bg-primary'
                      : 'bg-gray-300'
                  }`}
                  animate={{
                    width: index === currentTestimonial ? 32 : 8,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { FAQ } from '@/lib/content';
import { ChevronDown } from 'lucide-react';

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-200 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  // Generate FAQ schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.categories.flatMap(category =>
      category.questions.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FF6B35 100%)' }}>
          <Container>
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {FAQ.headline}
              </h1>
              <p className="text-xl text-white/90">
                {FAQ.subheadline}
              </p>
            </motion.div>
          </Container>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-4xl mx-auto space-y-16">
              {FAQ.categories.map((category, categoryIndex) => (
                <div key={category.title}>
                  <motion.h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  >
                    {category.title}
                  </motion.h2>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="divide-y divide-gray-200">
                      {category.questions.map((item, questionIndex) => (
                        <FAQItem
                          key={item.q}
                          question={item.q}
                          answer={item.a}
                          index={questionIndex}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <Container>
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help. Reach out to our support team anytime.
              </p>
              <a
                href="mailto:support@movitalis.app"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Support
              </a>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

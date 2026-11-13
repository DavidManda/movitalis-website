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
      className="border-b border-ink/10 last:border-b-0 px-6 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-ink group-hover:text-primary transition-colors pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-ink/50" />
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
            <p className="pb-6 text-ink/70 leading-relaxed">
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
      <main className="min-h-screen bg-ivory">
        {/* Hero Section */}
        <section className="pb-4 pt-10">
          <Container>
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-6">
                {FAQ.headline}
              </h1>
              <p className="text-xl text-ink/70">
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
                    className="text-2xl md:text-3xl font-bold text-ink mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  >
                    {category.title}
                  </motion.h2>
                  <div className="bg-ivory-deep rounded-3xl overflow-hidden">
                    <div className="divide-y divide-ink/10">
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
        <section className="py-16 md:py-24">
          <Container>
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-ink/70 mb-8">
                We're here to help. Reach out to our support team anytime.
              </p>
              <a
                href="mailto:dmanda@automata.ltd"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent-dark transition-colors"
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

// All content and messaging for the Movitalis landing page

export const HERO = {
  headline: "Train for a longer life, not just faster times",
  subheadline: "Improve the one fitness metric proven to predict longevity, with training designed to meet you where you are.",
  primaryCTA: "Download Free",
  secondaryCTA: "Learn How",
  availability: "Available on iPhone and Apple Watch",
};

export const VO2_EDUCATION = {
  headline: "What is VO₂ max, and why should you care?",
  tagline: "It\'s the strongest predictor of longevity we know of—and you can improve it",
  blocks: [
    {
      id: 'what',
      title: 'Your cardiovascular fitness score',
      description: 'VO₂ max measures how efficiently your body uses oxygen during exercise. It\'s the gold-standard measure of cardiorespiratory fitness.',
      icon: 'Microscope',
    },
    {
      id: 'why',
      title: 'The strongest longevity predictor',
      description: 'In a study of 122,007 patients (Mandsager et al., JAMA Network Open, 2018), low cardiorespiratory fitness carried a higher risk of death than smoking, diabetes, or heart disease—and the fittest had the lowest risk, with no upper limit.',
      icon: 'AlertTriangle',
    },
    {
      id: 'how',
      title: 'And you can improve it',
      description: 'The right mix of cardio and strength training at the right intensities can increase your VO₂ max—and add healthy years to your life.',
      icon: 'TrendingUp',
    },
  ],
};

export const FEATURES = {
  headline: "Everything you need to train smarter",
  subheadline: "Simple, science-backed tools for improving your longevity",
  items: [
    {
      id: 'vo2-tracking',
      title: 'Know Your Fitness Age',
      description: 'See the fitness age your VO₂ max corresponds to, next to your real age, and watch it change as your training adds up.',
      icon: 'Heart',
    },
    {
      id: 'smart-training',
      title: 'Get Stronger, Safely',
      description: 'Train hard enough to improve, but not so hard you burn out or get injured. Personalized intensity zones designed for sustainable progress.',
      icon: 'Zap',
    },
    {
      id: 'intensity-guidance',
      title: 'Save Time',
      description: 'A weekly plan sized to the time you have—you choose the hours, Movitalis splits them across endurance, cardio and strength.',
      icon: 'Target',
    },
    {
      id: 'effortless-tracking',
      title: 'Zero Effort Tracking',
      description: 'Just start your workout. Your Apple Watch records it and it shows up in Movitalis through Apple Health—no manual logging.',
      icon: 'Watch',
    },
  ],
};

export const HOW_IT_WORKS = {
  headline: "How it works",
  subheadline: "Three simple steps to a longer, healthier life",
  steps: [
    {
      number: 1,
      title: 'Start where you are',
      description: 'Movitalis reads the VO₂ max your Apple Watch measures',
      detail: 'No lab tests needed. Apple Watch estimates VO₂ max during outdoor walks, runs and hikes; Movitalis picks it up from Apple Health.',
    },
    {
      number: 2,
      title: 'Train with purpose',
      description: 'Follow your personalized weekly plan',
      detail: 'Smart mix of cardio and strength at the right intensities for your level. Designed to improve your VO₂ max sustainably.',
    },
    {
      number: 3,
      title: 'Watch your fitness age drop',
      description: 'Track your VO₂ max improving over time',
      detail: 'See your fitness age change and what the research says a higher VO₂ max is associated with: more healthy years.',
    },
  ],
};

export const COMPARISON = {
  headline: "Why Movitalis is different",
  subheadline: "Built for health and longevity, not competition",
  rows: [
    {
      feature: 'Focus',
      typical: 'Competition & aesthetics',
      movitalis: 'Longevity & healthspan',
    },
    {
      feature: 'Designed for',
      typical: 'Athletes & enthusiasts',
      movitalis: 'Regular people',
    },
    {
      feature: 'Key Metric',
      typical: 'Steps, calories',
      movitalis: 'VO₂ max',
    },
    {
      feature: 'Success Metric',
      typical: 'Faster times, weight loss',
      movitalis: 'A higher VO₂ max, for more healthy years',
    },
    {
      feature: 'Philosophy',
      typical: 'More is better',
      movitalis: 'Smarter is better',
    },
  ],
};

// Every quote here is a real, public review, quoted word for word and
// attributed to where it was posted. Never add a testimonial that isn't
// (fake reviews are an unfair commercial practice under EU law).
export const SOCIAL_PROOF = {
  headline: "Loved by people serious about longevity",
  productHunt: {
    // Wording of the official Product Hunt badge (public/product-hunt-badge.svg)
    badge: '#1 Product of the Week · Health & Fitness',
    category: 'Health & Fitness',
    link: 'https://www.producthunt.com/products/movitalis',
  },
  // App Store rating as shown on the Romanian storefront, where almost
  // all ratings are (apps.apple.com/ro, checked 2026-11-13)
  rating: '5.0 on the App Store · 51 ratings',
  // All written five-star App Store reviews (text and star rating read
  // from the App Store on 2026-11-13). Romanian ones are translated and
  // say so. Only real reviews with a star rating belong here.
  reviews: [
    {
      id: 'as-ellie',
      rating: 5,
      title: 'Awesome and useful',
      quote: 'Easy to use tool for tracking your exercise in a way that’s relevant to health and longevity. I especially love the clean design!',
      author: 'Ellie the med student',
      source: 'App Store · December 2023',
    },
    {
      id: 'as-veronica',
      rating: 5,
      title: 'Amazing',
      quote: 'I find the app very useful and easy to use. It helped me train in a more sustainable way. 5 stars!!!',
      author: 'Veronica Vanilla',
      source: 'App Store · July 2024',
    },
    {
      id: 'as-geany',
      rating: 5,
      title: 'Exactly what I was looking for',
      quote: 'I kept looking for an app that would make me more consistent with my training, and this one really does it well. I recommend it.',
      author: 'geanyhalav',
      source: 'App Store · June 2024 · translated from Romanian',
    },
    {
      id: 'as-misu',
      rating: 5,
      title: 'Congratulations, David!',
      quote: 'Thank you, David, for this app, which helps me a lot. It’s very friendly, and I really appreciate all the work you put in so that people interested in longevity and health through movement can benefit from it.',
      author: 'Misu Fotino',
      source: 'App Store · April 2025 · translated from Romanian',
    },
    {
      id: 'as-george',
      rating: 5,
      title: 'Amazing',
      quote: 'I love the longevity focus of this app',
      author: 'George Columbu',
      source: 'App Store · November 2025',
    },
    {
      id: 'as-sdtk',
      rating: 5,
      title: 'Great app, congratulations',
      quote: 'I managed to lose 3 kg and improve my VO2 max in 6 weeks',
      author: 'sdtk3233',
      source: 'App Store · July 2024 · translated from Romanian',
    },
    {
      id: 'as-ana',
      rating: 5,
      title: 'Super',
      quote: 'I like that I can see VO2 max on Apple Watch!!',
      author: 'anaananananananadjjsjekwkdksk',
      source: 'App Store · November 2025 · translated from Romanian',
    },
    {
      id: 'as-atasa',
      rating: 5,
      title: 'Formidable',
      quote: 'This program is a good way to give the body the balance we need. Thank you!',
      author: 'Atașa',
      source: 'App Store · December 2023 · translated from Romanian',
    },
  ],
};

export const FINAL_CTA = {
  headline: "Start training for a longer, healthier life",
  subheadline: "Join thousands improving their longevity with Movitalis.",
  primaryCTA: "Download Now",
  availability: "Free download • iPhone required • Apple Watch recommended",
};

export const FAQ = {
  headline: "Frequently Asked Questions",
  subheadline: "Everything you need to know about Movitalis",
  categories: [
    {
      title: "Getting Started",
      questions: [
        {
          q: "Do I need an Apple Watch?",
          a: "Apple Watch is recommended: it measures VO₂ max and runs the Movitalis watch app with live intensity guidance. Without one, workouts recorded by other apps and devices (Garmin, COROS, Strava and others) still appear in Movitalis through Apple Health."
        },
        {
          q: "What iPhone and Apple Watch versions are supported?",
          a: "Movitalis requires iOS 17 or later on iPhone and watchOS 10.2 or later on Apple Watch."
        },
        {
          q: "Is Movitalis free?",
          a: "Movitalis is free to download. New accounts get the 8-week starter program free, with no card needed. After that, tracking and analysis of your workouts stay free, and the personalized training plan requires Movitalis Pro. Prices are shown in the app before you buy, and purchases are handled by Apple."
        },
      ],
    },
    {
      title: "Training & Fitness",
      questions: [
        {
          q: "I'm not athletic—is this for me?",
          a: "Absolutely! Movitalis is designed for regular people, not athletes. We meet you where you are and build sustainable plans based on your current fitness level. Our users range from complete beginners to experienced exercisers."
        },
        {
          q: "How much time do I need to commit per week?",
          a: "You choose. During setup you pick your weekly training time and the plan is built around it—most people start somewhere between 2 and 5 hours a week. Consistency matters more than volume."
        },
        {
          q: "What types of exercises do I need to do?",
          a: "Movitalis combines cardio (running, cycling, swimming, etc.) and strength training. We'll guide you on the right mix and intensities for your fitness level. You can do activities you enjoy—no specific equipment required."
        },
        {
          q: "How quickly will I see results?",
          a: "It varies from person to person. Training studies typically find measurable VO₂ max improvements after roughly 8-12 weeks of consistent training, which is why the starter program runs 8 weeks. Movitalis shows an estimate based on your own data, not a promise."
        },
      ],
    },
    {
      title: "VO₂ Max & Science",
      questions: [
        {
          q: "What exactly is VO₂ max?",
          a: "VO₂ max measures how efficiently your body uses oxygen during intense exercise. It's considered the gold standard for cardiovascular fitness and is measured in milliliters of oxygen per kilogram of body weight per minute (ml/kg/min)."
        },
        {
          q: "Why is VO₂ max important for longevity?",
          a: "In a study of 122,007 patients (Mandsager et al., JAMA Network Open, 2018), low cardiorespiratory fitness carried a higher risk of death than smoking, diabetes, or heart disease, and higher fitness was associated with lower mortality with no upper limit. These are associations across large groups, not a guarantee for any one person."
        },
        {
          q: "How accurate is Apple Watch VO₂ max measurement?",
          a: "Apple Watch estimates VO₂ max using heart rate data during outdoor walks, runs, or hikes. While not as precise as lab testing, studies show it's accurate enough for tracking trends and improvements over time, which is what matters most for training."
        },
        {
          q: "What's a good VO₂ max score?",
          a: "It varies by age and sex. For example, a 35-year-old man with a VO₂ max above 42 is considered 'good,' while above 50 is 'excellent.' Movitalis shows you where you stand relative to your age group and helps you improve from your baseline."
        },
      ],
    },
    {
      title: "Using the App",
      questions: [
        {
          q: "Do I need to manually log workouts?",
          a: "Nope! When you wear your Apple Watch during workouts, everything syncs automatically to Movitalis. Just start your workout on your watch like normal—we handle the rest. No manual entry required."
        },
        {
          q: "Can I use Movitalis with other fitness apps?",
          a: "Yes! Movitalis integrates with Apple Health, so data from other apps that write to Apple Health will be visible. However, for the best experience and most accurate VO₂ max tracking, we recommend using Apple's Workout app during exercise."
        },
        {
          q: "Will Movitalis replace my current fitness tracker?",
          a: "Movitalis is designed to complement your Apple Watch, not replace it. We focus specifically on VO₂ max improvement and longevity training. You can continue using other apps for specific goals like running pace, cycling power, etc."
        },
      ],
    },
    {
      title: "Privacy & Support",
      questions: [
        {
          q: "What data does Movitalis collect?",
          a: "Your Apple Health data is read on your phone and stays there unless you choose to sync it. Your account stores your email, name, plan and progress. We never sell personal data. See the Privacy Policy for the full details."
        },
        {
          q: "How do I contact support?",
          a: "Email us at dmanda@automata.ltd. We usually reply within a couple of working days."
        },
        {
          q: "Can I delete my account and data?",
          a: "Yes. You can delete your account and its data at any time from the app's settings, or by emailing us."
        },
      ],
    },
  ],
};

export const FOOTER = {
  product: {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Download', href: 'https://apps.apple.com/ro/app/movitalis/id6470913447' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
  social: {
    title: 'Social',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/movitalis' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@movitalis' },
    ],
  },
  copyright: `© ${new Date().getFullYear()} PROIECT AUTOMATA S.R.L. All rights reserved.`,
};

'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion';
import { Heart, Activity, TrendingUp } from 'lucide-react';

interface WatchMockupProps {
  className?: string;
  vo2max?: number;
  heartRate?: number;
}

export default function WatchMockup({
  className = '',
  vo2max = 45,
  heartRate = 142,
}: WatchMockupProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl"
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Watch body */}
      <div className="relative w-[280px] h-[340px] mx-auto">
        {/* Watch case */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl p-3">
          {/* Watch screen */}
          <div
            className="relative w-full h-full rounded-[2rem] overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            }}
          >
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-4 text-white/60 text-xs">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-white/60" />
                <div className="w-1 h-1 rounded-full bg-white/60" />
                <div className="w-1 h-1 rounded-full bg-white/60" />
              </div>
            </div>

            {/* Main content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-12">
              {/* App icon */}
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg"
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: [1, 1.05, 1],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Activity className="w-8 h-8 text-white" />
              </motion.div>

              {/* VO2 Max display */}
              <div className="text-center mb-6">
                <div className="text-white/60 text-xs mb-1">VO₂ Max</div>
                <motion.div
                  className="text-5xl font-bold text-white mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {vo2max}
                </motion.div>
                <div className="text-white/60 text-xs">ml/kg/min</div>
              </div>

              {/* Stats */}
              <div className="w-full space-y-3">
                {/* Heart rate */}
                <motion.div
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-white/80 text-xs">Heart Rate</span>
                  </div>
                  <span className="text-white font-semibold text-sm">
                    {heartRate} BPM
                  </span>
                </motion.div>

                {/* Trend */}
                <motion.div
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-white/80 text-xs">This Week</span>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">
                    +2.3%
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Digital crown indicator */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gray-700 rounded-l-full" />
          </div>
        </div>

        {/* Watch band */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-xl" />
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-t from-gray-700 to-gray-800 rounded-b-xl" />
      </div>
    </motion.div>
  );
}

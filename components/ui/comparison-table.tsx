'use client';

import ScrollReveal from '../animations/scroll-reveal';
import { Check, X } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  typical: string;
  movitalis: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Feature</th>
              <th className="text-center py-4 px-6 text-gray-600 font-semibold">Typical Trackers</th>
              <th className="text-center py-4 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 font-semibold text-primary">
                Movitalis
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.feature}
                className="border-b border-gray-100 hover:bg-white transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                <td className="py-4 px-6 text-center text-gray-600">{row.typical}</td>
                <td className="py-4 px-6 text-center bg-gradient-to-r from-primary/5 to-secondary/5 font-semibold text-gray-900">
                  {row.movitalis}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-6">
        {rows.map((row, index) => (
          <ScrollReveal key={row.feature} delay={index * 0.1}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gray-100 px-4 py-3">
                <h4 className="font-bold text-gray-900">{row.feature}</h4>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Typical Trackers</span>
                  <span className="text-gray-900">{row.typical}</span>
                </div>
                <div className="flex items-center justify-between bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-3">
                  <span className="font-semibold text-primary">Movitalis</span>
                  <span className="font-semibold text-gray-900">{row.movitalis}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

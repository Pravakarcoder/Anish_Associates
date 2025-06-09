"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  GraduationCap, 
  Heart, 
  ShoppingBag,
  Landmark,
  Factory,
  Home,
  Building
} from 'lucide-react';
import { motion } from '@/lib/motion';

const industries = [
  {
    icon: <Building2 className="h-8 w-8" />,
    name: "Construction",
    description: "Specialized accounting for construction projects and contractors",
    link: "/industries#construction"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    name: "NGOs",
    description: "Transparent financial management for non-profit organizations",
    link: "/industries#ngos"
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    name: "Education",
    description: "Financial services for schools, colleges and training institutes",
    link: "/industries#education"
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    name: "Retail",
    description: "Accounting solutions for retail businesses and franchises",
    link: "/industries#retail"
  },
  {
    icon: <Landmark className="h-8 w-8" />,
    name: "Banking",
    description: "Specialized auditing for financial institutions",
    link: "/industries#banking"
  },
  {
    icon: <Factory className="h-8 w-8" />,
    name: "Manufacturing",
    description: "Cost accounting and financial management for manufacturers",
    link: "/industries#manufacturing"
  },
  {
    icon: <Home className="h-8 w-8" />,
    name: "Real Estate",
    description: "Financial services for property development and management",
    link: "/industries#real-estate"
  },
  {
    icon: <Building className="h-8 w-8" />,
    name: "Hospitality",
    description: "Accounting solutions for hotels, restaurants and tourism",
    link: "/industries#hospitality"
  }
];

export default function IndustriesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600">
            Our expertise spans across diverse industries in Nepal, providing specialized financial solutions to meet sector-specific challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link 
                href={industry.link}
                className="block p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-[#1A365D]/5 text-center h-full"
              >
                <div className="flex justify-center mb-4 text-[#D4AF37]">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1A365D] mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {industry.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
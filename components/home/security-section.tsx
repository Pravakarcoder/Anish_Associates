"use client";

import { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  FileCheck, 
  CheckCircle2 
} from 'lucide-react';
import { motion } from '@/lib/motion';

export default function SecuritySection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[#D4AF37] font-semibold mb-2">Data Security & Compliance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">
              Your Financial Data Security Is Our Priority
            </h2>
            <p className="text-gray-600 mb-8">
              At NFA Partners, we implement the highest standards of data protection and privacy compliance to ensure your sensitive financial information remains secure at all times.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#1A365D]/10 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-[#1A365D]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">GDPR Readiness</h3>
                  <p className="text-gray-600">
                    Although Nepal is not directly subject to GDPR, we voluntarily adhere to its principles to ensure global best practices in data protection.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1A365D]/10 p-3 rounded-full mr-4">
                  <Lock className="h-6 w-6 text-[#1A365D]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">Encrypted Client Portal</h3>
                  <p className="text-gray-600">
                    Our secure client portal uses end-to-end encryption for document sharing and communication, ensuring your data remains confidential.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1A365D]/10 p-3 rounded-full mr-4">
                  <FileCheck className="h-6 w-6 text-[#1A365D]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">Confidentiality Agreements</h3>
                  <p className="text-gray-600">
                    All client engagements are covered by comprehensive confidentiality agreements, providing legal protection for your business information.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold text-[#1A365D] mb-6">Our Security Commitments</h3>
            
            <div className="space-y-4">
              {[
                "Regular security audits and vulnerability assessments",
                "Staff training on data protection and privacy best practices",
                "Secure, redundant data storage with disaster recovery",
                "Strict access controls based on need-to-know principles",
                "Compliance with all Nepalese data protection regulations",
                "Transparent data handling policies and procedures",
                "Incident response plan for potential security breaches"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-[#1A365D]/5 rounded-lg">
              <p className="text-[#1A365D] font-medium">
                "Financial data is among the most sensitive information for any business. We treat your data with the same care and confidentiality as we would our own."
              </p>
              <p className="text-gray-600 mt-2 text-sm">— Bikash Sharma, Head of Data Security</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
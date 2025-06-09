"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ClipboardCheck, 
  ScrollText, 
  BarChart, 
  BookOpen, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { motion } from '@/lib/motion';

const services = [
  {
    icon: <ClipboardCheck className="h-10 w-10" />,
    title: "Auditing Services",
    description: "Comprehensive financial audits that ensure accuracy, compliance, and transparency in your financial reporting.",
    link: "/services#auditing"
  },
  {
    icon: <ScrollText className="h-10 w-10" />,
    title: "Tax Advisory",
    description: "Strategic tax planning and compliance services tailored to Nepal's tax regulations and your business needs.",
    link: "/services#tax"
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Financial Reporting",
    description: "Clear, accurate financial statements and reports that meet local and international standards.",
    link: "/services#reporting"
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Bookkeeping",
    description: "Meticulous recording of financial transactions ensuring your books are always accurate and up-to-date.",
    link: "/services#bookkeeping"
  },
  {
    icon: <FileCheck className="h-10 w-10" />,
    title: "Compliance Services",
    description: "Navigate complex regulatory requirements with our specialized compliance consulting and implementation.",
    link: "/services#compliance"
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Internal Control Systems",
    description: "Robust internal control frameworks to safeguard assets and enhance operational efficiency.",
    link: "/services#internal-control"
  }
];

export default function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600">
            We provide a comprehensive suite of financial services designed to help Nepalese businesses thrive in today's complex economic landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg group">
                <CardHeader>
                  <div className="text-[#D4AF37] mb-4 group-hover:text-[#1A365D] transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-[#1A365D] text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={service.link} className="text-[#1A365D] font-medium flex items-center group-hover:text-[#D4AF37]">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-[#1A365D] hover:bg-[#142b4c] text-white">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
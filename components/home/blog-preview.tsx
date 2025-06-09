"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from '@/lib/motion';

const blogPosts = [
  {
    title: "Understanding Nepal's New VAT Regulations for 2025",
    excerpt: "A comprehensive guide to the latest VAT regulations in Nepal and how they impact businesses across different sectors.",
    date: "October 15, 2024",
    readTime: "8 min read",
    category: "Tax",
    image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "understanding-nepals-new-vat-regulations"
  },
  {
    title: "Financial Reporting Best Practices for Nepalese SMEs",
    excerpt: "Learn how small and medium enterprises in Nepal can improve their financial reporting to attract investors and comply with regulations.",
    date: "September 28, 2024",
    readTime: "6 min read",
    category: "Financial Reporting",
    image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "financial-reporting-best-practices-nepalese-smes"
  },
  {
    title: "How Internal Controls Can Protect Your Business from Fraud",
    excerpt: "Discover the essential internal control mechanisms that every Nepalese business should implement to prevent financial fraud.",
    date: "September 10, 2024",
    readTime: "5 min read",
    category: "Compliance",
    image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "internal-controls-protect-business-fraud"
  }
];

export default function BlogPreview() {
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
            Financial Insights & Updates
          </h2>
          <p className="text-gray-600">
            Stay informed about the latest developments in Nepalese financial regulations, tax laws, and accounting best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1A365D]/10 text-[#1A365D]">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-[#1A365D] text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 text-base line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="border-t pt-4 flex flex-col items-start space-y-4">
                  <div className="flex items-center text-sm text-gray-500 w-full">
                    <span className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-[#1A365D] font-medium flex items-center hover:text-[#D4AF37] transition-colors"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-[#1A365D] hover:bg-[#142b4c] text-white">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
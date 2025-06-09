"use client";

import { useState, useEffect, useRef } from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from '@/lib/motion';

const testimonials = [
  {
    quote: "NFA Partners has been instrumental in streamlining our financial processes. Their expertise in Nepalese tax regulations saved us from costly compliance issues.",
    name: "Aarav Sharma",
    position: "CEO, Kathmandu Construction Ltd.",
    company: "Kathmandu Construction Ltd.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "As an NGO operating in Nepal, we needed accountants who understand both international and local requirements. The team at NFA Partners has exceeded our expectations.",
    name: "Sita Thapa",
    position: "Finance Director",
    company: "Nepal Education Initiative",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Their audit services are thorough and professional. We appreciate their attention to detail and commitment to maintaining the highest standards of financial reporting.",
    name: "Rajesh Gurung",
    position: "CFO",
    company: "Himalayan Bank Ltd.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "NFA Partners helped us navigate the complex tax landscape when expanding our retail chain across Nepal. Their strategic advice has been invaluable to our growth.",
    name: "Anisha Shrestha",
    position: "Owner",
    company: "Kathmandu Fashion Retail",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const maxIndex = testimonials.length - 1;
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);
  };

  const prev = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  useEffect(() => {
    setMounted(true);
    
    autoPlayRef.current = setInterval(() => {
      next();
    }, 6000);
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  if (!mounted) return null;

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[currentIndex === maxIndex ? 0 : currentIndex + 1]
  ];

  return (
    <section className="py-20 bg-[#1A365D]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300">
            We've helped hundreds of businesses across Nepal achieve financial clarity and compliance.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <div className="text-[#D4AF37] mb-4">
                      <Quote className="h-10 w-10" />
                    </div>
                    <p className="text-gray-700 text-lg italic">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1A365D]">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#D4AF37] w-8' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev}
              className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white pointer-events-auto"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next}
              className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white pointer-events-auto"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-16">
          <p className="text-center text-white/80 mb-6">Trusted by leading organizations in Nepal</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm h-16 w-32 rounded flex items-center justify-center">
                <div className="text-white/90 font-semibold">Client {index}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
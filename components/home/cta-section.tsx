"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall, Calendar } from "lucide-react";
import { motion } from "@/lib/motion";

export default function CtaSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-gradient-to-r from-[#1A365D] to-[#2A4A7F]" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Schedule a free consultation with our expert team to discuss your
              unique business needs and discover how we can help you achieve
              financial clarity and compliance.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8971F] text-white"
              >
                <Link href="https://cal.com/raushn-pandit-pii-global" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white  bg-white/10"
              >
                <Link href="tel:9851213979" className="flex items-center">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Call Us Now
                </Link>
              </Button>
            </div>

            <p className="text-gray-300 mt-6">
              No obligation, no pressure. Just expert advice for your business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, Shield, Zap } from "lucide-react";
import { motion } from "@/lib/motion";
import Image from "next/image";

export default function AboutPreview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-white" id="about-us">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">
                {`Nepal's Trusted Financial Partners Since 2005`}
              </h2>
              <p className="text-gray-600 mb-6">
                {` Founded with a vision to elevate financial standards in Nepal,
                Anish & Associates has grown to become one of the country's most
                respected audit and accounting firms.`}
              </p>
              <p className="text-gray-600 mb-8">
                {`                We're proud to hold all regulatory licenses from the Institute of Chartered Accountants of Nepal (ICAN) and maintain rigorous professional standards across all our services.
`}{" "}
              </p>

              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#1A365D]/10 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-[#1A365D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A365D]">
                      ICAN Certified
                    </h3>
                    <p className="text-gray-600">
                      Full compliance with all Nepalese regulatory standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#1A365D]/10 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-[#1A365D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A365D]">
                      100% Confidential
                    </h3>
                    <p className="text-gray-600">
                      Your financial data is always protected
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#1A365D]/10 p-3 rounded-full mr-4">
                    <Zap className="h-6 w-6 text-[#1A365D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A365D]">
                      Modern Approach
                    </h3>
                    <p className="text-gray-600">
                      Technology-driven financial solutions
                    </p>
                  </div>
                </div>
              </div>

               
            </motion.div>
          </div>

          {/* Image with overlapping elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="NFA Partners team discussing financial strategies"
                width={1000}
                height={1000}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Stats card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-lg w-48 hidden md:block">
              <p className="text-[#D4AF37] text-5xl font-bold">3+</p>
              <p className="text-gray-700 mt-2">Years of Excellence</p>
            </div>

            {/* Client card */}
            <div className="absolute -top-10 -right-10 bg-[#1A365D] p-6 rounded-lg shadow-lg w-60 hidden md:block">
              <p className="text-white text-5xl font-bold">150+</p>
              <p className="text-gray-300 mt-2">Satisfied Clients</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

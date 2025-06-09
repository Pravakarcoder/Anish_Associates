"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  company: z.string().optional(),
  service: z.string({
    required_error: "Please select a service you're interested in.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Form submitted successfully",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1A365D]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Have questions or ready to start working together? Reach out to our
            team for expert financial guidance.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A365D] mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#1A365D]/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#1A365D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A365D]">
                      Office Address
                    </h3>
                    <p className="text-gray-600">
                      Kamaladi Commercial Complex
                      <br />
                      3rd Floor, Suite 304
                      <br />
                      Kamaladi, Kathmandu 44600, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#1A365D]/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#1A365D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A365D]">
                      Phone
                    </h3>
                    <p className="text-gray-600">
                      Office: +977 1 4444555
                      <br />
                      Mobile: +977 9801234567
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#1A365D]/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#1A365D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A365D]">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      General Inquiries: info@nfapartners.com
                      <br />
                      Client Support: support@nfapartners.com
                      <br />
                      New Business: sales@nfapartners.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#1A365D]/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-[#1A365D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A365D]">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:30 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 rounded-lg overflow-hidden shadow-md h-80 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.236219442056!2d85.31345491501754!3d27.705725382792194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c9c9838ef5%3A0x5c09a28c01225839!2sKamaladi%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1652942861749!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NFA Partners Office Location"
                ></iframe>
              </div>

              {/* WhatsApp Support */}
              <div className="mt-10 p-6 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-start">
                  <div className="bg-green-500 p-3 rounded-full mr-4">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-700">
                      WhatsApp Support
                    </h3>
                    <p className="text-green-600 mb-4">
                      Need quick answers? Chat with our support team on WhatsApp
                      for immediate assistance.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700">
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h2 className="text-3xl font-bold text-[#1A365D] mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  {`  Fill out the form below and we'll get back to you within 24 hours.`}
                </p>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address*</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your.email@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number*</FormLabel>
                            <FormControl>
                              <Input placeholder="+977 98XXXXXXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your company (optional)"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interested In*</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="auditing">
                                Auditing Services
                              </SelectItem>
                              <SelectItem value="tax">Tax Advisory</SelectItem>
                              <SelectItem value="financial">
                                Financial Reporting
                              </SelectItem>
                              <SelectItem value="bookkeeping">
                                Bookkeeping
                              </SelectItem>
                              <SelectItem value="compliance">
                                Compliance Services
                              </SelectItem>
                              <SelectItem value="internal-control">
                                Internal Control Systems
                              </SelectItem>
                              <SelectItem value="other">
                                Other Services
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message*</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe what you need help with..."
                              className="min-h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#1A365D] hover:bg-[#142b4c]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\"
                            xmlns="http://www.w3.org/2000/svg\"
                            fill="none\"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25\"
                              cx="12\"
                              cy="12\"
                              r="10\"
                              stroke="currentColor\"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>

                    <FormDescription className="text-center">
                      By submitting this form, you agree to our privacy policy
                      and terms of service.
                    </FormDescription>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

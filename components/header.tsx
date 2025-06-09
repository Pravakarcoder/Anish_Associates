"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/team', label: 'Our Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className={cn(
            "h-10 w-auto transition-all duration-300",
            isScrolled ? "text-primary" : "text-white"
          )} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isScrolled 
                  ? "text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white" 
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button variant="default" className="bg-[#D4AF37] hover:bg-[#B8971F] text-white">
            Book Consultation
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className={cn(
                "h-6 w-6",
                isScrolled ? "text-gray-900 dark:text-gray-100" : "text-white"
              )} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="px-3 py-2 text-lg font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                >
                  {route.label}
                </Link>
              ))}
              <Button className="mt-4 bg-[#D4AF37] hover:bg-[#B8971F] text-white">
                Book Consultation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
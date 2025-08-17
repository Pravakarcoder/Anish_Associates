import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="bg-[#1A365D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo className="text-white mb-4" />
            <p className="text-gray-300 mt-4 mb-6">
              {`  Empowering Nepal's businesses with trusted financial expertise since 2023.`}
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61572868329771"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact"].map((item) => (
                // {['Home', 'About Us', 'Services', 'Industries', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${
                      item === "Home"
                        ? ""
                        : item.toLowerCase().replace(" ", "-")
                    }`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Auditing Services",
                "Tax Advisory",
                "Financial Reporting",
                "Bookkeeping",
                "Compliance Services",
                "Internal Control Systems",
              ].map((service) => (
                <li key={service}>
                  <div className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#D4AF37]" />
                <span className="text-gray-300">
                  Near KIST Hospital Imadol 1, Lalitpur
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#D4AF37]" />
                <Link href="tel:9851213979" className="text-gray-300">
                  +977 9851213979
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#D4AF37]" />
                <Link href="mailto:anishassociates.offical@gmail.com">
                  {" "}
                  <span className="text-gray-300">
                    caanishandassociates@gmail.com
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Anish & Associates. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

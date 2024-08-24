"use client";
import { MailIcon, PhoneIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const QuickLinks = () => (
  <div className="px-6 w-full md:w-1/2 lg:w-1/4">
    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
    <ul className="space-y-2">
      {["About", "Services", "Portfolio", "Contact"].map((link) => (
        <li key={link}>
          <Link href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => (
  <div className="px-6 w-full md:w-1/2 lg:w-1/4">
    <h3 className="text-lg font-semibold mb-4">Services</h3>
    <ul className="space-y-2">
      {["AI/ML", "Web Development", "Blockchain"].map((service) => (
        <li key={service}>
          <Link href={`#${service.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-white transition-colors">
            {service}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const ContactInfo = () => (
  <div className="px-6 w-full md:w-1/2 lg:w-1/4">
    <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
    <ul className="space-y-2">
      {[
        { icon: MailIcon, text: "helios@gmail.com", href: "mailto:helios@gmail.com" },
        { icon: MailIcon, text: "info.helios@gmail.com", href: "mailto:info.helios@gmail.com" },
        { icon: PhoneIcon, text: "+0098 9893 5647, +0096 3434 5678", href: "tel:+00989893564" },
      ].map(({ icon: Icon, text, href }, index) => (
        <li key={index}>
          <Link href={href} className="flex items-center text-gray-300 hover:text-white transition-colors">
            <Icon className="w-4 h-4 mr-2" />
            <span>{text}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap -mx-6 space-y-8 md:space-y-0">
          <div className="px-6 w-full lg:w-1/4">
            <Image src="/logo.png" alt="Helios Innovations Logo" width={150} height={50} />
            <p className="mt-4">We provide high-quality AI/ML, Web Development, and Blockchain services for your business growth.</p>
            <div className="mt-4 flex space-x-4">
              {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <QuickLinks />
          <Services />
          <ContactInfo />
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
        </div>
        <div className="mt-12 text-center text-sm">
          <p>© {new Date().getFullYear()} Helios Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-primary-navy)]/95 backdrop-blur-sm border-b border-[var(--color-secondary-navy)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-pink)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-[var(--color-pure-white)] font-semibold text-lg">Jagadeesan</div>
              <div className="text-[var(--color-accent-cyan)] text-xs">Frappe Developer</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[var(--color-light-gray)] hover:text-[var(--color-pure-white)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-pink)] hover:from-[var(--color-accent-purple)]/90 hover:to-[var(--color-accent-pink)]/90 text-white font-semibold"
            >
              <a href="mailto:jagadeesan1104@gmail.com">
                <Download className="w-4 h-4 mr-2" />
                Hire Me
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-light-gray)] hover:text-[var(--color-pure-white)] transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--color-secondary-navy)]">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[var(--color-light-gray)] hover:text-[var(--color-pure-white)] transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-pink)] hover:from-[var(--color-accent-purple)]/90 hover:to-[var(--color-accent-pink)]/90 text-white font-semibold"
                >
                  <a href="mailto:jagadeesan1104@gmail.com">
                    <Download className="w-4 h-4 mr-2" />
                    Hire Me
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block mb-6 md:mb-8 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
          <span className="text-xs md:text-sm font-medium text-accent">✨ AI-Driven Innovation</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
          We Build{' '}
          <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            AI-Driven SaaS
          </span>
          {' '}Solutions for the Future
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
          Specializing in AI-powered products, scalable web applications, and cutting-edge mobile apps that transform your business through intelligent automation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground group"
          >
            Get in Touch
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-muted"
          >
            View Our Work
          </Button>
        </div>

        {/* Floating Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-12 md:mt-16">
          <div className="p-3 md:p-4 bg-card border border-border rounded-lg backdrop-blur hover:border-accent/50 transition-colors">
            <div className="text-xl md:text-2xl font-bold text-accent mb-1 md:mb-2">50+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="p-3 md:p-4 bg-card border border-border rounded-lg backdrop-blur hover:border-accent/50 transition-colors">
            <div className="text-xl md:text-2xl font-bold text-accent mb-1 md:mb-2">15+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="p-3 md:p-4 bg-card border border-border rounded-lg backdrop-blur hover:border-accent/50 transition-colors">
            <div className="text-xl md:text-2xl font-bold text-accent mb-1 md:mb-2">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

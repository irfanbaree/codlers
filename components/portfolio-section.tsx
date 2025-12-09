'use client'

import { ArrowUpRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Flashlead',
    description: 'Flash Lead is an all-in-one cloud platform designed for businesses to streamline both sales management and customer support/engagement. It offers a full-featured sales CRM (lead tracking, customizable pipelines, omnichannel chats) plus a support side (ticketing, no-code chatbots, omni-channel messaging), with integrations across thousands of apps, enabling companies to shorten sales cycles, boost conversions and raise customer satisfaction—all from one interface.',
    tags: ['AI', 'CRM', 'SaaS', 'WABA', 'Twilio', 'Laravel', 'RestAPI', 'React'],
    image: '/flashlead.webp',
  },
  {
    id: 2,
    title: 'ClinicUnlock',
    description: 'Clinic unlock is a cutting-edge performance software that streamlines the entire client booking journey, from bookings to reminders to visit reviews. It uses the best channels and the smartest touchpoints to save costs, grow revenue, and increase loyalty from an automated booking process to Whatsapp marketing campaigns and offers.',
    tags: ['Healthcare', 'AI', 'Scheduling', 'Automation', 'Chatbot'],
    image: '/clinicunlock.png',
  },
  {
    id: 3,
    title: 'ApologiaBot',
    description: 'ApologiaBot is an AI-driven tool designed to engage seekers and believers by offering biblically grounded answers to faith questions across digital platforms. It leverages conversational AI trained on trusted theological sources to facilitate safe, honest dialogue about Christianity, empowering users to explore scripture, apologetics, and spiritual growth in a responsive, interactive format.',
    tags: ['AI', 'NLP', 'Chatbot'],
    image: '/ai-chatbot-interface-conversation.jpg',
  },
  {
    id: 4,
    title: 'Medicoder',
    description: 'MediCoder transforms medical documents into accurate codes using advanced AI, providing support for multiple coding standards including ICD-10, CPT, and HCPCS. Its AI-powered engine enhances precision and efficiency, helping healthcare professionals streamline the coding process. Built with enterprise-grade security and full HIPAA compliance, MediCoder ensures that all medical data remains protected while delivering fast, reliable coding results.',
    tags: ['AI', 'Healthcare', 'Automation', 'Document Parsing',  'ICD-10', 'CPT', 'HCPCS'],
    image: '/medicoder.png',
  },
  {
    id: 5,
    title: 'AI Video Generator',
    description: 'This AI Video Generator transforms images and scripts into fully produced videos, offering realistic avatars and dynamic visual storytelling. By integrating multiple video generation tools through n8n workflows, it automates the production process for marketers, educators, and content creators, allowing them to quickly generate high-quality videos from simple inputs. Users can customize avatars, add voiceovers, and combine media assets seamlessly, making video creation faster, more scalable, and highly versatile.',
    tags: ['AI', 'Video', 'Automation', 'N8N', 'Workflows'],
    image: '/videogenerator.png',
  },
 /* {
    id: 6,
    title: 'Data Intelligence Platform',
    description: 'Real-time data analytics and visualization with AI insights',
    tags: ['AI', 'Analytics', 'Data'],
    image: '/data-analytics-dashboard-charts.jpg',
  },*/
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    // <section className="py-12 md:py-20 lg:py-32">
    <section className="py-2 md:py-2 lg:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Our Portfolio
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the innovative AI and SaaS solutions we've built for forward-thinking companies
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden bg-muted">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed truncate">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 md:px-3 py-1 bg-primary/20 text-accent text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Button
                  variant="ghost"
                  onClick={() => setSelectedProject(item)}
                  className="w-full group/btn hover:bg-accent hover:text-accent-foreground justify-between text-sm md:text-base"
                >
                  View Project
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-2xl bg-card border border-border rounded-xl p-4 md:p-8 shadow-2xl animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X size={24} className="text-foreground" />
            </button>

            {/* Project Image */}
            <div className="relative h-40 md:h-64 rounded-lg overflow-hidden mb-4 md:mb-6">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 pr-8">
              {selectedProject.title}
            </h2>

            {/* Project Description */}
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              {selectedProject.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 md:px-4 py-1 md:py-2 bg-primary/20 text-accent font-medium text-sm rounded-full border border-accent/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <Button
              onClick={() => setSelectedProject(null)}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}

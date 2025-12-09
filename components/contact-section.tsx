'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { sendContactEmail } from '@/app/actions/sendContactEmail';

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section className="py-2 md:py-2 lg:py-2">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? We'd love to hear from you. Reach out and let's build something amazing together.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Information */}
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">Contact Info</h3>
                        </div>

                        {/* Email */}
                        <div className="flex gap-3 md:gap-4">
                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                <Mail className="text-accent" size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Email</h4>
                                <a
                                    href="mailto:contact@codlers.com"
                                    className="text-muted-foreground hover:text-accent transition-colors text-sm md:text-base"
                                >
                                    contact@codlers.com
                                </a>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex gap-3 md:gap-4">
                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="text-accent" size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">WhatsApp</h4>
                                <a
                                    href="https://wa.me/+923455405555"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-accent transition-colors text-sm md:text-base"
                                >
                                    Start a conversation
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-semibold text-foreground mb-4 text-sm md:text-base">Follow Us</h4>
                            <div className="flex gap-3 md:gap-4">
                                <a
                                    key="facebook"
                                    href="https://www.facebook.com/codlers/"
                                    className="w-10 h-10 rounded-lg bg-muted border border-border hover:border-accent/50 hover:bg-accent/10 flex items-center justify-center transition-colors"
                                >
                                    <span className="text-xs font-semibold text-foreground">F</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card border border-border rounded-xl p-4 md:p-8">
                        <form
                            action={async (formData: FormData) => {
                                await sendContactEmail(formData);
                                setSubmitted(true);
                                setTimeout(() => setSubmitted(false), 3000);
                            }}
                            className="space-y-4 md:space-y-6"
                        >
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="w-full px-3 md:px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-sm md:text-base"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-3 md:px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-sm md:text-base"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Tell us about your project..."
                                    rows={4}
                                    className="w-full px-3 md:px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none text-sm md:text-base"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group text-sm md:text-base"
                            >
                                Send Message
                                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Button>

                            {/* Success Message */}
                            {submitted && (
                                <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg text-center">
                                    <p className="text-xs md:text-sm text-accent font-medium">Message sent successfully! We'll be in touch soon.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
